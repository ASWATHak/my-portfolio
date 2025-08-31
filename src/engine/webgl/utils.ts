import * as THREE from 'three';

export class WebGLCapabilities {
  private static instance: WebGLCapabilities;
  private renderer: THREE.WebGLRenderer | null = null;
  private capabilities: {
    webgl2: boolean;
    maxTextureSize: number;
    maxVertexTextures: number;
    maxFragmentTextures: number;
    instancedArrays: boolean;
    vertexArrayObject: boolean;
  } | null = null;

  static getInstance(): WebGLCapabilities {
    if (!WebGLCapabilities.instance) {
      WebGLCapabilities.instance = new WebGLCapabilities();
    }
    return WebGLCapabilities.instance;
  }

  checkCapabilities() {
    if (this.capabilities) return this.capabilities;

    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    
    if (!gl) {
      this.capabilities = {
        webgl2: false,
        maxTextureSize: 0,
        maxVertexTextures: 0,
        maxFragmentTextures: 0,
        instancedArrays: false,
        vertexArrayObject: false,
      };
      return this.capabilities;
    }

    this.capabilities = {
      webgl2: !!canvas.getContext('webgl2'),
      maxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),
      maxVertexTextures: gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
      maxFragmentTextures: gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),
      instancedArrays: !!gl.getExtension('ANGLE_instanced_arrays'),
      vertexArrayObject: !!gl.getExtension('OES_vertex_array_object'),
    };

    canvas.remove();
    return this.capabilities;
  }

  createOptimizedRenderer(canvas?: HTMLCanvasElement): THREE.WebGLRenderer {
    const capabilities = this.checkCapabilities();
    
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: capabilities.webgl2,
      alpha: true,
      powerPreference: 'high-performance',
      stencil: false,
      depth: true,
    });

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    return this.renderer;
  }

  disposeRenderer() {
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer = null;
    }
  }
}

export const createShaderMaterial = (
  vertexShader: string,
  fragmentShader: string,
  uniforms: Record<string, THREE.IUniform> = {}
): THREE.ShaderMaterial => {
  return new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2() },
      ...uniforms,
    },
    transparent: true,
    blending: THREE.AdditiveBlending,
  });
};

export const updateShaderTime = (material: THREE.ShaderMaterial, time: number) => {
  if (material.uniforms.uTime) {
    material.uniforms.uTime.value = time;
  }
};
