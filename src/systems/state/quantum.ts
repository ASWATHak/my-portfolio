import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

interface QuantumState {
  // Navigation state
  currentDimension: string;
  isTransitioning: boolean;
  navigationHistory: string[];
  
  // Performance state
  fps: number;
  frameTime: number;
  isLowPerformance: boolean;
  
  // Interaction state
  mousePosition: { x: number; y: number };
  isInteracting: boolean;
  lastInteraction: number;
  
  // Visual effects state
  particleCount: number;
  shaderQuality: 'low' | 'medium' | 'high';
  enableMotion: boolean;
  
  // Methods
  setDimension: (dimension: string) => void;
  setTransitioning: (transitioning: boolean) => void;
  updatePerformance: (fps: number, frameTime: number) => void;
  updateMouse: (x: number, y: number) => void;
  setInteracting: (interacting: boolean) => void;
  adaptToPerformance: () => void;
}

export const useQuantumStore = create<QuantumState>()(
  subscribeWithSelector((set, get) => ({
    // Initial state
    currentDimension: 'quantum-home',
    isTransitioning: false,
    navigationHistory: [],
    
    fps: 60,
    frameTime: 16.67,
    isLowPerformance: false,
    
    mousePosition: { x: 0, y: 0 },
    isInteracting: false,
    lastInteraction: Date.now(),
    
    particleCount: 1000,
    shaderQuality: 'high',
    enableMotion: true,
    
    // Methods
    setDimension: (dimension) => 
      set((state) => ({
        currentDimension: dimension,
        navigationHistory: [...state.navigationHistory.slice(-10), dimension],
      })),
    
    setTransitioning: (transitioning) => set({ isTransitioning: transitioning }),
    
    updatePerformance: (fps, frameTime) => 
      set(() => {
        const isLowPerformance = fps < 45 || frameTime > 22;
        return {
          fps,
          frameTime,
          isLowPerformance,
        };
      }),
    
    updateMouse: (x, y) => 
      set({
        mousePosition: { x, y },
        lastInteraction: Date.now(),
      }),
    
    setInteracting: (interacting) => 
      set({
        isInteracting: interacting,
        lastInteraction: Date.now(),
      }),
    
    adaptToPerformance: () => {
      const state = get();
      if (state.isLowPerformance) {
        set({
          particleCount: Math.max(200, state.particleCount * 0.7),
          shaderQuality: state.shaderQuality === 'high' ? 'medium' : 'low',
        });
      }
    },
  }))
);

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  const updatePerformance = useQuantumStore((state) => state.updatePerformance);
  const adaptToPerformance = useQuantumStore((state) => state.adaptToPerformance);
  
  const monitor = {
    lastTime: performance.now(),
    frameCount: 0,
    fpsArray: [] as number[],
    
    update() {
      const now = performance.now();
      const frameTime = now - this.lastTime;
      this.lastTime = now;
      
      this.frameCount++;
      this.fpsArray.push(1000 / frameTime);
      
      if (this.frameCount % 60 === 0) {
        const avgFps = this.fpsArray.reduce((a, b) => a + b) / this.fpsArray.length;
        updatePerformance(avgFps, frameTime);
        adaptToPerformance();
        this.fpsArray = [];
      }
    }
  };
  
  return monitor;
};
