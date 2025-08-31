export const holographicVertexShader = `
  attribute float scale;
  attribute vec3 offset;
  attribute float phase;
  
  uniform float uTime;
  uniform float uDistortion;
  
  varying vec2 vUv;
  varying float vPhase;
  varying vec3 vWorldPosition;
  
  void main() {
    vUv = uv;
    vPhase = phase;
    
    vec3 pos = position;
    
    // Holographic distortion
    pos.x += sin(uTime * 2.0 + phase) * uDistortion * 0.1;
    pos.y += cos(uTime * 1.5 + phase) * uDistortion * 0.1;
    pos.z += sin(uTime * 3.0 + phase) * uDistortion * 0.05;
    
    // Scale and offset for instancing
    pos *= scale;
    pos += offset;
    
    vec4 worldPosition = modelMatrix * vec4(pos, 1.0);
    vWorldPosition = worldPosition.xyz;
    
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

export const holographicFragmentShader = `
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uOpacity;
  uniform float uHologramIntensity;
  
  varying vec2 vUv;
  varying float vPhase;
  varying vec3 vWorldPosition;
  
  void main() {
    vec2 uv = vUv;
    
    // Holographic scanlines
    float scanlines = sin(uv.y * 800.0 + uTime * 10.0) * 0.04;
    
    // Holographic interference
    float interference = sin(uv.x * 500.0 + uTime * 5.0) * 
                        sin(uv.y * 300.0 + uTime * 7.0) * 0.1;
    
    // Edge glow effect
    float edge = 1.0 - smoothstep(0.0, 0.1, min(min(uv.x, 1.0 - uv.x), min(uv.y, 1.0 - uv.y)));
    
    // Phase-based color shift
    vec3 color = uColor;
    color.r += sin(vPhase + uTime) * 0.2;
    color.g += cos(vPhase + uTime * 1.3) * 0.2;
    color.b += sin(vPhase + uTime * 0.7) * 0.2;
    
    // Distance-based opacity
    float dist = length(vWorldPosition - cameraPosition);
    float fadeOut = 1.0 - smoothstep(50.0, 100.0, dist);
    
    float finalOpacity = uOpacity * fadeOut * (1.0 + edge * 2.0) * uHologramIntensity;
    finalOpacity += scanlines + interference;
    
    gl_FragColor = vec4(color, finalOpacity);
  }
`;

export const particleVertexShader = `
  attribute float size;
  attribute vec3 color;
  attribute float alpha;
  attribute float phase;
  
  uniform float uTime;
  uniform float uScale;
  
  varying vec3 vColor;
  varying float vAlpha;
  varying float vPhase;
  
  void main() {
    vColor = color;
    vAlpha = alpha;
    vPhase = phase;
    
    vec3 pos = position;
    
    // Quantum fluctuation
    pos.x += sin(uTime * 2.0 + phase) * 0.1;
    pos.y += cos(uTime * 1.7 + phase) * 0.1;
    pos.z += sin(uTime * 2.3 + phase) * 0.1;
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = size * uScale * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const particleFragmentShader = `
  uniform float uTime;
  uniform float uOpacity;
  
  varying vec3 vColor;
  varying float vAlpha;
  varying float vPhase;
  
  void main() {
    vec2 center = gl_PointCoord - 0.5;
    float dist = length(center);
    
    if (dist > 0.5) discard;
    
    // Quantum glow
    float glow = 1.0 - smoothstep(0.0, 0.5, dist);
    glow = pow(glow, 2.0);
    
    // Phase-based flicker
    float flicker = 0.8 + 0.2 * sin(uTime * 10.0 + vPhase);
    
    float alpha = vAlpha * glow * flicker * uOpacity;
    
    gl_FragColor = vec4(vColor, alpha);
  }
`;

export const quantumTunnelVertexShader = `
  uniform float uTime;
  uniform float uProgress;
  
  varying vec2 vUv;
  varying float vDistortion;
  
  void main() {
    vUv = uv;
    
    vec3 pos = position;
    
    // Tunnel distortion
    float tunnelEffect = uProgress * 2.0;
    float radialDist = length(pos.xy);
    
    pos.z += sin(radialDist * 10.0 - uTime * 5.0) * tunnelEffect * 0.1;
    
    // Spiral motion
    float angle = atan(pos.y, pos.x) + uTime * 2.0;
    pos.x += cos(angle) * tunnelEffect * 0.05;
    pos.y += sin(angle) * tunnelEffect * 0.05;
    
    vDistortion = tunnelEffect;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

export const quantumTunnelFragmentShader = `
  uniform float uTime;
  uniform float uProgress;
  uniform vec3 uColorStart;
  uniform vec3 uColorEnd;
  
  varying vec2 vUv;
  varying float vDistortion;
  
  void main() {
    vec2 center = vUv - 0.5;
    float dist = length(center);
    
    // Tunnel rings
    float rings = sin(dist * 50.0 - uTime * 10.0);
    
    // Color gradient
    vec3 color = mix(uColorStart, uColorEnd, dist + vDistortion);
    
    // Add quantum energy
    color += rings * 0.2;
    
    float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
    alpha *= uProgress;
    
    gl_FragColor = vec4(color, alpha);
  }
`;
