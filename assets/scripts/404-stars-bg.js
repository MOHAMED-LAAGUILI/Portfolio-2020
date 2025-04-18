/* eslint-disable no-undef */
document.addEventListener("DOMContentLoaded", () => {
  const e = document.getElementById("starsCanvas"),
    t = new THREE.WebGLRenderer({ canvas: e, antialias: !0 });
  t.setSize(window.innerWidth, window.innerHeight);
  const n = new THREE.Scene(),
    r = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.1,
      2e3
    );
    
  r.position.z = 1e3;
  const o = [16711680, 65280, 255, 16711935, 65535, 16776960],
    i = (() => {
      const e = new THREE.BufferGeometry(),
        t = new Float32Array(5e3),
        n = new Float32Array(5e4),
        r = new Float32Array(500);
      for (let e = 0; e < 5e4; e++) {
        const i = 3 * e;
        (t[i] = 2e3 * (Math.random() - 0.5)),
          (t[i + 1] = 2e3 * (Math.random() - 0.5)),
          (t[i + 2] = 2e3 * (Math.random() - 0.5));
        const a = new THREE.Color(o[Math.floor(Math.random() * o.length)]);
        (n[i] = a.r),
          (n[i + 1] = a.g),
          (n[i + 2] = a.b),
          (r[e] = 100 * Math.random() + 2);
      }
      e.setAttribute("position", new THREE.BufferAttribute(t, 3)),
        e.setAttribute("color", new THREE.BufferAttribute(n, 3)),
        e.setAttribute("size", new THREE.BufferAttribute(r, 1));
      const i = new THREE.PointsMaterial({
        size: 5,
        sizeAttenuation: !0,
        vertexColors: !0,
        blending: THREE.AdditiveBlending,
        transparent: !0,
        opacity: 0.8,
        emissive: new THREE.Color(65535),
        emissiveIntensity: 0.9,
      });
      return new THREE.Points(e, i);
    })();
  n.add(i);
  const a = (() => {
    const e = new THREE.SphereGeometry(500, 60, 60),
      t = new THREE.TextureLoader().load(
        "https://tse4.mm.bing.net/th?id=OIP.yrIhhMh7kRV3E8UMZJcm3AAAAA&pid=Api&P=0&h=180"
      ),
      n = new THREE.MeshBasicMaterial({
        map: t,
        opacity: 1,
        transparent: !0,
        blending: THREE.AdditiveBlending,
      });
    return new THREE.Mesh(e, n);
  })();
  n.add(a);
  const s = (() => {
    const e = new THREE.BufferGeometry(),
      t = new Float32Array(12e3),
      n = new Float32Array(12e3);
    for (let e = 0; e < 4e3; e++) {
      const r = 3 * e;
      (t[r] = 2e3 * Math.random() - 1e3),
        (t[r + 1] = 2e3 * Math.random() - 1e3),
        (t[r + 2] = 2e3 * Math.random() - 1e3);
      const o = new THREE.Color(Math.random(), Math.random(), Math.random());
      (n[r] = o.r), (n[r + 1] = o.g), (n[r + 2] = o.b);
    }
    e.setAttribute("position", new THREE.BufferAttribute(t, 3)),
      e.setAttribute("color", new THREE.BufferAttribute(n, 3));
    const r = new THREE.PointsMaterial({
      size: 1,
      vertexColors: !0,
      blending: THREE.AdditiveBlending,
      transparent: !0,
      opacity: 0.6,
    });
    return new THREE.Points(e, r);
  })();
  n.add(s);
  let d = 0,
    E = 0;
  document.addEventListener("mousemove", (e) => {
    (d = (e.clientX / window.innerWidth) * 2 - 1),
      (E = (-e.clientY / window.innerHeight) * 2 + 1);
  });
  const w = () => {
    requestAnimationFrame(w);
    ((e) => {
      for (let t = 0; t < 5e4; t++) {
        const n = 3 * t,
          r = e[n],
          o = e[n + 1],
          i = e[n + 2],
          a = Math.sqrt(r * r + o * o + i * i),
          s = (-0.2 * (2e3 - a)) / 2e3,
          w = Math.cos(2e-7),
          h = Math.sin(2e-7);
        (e[n] = w * r - h * o + (s * r) / a),
          (e[n + 1] = h * r + w * o + (s * o) / a),
          (e[n + 2] = i + (s * i) / a),
          a < 50 &&
            ((e[n] = 2e4 * (Math.random() - 0.5)),
            (e[n + 1] = 2e4 * (Math.random() - 0.5)),
            (e[n + 2] = 2e4 * (Math.random() - 0.5)));
        const c = 500 * d - r,
          m = 500 * E - o,
          l = Math.sqrt(c * c + m * m);
        if (l < 200) {
          const t = 2e-4 * (150 - l);
          (e[n] += c * t), (e[n + 1] += m * t);
        }
      }
      i.geometry.attributes.position.needsUpdate = !0;
    })(i.geometry.attributes.position.array),
      (i.rotation.x += 6e-4),
      (i.rotation.y += 6e-4),
      (a.rotation.x += 2e-4),
      (a.rotation.y += 2e-4),
      (s.rotation.x += 0.001),
      (s.rotation.y += 0.001),
      t.render(n, r);
  };
  w(),
    window.addEventListener("resize", () => {
      (r.aspect = window.innerWidth / window.innerHeight),
        r.updateProjectionMatrix(),
        t.setSize(window.innerWidth, window.innerHeight);
    });
});