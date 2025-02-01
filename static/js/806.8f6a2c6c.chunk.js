/*! For license information please see 806.8f6a2c6c.chunk.js.LICENSE.txt */
(self.webpackChunkcore_lending_dashboards =
  self.webpackChunkcore_lending_dashboards || []).push([
  [806],
  {
    4914: (t, e, r) => {
      "use strict";
      e._S = e.K = e.TP = e.wE = e.Ee = void 0;
      const n = r(86022),
        i = r(9816),
        s = r(95070);
      function o(t) {
        const e = new Float64Array(16);
        if (t) for (let r = 0; r < t.length; r++) e[r] = t[r];
        return e;
      }
      (e.Ee = 64), (e.wE = 64), (e.TP = 32);
      new Uint8Array(32)[0] = 9;
      const a = o(),
        c = o([1]),
        u = o([
          30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
          16505, 36039, 65139, 11119, 27886, 20995,
        ]),
        h = o([
          61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
          33010, 6542, 64743, 22239, 55772, 9222,
        ]),
        l = o([
          54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
          57905, 49316, 21502, 52590, 14035, 8553,
        ]),
        p = o([
          26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
          26214, 26214, 26214, 26214, 26214, 26214,
        ]),
        f = o([
          41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867,
          153, 11085, 57099, 20417, 9344, 11139,
        ]);
      function d(t, e) {
        for (let r = 0; r < 16; r++) t[r] = 0 | e[r];
      }
      function g(t) {
        let e = 1;
        for (let r = 0; r < 16; r++) {
          let n = t[r] + e + 65535;
          (e = Math.floor(n / 65536)), (t[r] = n - 65536 * e);
        }
        t[0] += e - 1 + 37 * (e - 1);
      }
      function v(t, e, r) {
        const n = ~(r - 1);
        for (let i = 0; i < 16; i++) {
          const r = n & (t[i] ^ e[i]);
          (t[i] ^= r), (e[i] ^= r);
        }
      }
      function y(t, e) {
        const r = o(),
          n = o();
        for (let i = 0; i < 16; i++) n[i] = e[i];
        g(n), g(n), g(n);
        for (let i = 0; i < 2; i++) {
          r[0] = n[0] - 65517;
          for (let e = 1; e < 15; e++)
            (r[e] = n[e] - 65535 - ((r[e - 1] >> 16) & 1)), (r[e - 1] &= 65535);
          r[15] = n[15] - 32767 - ((r[14] >> 16) & 1);
          const t = (r[15] >> 16) & 1;
          (r[14] &= 65535), v(n, r, 1 - t);
        }
        for (let i = 0; i < 16; i++)
          (t[2 * i] = 255 & n[i]), (t[2 * i + 1] = n[i] >> 8);
      }
      function m(t, e) {
        let r = 0;
        for (let n = 0; n < 32; n++) r |= t[n] ^ e[n];
        return (1 & ((r - 1) >>> 8)) - 1;
      }
      function w(t, e) {
        const r = new Uint8Array(32),
          n = new Uint8Array(32);
        return y(r, t), y(n, e), m(r, n);
      }
      function _(t) {
        const e = new Uint8Array(32);
        return y(e, t), 1 & e[0];
      }
      function b(t, e, r) {
        for (let n = 0; n < 16; n++) t[n] = e[n] + r[n];
      }
      function E(t, e, r) {
        for (let n = 0; n < 16; n++) t[n] = e[n] - r[n];
      }
      function I(t, e, r) {
        let n,
          i,
          s = 0,
          o = 0,
          a = 0,
          c = 0,
          u = 0,
          h = 0,
          l = 0,
          p = 0,
          f = 0,
          d = 0,
          g = 0,
          v = 0,
          y = 0,
          m = 0,
          w = 0,
          _ = 0,
          b = 0,
          E = 0,
          I = 0,
          P = 0,
          S = 0,
          O = 0,
          x = 0,
          R = 0,
          A = 0,
          C = 0,
          j = 0,
          T = 0,
          N = 0,
          L = 0,
          q = 0,
          D = r[0],
          z = r[1],
          M = r[2],
          k = r[3],
          $ = r[4],
          U = r[5],
          H = r[6],
          V = r[7],
          K = r[8],
          G = r[9],
          B = r[10],
          F = r[11],
          W = r[12],
          Q = r[13],
          J = r[14],
          Y = r[15];
        (n = e[0]),
          (s += n * D),
          (o += n * z),
          (a += n * M),
          (c += n * k),
          (u += n * $),
          (h += n * U),
          (l += n * H),
          (p += n * V),
          (f += n * K),
          (d += n * G),
          (g += n * B),
          (v += n * F),
          (y += n * W),
          (m += n * Q),
          (w += n * J),
          (_ += n * Y),
          (n = e[1]),
          (o += n * D),
          (a += n * z),
          (c += n * M),
          (u += n * k),
          (h += n * $),
          (l += n * U),
          (p += n * H),
          (f += n * V),
          (d += n * K),
          (g += n * G),
          (v += n * B),
          (y += n * F),
          (m += n * W),
          (w += n * Q),
          (_ += n * J),
          (b += n * Y),
          (n = e[2]),
          (a += n * D),
          (c += n * z),
          (u += n * M),
          (h += n * k),
          (l += n * $),
          (p += n * U),
          (f += n * H),
          (d += n * V),
          (g += n * K),
          (v += n * G),
          (y += n * B),
          (m += n * F),
          (w += n * W),
          (_ += n * Q),
          (b += n * J),
          (E += n * Y),
          (n = e[3]),
          (c += n * D),
          (u += n * z),
          (h += n * M),
          (l += n * k),
          (p += n * $),
          (f += n * U),
          (d += n * H),
          (g += n * V),
          (v += n * K),
          (y += n * G),
          (m += n * B),
          (w += n * F),
          (_ += n * W),
          (b += n * Q),
          (E += n * J),
          (I += n * Y),
          (n = e[4]),
          (u += n * D),
          (h += n * z),
          (l += n * M),
          (p += n * k),
          (f += n * $),
          (d += n * U),
          (g += n * H),
          (v += n * V),
          (y += n * K),
          (m += n * G),
          (w += n * B),
          (_ += n * F),
          (b += n * W),
          (E += n * Q),
          (I += n * J),
          (P += n * Y),
          (n = e[5]),
          (h += n * D),
          (l += n * z),
          (p += n * M),
          (f += n * k),
          (d += n * $),
          (g += n * U),
          (v += n * H),
          (y += n * V),
          (m += n * K),
          (w += n * G),
          (_ += n * B),
          (b += n * F),
          (E += n * W),
          (I += n * Q),
          (P += n * J),
          (S += n * Y),
          (n = e[6]),
          (l += n * D),
          (p += n * z),
          (f += n * M),
          (d += n * k),
          (g += n * $),
          (v += n * U),
          (y += n * H),
          (m += n * V),
          (w += n * K),
          (_ += n * G),
          (b += n * B),
          (E += n * F),
          (I += n * W),
          (P += n * Q),
          (S += n * J),
          (O += n * Y),
          (n = e[7]),
          (p += n * D),
          (f += n * z),
          (d += n * M),
          (g += n * k),
          (v += n * $),
          (y += n * U),
          (m += n * H),
          (w += n * V),
          (_ += n * K),
          (b += n * G),
          (E += n * B),
          (I += n * F),
          (P += n * W),
          (S += n * Q),
          (O += n * J),
          (x += n * Y),
          (n = e[8]),
          (f += n * D),
          (d += n * z),
          (g += n * M),
          (v += n * k),
          (y += n * $),
          (m += n * U),
          (w += n * H),
          (_ += n * V),
          (b += n * K),
          (E += n * G),
          (I += n * B),
          (P += n * F),
          (S += n * W),
          (O += n * Q),
          (x += n * J),
          (R += n * Y),
          (n = e[9]),
          (d += n * D),
          (g += n * z),
          (v += n * M),
          (y += n * k),
          (m += n * $),
          (w += n * U),
          (_ += n * H),
          (b += n * V),
          (E += n * K),
          (I += n * G),
          (P += n * B),
          (S += n * F),
          (O += n * W),
          (x += n * Q),
          (R += n * J),
          (A += n * Y),
          (n = e[10]),
          (g += n * D),
          (v += n * z),
          (y += n * M),
          (m += n * k),
          (w += n * $),
          (_ += n * U),
          (b += n * H),
          (E += n * V),
          (I += n * K),
          (P += n * G),
          (S += n * B),
          (O += n * F),
          (x += n * W),
          (R += n * Q),
          (A += n * J),
          (C += n * Y),
          (n = e[11]),
          (v += n * D),
          (y += n * z),
          (m += n * M),
          (w += n * k),
          (_ += n * $),
          (b += n * U),
          (E += n * H),
          (I += n * V),
          (P += n * K),
          (S += n * G),
          (O += n * B),
          (x += n * F),
          (R += n * W),
          (A += n * Q),
          (C += n * J),
          (j += n * Y),
          (n = e[12]),
          (y += n * D),
          (m += n * z),
          (w += n * M),
          (_ += n * k),
          (b += n * $),
          (E += n * U),
          (I += n * H),
          (P += n * V),
          (S += n * K),
          (O += n * G),
          (x += n * B),
          (R += n * F),
          (A += n * W),
          (C += n * Q),
          (j += n * J),
          (T += n * Y),
          (n = e[13]),
          (m += n * D),
          (w += n * z),
          (_ += n * M),
          (b += n * k),
          (E += n * $),
          (I += n * U),
          (P += n * H),
          (S += n * V),
          (O += n * K),
          (x += n * G),
          (R += n * B),
          (A += n * F),
          (C += n * W),
          (j += n * Q),
          (T += n * J),
          (N += n * Y),
          (n = e[14]),
          (w += n * D),
          (_ += n * z),
          (b += n * M),
          (E += n * k),
          (I += n * $),
          (P += n * U),
          (S += n * H),
          (O += n * V),
          (x += n * K),
          (R += n * G),
          (A += n * B),
          (C += n * F),
          (j += n * W),
          (T += n * Q),
          (N += n * J),
          (L += n * Y),
          (n = e[15]),
          (_ += n * D),
          (b += n * z),
          (E += n * M),
          (I += n * k),
          (P += n * $),
          (S += n * U),
          (O += n * H),
          (x += n * V),
          (R += n * K),
          (A += n * G),
          (C += n * B),
          (j += n * F),
          (T += n * W),
          (N += n * Q),
          (L += n * J),
          (q += n * Y),
          (s += 38 * b),
          (o += 38 * E),
          (a += 38 * I),
          (c += 38 * P),
          (u += 38 * S),
          (h += 38 * O),
          (l += 38 * x),
          (p += 38 * R),
          (f += 38 * A),
          (d += 38 * C),
          (g += 38 * j),
          (v += 38 * T),
          (y += 38 * N),
          (m += 38 * L),
          (w += 38 * q),
          (i = 1),
          (n = s + i + 65535),
          (i = Math.floor(n / 65536)),
          (s = n - 65536 * i),
          (n = o + i + 65535),
          (i = Math.floor(n / 65536)),
          (o = n - 65536 * i),
          (n = a + i + 65535),
          (i = Math.floor(n / 65536)),
          (a = n - 65536 * i),
          (n = c + i + 65535),
          (i = Math.floor(n / 65536)),
          (c = n - 65536 * i),
          (n = u + i + 65535),
          (i = Math.floor(n / 65536)),
          (u = n - 65536 * i),
          (n = h + i + 65535),
          (i = Math.floor(n / 65536)),
          (h = n - 65536 * i),
          (n = l + i + 65535),
          (i = Math.floor(n / 65536)),
          (l = n - 65536 * i),
          (n = p + i + 65535),
          (i = Math.floor(n / 65536)),
          (p = n - 65536 * i),
          (n = f + i + 65535),
          (i = Math.floor(n / 65536)),
          (f = n - 65536 * i),
          (n = d + i + 65535),
          (i = Math.floor(n / 65536)),
          (d = n - 65536 * i),
          (n = g + i + 65535),
          (i = Math.floor(n / 65536)),
          (g = n - 65536 * i),
          (n = v + i + 65535),
          (i = Math.floor(n / 65536)),
          (v = n - 65536 * i),
          (n = y + i + 65535),
          (i = Math.floor(n / 65536)),
          (y = n - 65536 * i),
          (n = m + i + 65535),
          (i = Math.floor(n / 65536)),
          (m = n - 65536 * i),
          (n = w + i + 65535),
          (i = Math.floor(n / 65536)),
          (w = n - 65536 * i),
          (n = _ + i + 65535),
          (i = Math.floor(n / 65536)),
          (_ = n - 65536 * i),
          (s += i - 1 + 37 * (i - 1)),
          (i = 1),
          (n = s + i + 65535),
          (i = Math.floor(n / 65536)),
          (s = n - 65536 * i),
          (n = o + i + 65535),
          (i = Math.floor(n / 65536)),
          (o = n - 65536 * i),
          (n = a + i + 65535),
          (i = Math.floor(n / 65536)),
          (a = n - 65536 * i),
          (n = c + i + 65535),
          (i = Math.floor(n / 65536)),
          (c = n - 65536 * i),
          (n = u + i + 65535),
          (i = Math.floor(n / 65536)),
          (u = n - 65536 * i),
          (n = h + i + 65535),
          (i = Math.floor(n / 65536)),
          (h = n - 65536 * i),
          (n = l + i + 65535),
          (i = Math.floor(n / 65536)),
          (l = n - 65536 * i),
          (n = p + i + 65535),
          (i = Math.floor(n / 65536)),
          (p = n - 65536 * i),
          (n = f + i + 65535),
          (i = Math.floor(n / 65536)),
          (f = n - 65536 * i),
          (n = d + i + 65535),
          (i = Math.floor(n / 65536)),
          (d = n - 65536 * i),
          (n = g + i + 65535),
          (i = Math.floor(n / 65536)),
          (g = n - 65536 * i),
          (n = v + i + 65535),
          (i = Math.floor(n / 65536)),
          (v = n - 65536 * i),
          (n = y + i + 65535),
          (i = Math.floor(n / 65536)),
          (y = n - 65536 * i),
          (n = m + i + 65535),
          (i = Math.floor(n / 65536)),
          (m = n - 65536 * i),
          (n = w + i + 65535),
          (i = Math.floor(n / 65536)),
          (w = n - 65536 * i),
          (n = _ + i + 65535),
          (i = Math.floor(n / 65536)),
          (_ = n - 65536 * i),
          (s += i - 1 + 37 * (i - 1)),
          (t[0] = s),
          (t[1] = o),
          (t[2] = a),
          (t[3] = c),
          (t[4] = u),
          (t[5] = h),
          (t[6] = l),
          (t[7] = p),
          (t[8] = f),
          (t[9] = d),
          (t[10] = g),
          (t[11] = v),
          (t[12] = y),
          (t[13] = m),
          (t[14] = w),
          (t[15] = _);
      }
      function P(t, e) {
        I(t, e, e);
      }
      function S(t, e) {
        const r = o();
        let n;
        for (n = 0; n < 16; n++) r[n] = e[n];
        for (n = 253; n >= 0; n--) P(r, r), 2 !== n && 4 !== n && I(r, r, e);
        for (n = 0; n < 16; n++) t[n] = r[n];
      }
      function O(t, e) {
        const r = o(),
          n = o(),
          i = o(),
          s = o(),
          a = o(),
          c = o(),
          u = o(),
          l = o(),
          p = o();
        E(r, t[1], t[0]),
          E(p, e[1], e[0]),
          I(r, r, p),
          b(n, t[0], t[1]),
          b(p, e[0], e[1]),
          I(n, n, p),
          I(i, t[3], e[3]),
          I(i, i, h),
          I(s, t[2], e[2]),
          b(s, s, s),
          E(a, n, r),
          E(c, s, i),
          b(u, s, i),
          b(l, n, r),
          I(t[0], a, c),
          I(t[1], l, u),
          I(t[2], u, c),
          I(t[3], a, l);
      }
      function x(t, e, r) {
        for (let n = 0; n < 4; n++) v(t[n], e[n], r);
      }
      function R(t, e) {
        const r = o(),
          n = o(),
          i = o();
        S(i, e[2]), I(r, e[0], i), I(n, e[1], i), y(t, n), (t[31] ^= _(r) << 7);
      }
      function A(t, e, r) {
        d(t[0], a), d(t[1], c), d(t[2], c), d(t[3], a);
        for (let n = 255; n >= 0; --n) {
          const i = (r[(n / 8) | 0] >> (7 & n)) & 1;
          x(t, e, i), O(e, t), O(t, t), x(t, e, i);
        }
      }
      function C(t, e) {
        const r = [o(), o(), o(), o()];
        d(r[0], l), d(r[1], p), d(r[2], c), I(r[3], l, p), A(t, r, e);
      }
      function j(t) {
        if (t.length !== e.TP)
          throw new Error(`ed25519: seed must be ${e.TP} bytes`);
        const r = (0, i.hash)(t);
        (r[0] &= 248), (r[31] &= 127), (r[31] |= 64);
        const n = new Uint8Array(32),
          s = [o(), o(), o(), o()];
        C(s, r), R(n, s);
        const a = new Uint8Array(64);
        return a.set(t), a.set(n, 32), { publicKey: n, secretKey: a };
      }
      e.K = j;
      const T = new Float64Array([
        237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
        20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
      ]);
      function N(t, e) {
        let r, n, i, s;
        for (n = 63; n >= 32; --n) {
          for (r = 0, i = n - 32, s = n - 12; i < s; ++i)
            (e[i] += r - 16 * e[n] * T[i - (n - 32)]),
              (r = Math.floor((e[i] + 128) / 256)),
              (e[i] -= 256 * r);
          (e[i] += r), (e[n] = 0);
        }
        for (r = 0, i = 0; i < 32; i++)
          (e[i] += r - (e[31] >> 4) * T[i]), (r = e[i] >> 8), (e[i] &= 255);
        for (i = 0; i < 32; i++) e[i] -= r * T[i];
        for (n = 0; n < 32; n++) (e[n + 1] += e[n] >> 8), (t[n] = 255 & e[n]);
      }
      function L(t) {
        const e = new Float64Array(64);
        for (let r = 0; r < 64; r++) e[r] = t[r];
        for (let r = 0; r < 64; r++) t[r] = 0;
        N(t, e);
      }
      function q(t, e) {
        const r = o(),
          n = o(),
          i = o(),
          s = o(),
          h = o(),
          l = o(),
          p = o();
        return (
          d(t[2], c),
          (function (t, e) {
            for (let r = 0; r < 16; r++) t[r] = e[2 * r] + (e[2 * r + 1] << 8);
            t[15] &= 32767;
          })(t[1], e),
          P(i, t[1]),
          I(s, i, u),
          E(i, i, t[2]),
          b(s, t[2], s),
          P(h, s),
          P(l, h),
          I(p, l, h),
          I(r, p, i),
          I(r, r, s),
          (function (t, e) {
            const r = o();
            let n;
            for (n = 0; n < 16; n++) r[n] = e[n];
            for (n = 250; n >= 0; n--) P(r, r), 1 !== n && I(r, r, e);
            for (n = 0; n < 16; n++) t[n] = r[n];
          })(r, r),
          I(r, r, i),
          I(r, r, s),
          I(r, r, s),
          I(t[0], r, s),
          P(n, t[0]),
          I(n, n, s),
          w(n, i) && I(t[0], t[0], f),
          P(n, t[0]),
          I(n, n, s),
          w(n, i)
            ? -1
            : (_(t[0]) === e[31] >> 7 && E(t[0], a, t[0]),
              I(t[3], t[0], t[1]),
              0)
        );
      }
      e._S = function (t, e) {
        const r = new Float64Array(64),
          n = [o(), o(), o(), o()],
          s = (0, i.hash)(t.subarray(0, 32));
        (s[0] &= 248), (s[31] &= 127), (s[31] |= 64);
        const a = new Uint8Array(64);
        a.set(s.subarray(32), 32);
        const c = new i.SHA512();
        c.update(a.subarray(32)), c.update(e);
        const u = c.digest();
        c.clean(),
          L(u),
          C(n, u),
          R(a, n),
          c.reset(),
          c.update(a.subarray(0, 32)),
          c.update(t.subarray(32)),
          c.update(e);
        const h = c.digest();
        L(h);
        for (let i = 0; i < 32; i++) r[i] = u[i];
        for (let i = 0; i < 32; i++)
          for (let t = 0; t < 32; t++) r[i + t] += h[i] * s[t];
        return N(a.subarray(32), r), a;
      };
    },
    9816: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = r(13310),
        i = r(95070);
      (e.DIGEST_LENGTH = 64), (e.BLOCK_SIZE = 128);
      var s = (function () {
        function t() {
          (this.digestLength = e.DIGEST_LENGTH),
            (this.blockSize = e.BLOCK_SIZE),
            (this._stateHi = new Int32Array(8)),
            (this._stateLo = new Int32Array(8)),
            (this._tempHi = new Int32Array(16)),
            (this._tempLo = new Int32Array(16)),
            (this._buffer = new Uint8Array(256)),
            (this._bufferLength = 0),
            (this._bytesHashed = 0),
            (this._finished = !1),
            this.reset();
        }
        return (
          (t.prototype._initState = function () {
            (this._stateHi[0] = 1779033703),
              (this._stateHi[1] = 3144134277),
              (this._stateHi[2] = 1013904242),
              (this._stateHi[3] = 2773480762),
              (this._stateHi[4] = 1359893119),
              (this._stateHi[5] = 2600822924),
              (this._stateHi[6] = 528734635),
              (this._stateHi[7] = 1541459225),
              (this._stateLo[0] = 4089235720),
              (this._stateLo[1] = 2227873595),
              (this._stateLo[2] = 4271175723),
              (this._stateLo[3] = 1595750129),
              (this._stateLo[4] = 2917565137),
              (this._stateLo[5] = 725511199),
              (this._stateLo[6] = 4215389547),
              (this._stateLo[7] = 327033209);
          }),
          (t.prototype.reset = function () {
            return (
              this._initState(),
              (this._bufferLength = 0),
              (this._bytesHashed = 0),
              (this._finished = !1),
              this
            );
          }),
          (t.prototype.clean = function () {
            i.wipe(this._buffer),
              i.wipe(this._tempHi),
              i.wipe(this._tempLo),
              this.reset();
          }),
          (t.prototype.update = function (t, r) {
            if ((void 0 === r && (r = t.length), this._finished))
              throw new Error(
                "SHA512: can't update because hash was finished."
              );
            var n = 0;
            if (((this._bytesHashed += r), this._bufferLength > 0)) {
              for (; this._bufferLength < e.BLOCK_SIZE && r > 0; )
                (this._buffer[this._bufferLength++] = t[n++]), r--;
              this._bufferLength === this.blockSize &&
                (a(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  this.blockSize
                ),
                (this._bufferLength = 0));
            }
            for (
              r >= this.blockSize &&
              ((n = a(
                this._tempHi,
                this._tempLo,
                this._stateHi,
                this._stateLo,
                t,
                n,
                r
              )),
              (r %= this.blockSize));
              r > 0;

            )
              (this._buffer[this._bufferLength++] = t[n++]), r--;
            return this;
          }),
          (t.prototype.finish = function (t) {
            if (!this._finished) {
              var e = this._bytesHashed,
                r = this._bufferLength,
                i = (e / 536870912) | 0,
                s = e << 3,
                o = e % 128 < 112 ? 128 : 256;
              this._buffer[r] = 128;
              for (var c = r + 1; c < o - 8; c++) this._buffer[c] = 0;
              n.writeUint32BE(i, this._buffer, o - 8),
                n.writeUint32BE(s, this._buffer, o - 4),
                a(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  o
                ),
                (this._finished = !0);
            }
            for (c = 0; c < this.digestLength / 8; c++)
              n.writeUint32BE(this._stateHi[c], t, 8 * c),
                n.writeUint32BE(this._stateLo[c], t, 8 * c + 4);
            return this;
          }),
          (t.prototype.digest = function () {
            var t = new Uint8Array(this.digestLength);
            return this.finish(t), t;
          }),
          (t.prototype.saveState = function () {
            if (this._finished)
              throw new Error("SHA256: cannot save finished state");
            return {
              stateHi: new Int32Array(this._stateHi),
              stateLo: new Int32Array(this._stateLo),
              buffer:
                this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
              bufferLength: this._bufferLength,
              bytesHashed: this._bytesHashed,
            };
          }),
          (t.prototype.restoreState = function (t) {
            return (
              this._stateHi.set(t.stateHi),
              this._stateLo.set(t.stateLo),
              (this._bufferLength = t.bufferLength),
              t.buffer && this._buffer.set(t.buffer),
              (this._bytesHashed = t.bytesHashed),
              (this._finished = !1),
              this
            );
          }),
          (t.prototype.cleanSavedState = function (t) {
            i.wipe(t.stateHi),
              i.wipe(t.stateLo),
              t.buffer && i.wipe(t.buffer),
              (t.bufferLength = 0),
              (t.bytesHashed = 0);
          }),
          t
        );
      })();
      e.SHA512 = s;
      var o = new Int32Array([
        1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
        3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
        2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
        310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
        1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
        3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
        264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
        1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
        2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
        3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
        113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
        773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
        1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
        2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
        3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
        3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
        430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
        883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
        1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
        2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
        2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
        3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
        3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
        174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
        685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
        1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
        1607167915, 987167468, 1816402316, 1246189591,
      ]);
      function a(t, e, r, i, s, a, c) {
        for (
          var u,
            h,
            l,
            p,
            f,
            d,
            g,
            v,
            y = r[0],
            m = r[1],
            w = r[2],
            _ = r[3],
            b = r[4],
            E = r[5],
            I = r[6],
            P = r[7],
            S = i[0],
            O = i[1],
            x = i[2],
            R = i[3],
            A = i[4],
            C = i[5],
            j = i[6],
            T = i[7];
          c >= 128;

        ) {
          for (var N = 0; N < 16; N++) {
            var L = 8 * N + a;
            (t[N] = n.readUint32BE(s, L)), (e[N] = n.readUint32BE(s, L + 4));
          }
          for (N = 0; N < 80; N++) {
            var q,
              D,
              z = y,
              M = m,
              k = w,
              $ = _,
              U = b,
              H = E,
              V = I,
              K = S,
              G = O,
              B = x,
              F = R,
              W = A,
              Q = C,
              J = j;
            if (
              ((f = 65535 & (h = T)),
              (d = h >>> 16),
              (g = 65535 & (u = P)),
              (v = u >>> 16),
              (f +=
                65535 &
                (h =
                  ((A >>> 14) | (b << 18)) ^
                  ((A >>> 18) | (b << 14)) ^
                  ((b >>> 9) | (A << 23)))),
              (d += h >>> 16),
              (g +=
                65535 &
                (u =
                  ((b >>> 14) | (A << 18)) ^
                  ((b >>> 18) | (A << 14)) ^
                  ((A >>> 9) | (b << 23)))),
              (v += u >>> 16),
              (f += 65535 & (h = (A & C) ^ (~A & j))),
              (d += h >>> 16),
              (g += 65535 & (u = (b & E) ^ (~b & I))),
              (v += u >>> 16),
              (u = o[2 * N]),
              (f += 65535 & (h = o[2 * N + 1])),
              (d += h >>> 16),
              (g += 65535 & u),
              (v += u >>> 16),
              (u = t[N % 16]),
              (d += (h = e[N % 16]) >>> 16),
              (g += 65535 & u),
              (v += u >>> 16),
              (g += (d += (f += 65535 & h) >>> 16) >>> 16),
              (f = 65535 & (h = p = (65535 & f) | (d << 16))),
              (d = h >>> 16),
              (g = 65535 & (u = l = (65535 & g) | ((v += g >>> 16) << 16))),
              (v = u >>> 16),
              (f +=
                65535 &
                (h =
                  ((S >>> 28) | (y << 4)) ^
                  ((y >>> 2) | (S << 30)) ^
                  ((y >>> 7) | (S << 25)))),
              (d += h >>> 16),
              (g +=
                65535 &
                (u =
                  ((y >>> 28) | (S << 4)) ^
                  ((S >>> 2) | (y << 30)) ^
                  ((S >>> 7) | (y << 25)))),
              (v += u >>> 16),
              (d += (h = (S & O) ^ (S & x) ^ (O & x)) >>> 16),
              (g += 65535 & (u = (y & m) ^ (y & w) ^ (m & w))),
              (v += u >>> 16),
              (q =
                (65535 & (g += (d += (f += 65535 & h) >>> 16) >>> 16)) |
                ((v += g >>> 16) << 16)),
              (D = (65535 & f) | (d << 16)),
              (f = 65535 & (h = F)),
              (d = h >>> 16),
              (g = 65535 & (u = $)),
              (v = u >>> 16),
              (d += (h = p) >>> 16),
              (g += 65535 & (u = l)),
              (v += u >>> 16),
              (m = z),
              (w = M),
              (_ = k),
              (b = $ =
                (65535 & (g += (d += (f += 65535 & h) >>> 16) >>> 16)) |
                ((v += g >>> 16) << 16)),
              (E = U),
              (I = H),
              (P = V),
              (y = q),
              (O = K),
              (x = G),
              (R = B),
              (A = F = (65535 & f) | (d << 16)),
              (C = W),
              (j = Q),
              (T = J),
              (S = D),
              N % 16 === 15)
            )
              for (L = 0; L < 16; L++)
                (u = t[L]),
                  (f = 65535 & (h = e[L])),
                  (d = h >>> 16),
                  (g = 65535 & u),
                  (v = u >>> 16),
                  (u = t[(L + 9) % 16]),
                  (f += 65535 & (h = e[(L + 9) % 16])),
                  (d += h >>> 16),
                  (g += 65535 & u),
                  (v += u >>> 16),
                  (l = t[(L + 1) % 16]),
                  (f +=
                    65535 &
                    (h =
                      (((p = e[(L + 1) % 16]) >>> 1) | (l << 31)) ^
                      ((p >>> 8) | (l << 24)) ^
                      ((p >>> 7) | (l << 25)))),
                  (d += h >>> 16),
                  (g +=
                    65535 &
                    (u =
                      ((l >>> 1) | (p << 31)) ^
                      ((l >>> 8) | (p << 24)) ^
                      (l >>> 7))),
                  (v += u >>> 16),
                  (l = t[(L + 14) % 16]),
                  (d +=
                    (h =
                      (((p = e[(L + 14) % 16]) >>> 19) | (l << 13)) ^
                      ((l >>> 29) | (p << 3)) ^
                      ((p >>> 6) | (l << 26))) >>> 16),
                  (g +=
                    65535 &
                    (u =
                      ((l >>> 19) | (p << 13)) ^
                      ((p >>> 29) | (l << 3)) ^
                      (l >>> 6))),
                  (v += u >>> 16),
                  (v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16),
                  (t[L] = (65535 & g) | (v << 16)),
                  (e[L] = (65535 & f) | (d << 16));
          }
          (f = 65535 & (h = S)),
            (d = h >>> 16),
            (g = 65535 & (u = y)),
            (v = u >>> 16),
            (u = r[0]),
            (d += (h = i[0]) >>> 16),
            (g += 65535 & u),
            (v += u >>> 16),
            (v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[0] = y = (65535 & g) | (v << 16)),
            (i[0] = S = (65535 & f) | (d << 16)),
            (f = 65535 & (h = O)),
            (d = h >>> 16),
            (g = 65535 & (u = m)),
            (v = u >>> 16),
            (u = r[1]),
            (d += (h = i[1]) >>> 16),
            (g += 65535 & u),
            (v += u >>> 16),
            (v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[1] = m = (65535 & g) | (v << 16)),
            (i[1] = O = (65535 & f) | (d << 16)),
            (f = 65535 & (h = x)),
            (d = h >>> 16),
            (g = 65535 & (u = w)),
            (v = u >>> 16),
            (u = r[2]),
            (d += (h = i[2]) >>> 16),
            (g += 65535 & u),
            (v += u >>> 16),
            (v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[2] = w = (65535 & g) | (v << 16)),
            (i[2] = x = (65535 & f) | (d << 16)),
            (f = 65535 & (h = R)),
            (d = h >>> 16),
            (g = 65535 & (u = _)),
            (v = u >>> 16),
            (u = r[3]),
            (d += (h = i[3]) >>> 16),
            (g += 65535 & u),
            (v += u >>> 16),
            (v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[3] = _ = (65535 & g) | (v << 16)),
            (i[3] = R = (65535 & f) | (d << 16)),
            (f = 65535 & (h = A)),
            (d = h >>> 16),
            (g = 65535 & (u = b)),
            (v = u >>> 16),
            (u = r[4]),
            (d += (h = i[4]) >>> 16),
            (g += 65535 & u),
            (v += u >>> 16),
            (v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[4] = b = (65535 & g) | (v << 16)),
            (i[4] = A = (65535 & f) | (d << 16)),
            (f = 65535 & (h = C)),
            (d = h >>> 16),
            (g = 65535 & (u = E)),
            (v = u >>> 16),
            (u = r[5]),
            (d += (h = i[5]) >>> 16),
            (g += 65535 & u),
            (v += u >>> 16),
            (v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[5] = E = (65535 & g) | (v << 16)),
            (i[5] = C = (65535 & f) | (d << 16)),
            (f = 65535 & (h = j)),
            (d = h >>> 16),
            (g = 65535 & (u = I)),
            (v = u >>> 16),
            (u = r[6]),
            (d += (h = i[6]) >>> 16),
            (g += 65535 & u),
            (v += u >>> 16),
            (v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[6] = I = (65535 & g) | (v << 16)),
            (i[6] = j = (65535 & f) | (d << 16)),
            (f = 65535 & (h = T)),
            (d = h >>> 16),
            (g = 65535 & (u = P)),
            (v = u >>> 16),
            (u = r[7]),
            (d += (h = i[7]) >>> 16),
            (g += 65535 & u),
            (v += u >>> 16),
            (v += (g += (d += (f += 65535 & h) >>> 16) >>> 16) >>> 16),
            (r[7] = P = (65535 & g) | (v << 16)),
            (i[7] = T = (65535 & f) | (d << 16)),
            (a += 128),
            (c -= 128);
        }
        return a;
      }
      e.hash = function (t) {
        var e = new s();
        e.update(t);
        var r = e.digest();
        return e.clean(), r;
      };
    },
    32623: (t, e, r) => {
      "use strict";
      function n() {
        return (
          (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) ||
          (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) ||
          {}
        );
      }
      function i() {
        const t = n();
        return t.subtle || t.webkitSubtle;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isBrowserCryptoAvailable =
          e.getSubtleCrypto =
          e.getBrowerCrypto =
            void 0),
        (e.getBrowerCrypto = n),
        (e.getSubtleCrypto = i),
        (e.isBrowserCryptoAvailable = function () {
          return !!n() && !!i();
        });
    },
    55227: (t, e) => {
      "use strict";
      function r() {
        return (
          "undefined" === typeof document &&
          "undefined" !== typeof navigator &&
          "ReactNative" === navigator.product
        );
      }
      function n() {
        return (
          "undefined" !== typeof process &&
          "undefined" !== typeof process.versions &&
          "undefined" !== typeof process.versions.node
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isBrowser = e.isNode = e.isReactNative = void 0),
        (e.isReactNative = r),
        (e.isNode = n),
        (e.isBrowser = function () {
          return !r() && !n();
        });
    },
    21776: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(61900);
      n.__exportStar(r(32623), e), n.__exportStar(r(55227), e);
    },
    61900: (t, e, r) => {
      "use strict";
      r.r(e),
        r.d(e, {
          __assign: () => s,
          __asyncDelegator: () => _,
          __asyncGenerator: () => w,
          __asyncValues: () => b,
          __await: () => m,
          __awaiter: () => h,
          __classPrivateFieldGet: () => S,
          __classPrivateFieldSet: () => O,
          __createBinding: () => p,
          __decorate: () => a,
          __exportStar: () => f,
          __extends: () => i,
          __generator: () => l,
          __importDefault: () => P,
          __importStar: () => I,
          __makeTemplateObject: () => E,
          __metadata: () => u,
          __param: () => c,
          __read: () => g,
          __rest: () => o,
          __spread: () => v,
          __spreadArrays: () => y,
          __values: () => d,
        });
      var n = function (t, e) {
        return (
          (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            }),
          n(t, e)
        );
      };
      function i(t, e) {
        function r() {
          this.constructor = t;
        }
        n(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      }
      var s = function () {
        return (
          (s =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }),
          s.apply(this, arguments)
        );
      };
      function o(t, e) {
        var r = {};
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) &&
            e.indexOf(n) < 0 &&
            (r[n] = t[n]);
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(t); i < n.length; i++)
            e.indexOf(n[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, n[i]) &&
              (r[n[i]] = t[n[i]]);
        }
        return r;
      }
      function a(t, e, r, n) {
        var i,
          s = arguments.length,
          o =
            s < 3
              ? e
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(e, r))
              : n;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          o = Reflect.decorate(t, e, r, n);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (i = t[a]) &&
              (o = (s < 3 ? i(o) : s > 3 ? i(e, r, o) : i(e, r)) || o);
        return s > 3 && o && Object.defineProperty(e, r, o), o;
      }
      function c(t, e) {
        return function (r, n) {
          e(r, n, t);
        };
      }
      function u(t, e) {
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.metadata
        )
          return Reflect.metadata(t, e);
      }
      function h(t, e, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (e) {
              s(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              s(e);
            }
          }
          function c(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(o, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      }
      function l(t, e) {
        var r,
          n,
          i,
          s,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (s = { next: a(0), throw: a(1), return: a(2) }),
          "function" === typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(s) {
          return function (a) {
            return (function (s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & s[0]
                          ? n.return
                          : s[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, s[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return o.label++, { value: s[1], done: !1 };
                    case 5:
                      o.label++, (n = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                        (6 === s[0] || 2 === s[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        o.label = s[1];
                        break;
                      }
                      if (6 === s[0] && o.label < i[1]) {
                        (o.label = i[1]), (i = s);
                        break;
                      }
                      if (i && o.label < i[2]) {
                        (o.label = i[2]), o.ops.push(s);
                        break;
                      }
                      i[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  s = e.call(t, o);
                } catch (a) {
                  (s = [6, a]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, a]);
          };
        }
      }
      function p(t, e, r, n) {
        void 0 === n && (n = r), (t[n] = e[r]);
      }
      function f(t, e) {
        for (var r in t)
          "default" === r || e.hasOwnProperty(r) || (e[r] = t[r]);
      }
      function d(t) {
        var e = "function" === typeof Symbol && Symbol.iterator,
          r = e && t[e],
          n = 0;
        if (r) return r.call(t);
        if (t && "number" === typeof t.length)
          return {
            next: function () {
              return (
                t && n >= t.length && (t = void 0),
                { value: t && t[n++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function g(t, e) {
        var r = "function" === typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var n,
          i,
          s = r.call(t),
          o = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(n = s.next()).done; )
            o.push(n.value);
        } catch (a) {
          i = { error: a };
        } finally {
          try {
            n && !n.done && (r = s.return) && r.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
        return o;
      }
      function v() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t = t.concat(g(arguments[e]));
        return t;
      }
      function y() {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++)
          t += arguments[e].length;
        var n = Array(t),
          i = 0;
        for (e = 0; e < r; e++)
          for (var s = arguments[e], o = 0, a = s.length; o < a; o++, i++)
            n[i] = s[o];
        return n;
      }
      function m(t) {
        return this instanceof m ? ((this.v = t), this) : new m(t);
      }
      function w(t, e, r) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var n,
          i = r.apply(t, e || []),
          s = [];
        return (
          (n = {}),
          o("next"),
          o("throw"),
          o("return"),
          (n[Symbol.asyncIterator] = function () {
            return this;
          }),
          n
        );
        function o(t) {
          i[t] &&
            (n[t] = function (e) {
              return new Promise(function (r, n) {
                s.push([t, e, r, n]) > 1 || a(t, e);
              });
            });
        }
        function a(t, e) {
          try {
            (r = i[t](e)).value instanceof m
              ? Promise.resolve(r.value.v).then(c, u)
              : h(s[0][2], r);
          } catch (n) {
            h(s[0][3], n);
          }
          var r;
        }
        function c(t) {
          a("next", t);
        }
        function u(t) {
          a("throw", t);
        }
        function h(t, e) {
          t(e), s.shift(), s.length && a(s[0][0], s[0][1]);
        }
      }
      function _(t) {
        var e, r;
        return (
          (e = {}),
          n("next"),
          n("throw", function (t) {
            throw t;
          }),
          n("return"),
          (e[Symbol.iterator] = function () {
            return this;
          }),
          e
        );
        function n(n, i) {
          e[n] = t[n]
            ? function (e) {
                return (r = !r)
                  ? { value: m(t[n](e)), done: "return" === n }
                  : i
                  ? i(e)
                  : e;
              }
            : i;
        }
      }
      function b(t) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var e,
          r = t[Symbol.asyncIterator];
        return r
          ? r.call(t)
          : ((t = d(t)),
            (e = {}),
            n("next"),
            n("throw"),
            n("return"),
            (e[Symbol.asyncIterator] = function () {
              return this;
            }),
            e);
        function n(r) {
          e[r] =
            t[r] &&
            function (e) {
              return new Promise(function (n, i) {
                (function (t, e, r, n) {
                  Promise.resolve(n).then(function (e) {
                    t({ value: e, done: r });
                  }, e);
                })(n, i, (e = t[r](e)).done, e.value);
              });
            };
        }
      }
      function E(t, e) {
        return (
          Object.defineProperty
            ? Object.defineProperty(t, "raw", { value: e })
            : (t.raw = e),
          t
        );
      }
      function I(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return (e.default = t), e;
      }
      function P(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function S(t, e) {
        if (!e.has(t))
          throw new TypeError("attempted to get private field on non-instance");
        return e.get(t);
      }
      function O(t, e, r) {
        if (!e.has(t))
          throw new TypeError("attempted to set private field on non-instance");
        return e.set(t, r), r;
      }
    },
    55806: (t, e, r) => {
      "use strict";
      r.d(e, { EthereumProvider: () => lo });
      var n = r(28981),
        i = r.n(n),
        s = r(75655);
      const o =
          /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
        a =
          /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
        c = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
      function u(t, e) {
        if (
          !(
            "__proto__" === t ||
            ("constructor" === t &&
              e &&
              "object" === typeof e &&
              "prototype" in e)
          )
        )
          return e;
        !(function (t) {
          console.warn(
            `[destr] Dropping "${t}" key to prevent prototype pollution.`
          );
        })(t);
      }
      function h(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ("string" !== typeof t) return t;
        const r = t.trim();
        if ('"' === t[0] && t.endsWith('"') && !t.includes("\\"))
          return r.slice(1, -1);
        if (r.length <= 9) {
          const t = r.toLowerCase();
          if ("true" === t) return !0;
          if ("false" === t) return !1;
          if ("undefined" === t) return;
          if ("null" === t) return null;
          if ("nan" === t) return Number.NaN;
          if ("infinity" === t) return Number.POSITIVE_INFINITY;
          if ("-infinity" === t) return Number.NEGATIVE_INFINITY;
        }
        if (!c.test(t)) {
          if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
          return t;
        }
        try {
          if (o.test(t) || a.test(t)) {
            if (e.strict)
              throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(t, u);
          }
          return JSON.parse(t);
        } catch (n) {
          if (e.strict) throw n;
          return t;
        }
      }
      function l(t) {
        try {
          for (
            var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1;
            n < e;
            n++
          )
            r[n - 1] = arguments[n];
          return (i = t(...r)) && "function" === typeof i.then
            ? i
            : Promise.resolve(i);
        } catch (s) {
          return Promise.reject(s);
        }
        var i;
      }
      function p(t) {
        if (
          (function (t) {
            const e = typeof t;
            return null === t || ("object" !== e && "function" !== e);
          })(t)
        )
          return String(t);
        if (
          (function (t) {
            const e = Object.getPrototypeOf(t);
            return !e || e.isPrototypeOf(Object);
          })(t) ||
          Array.isArray(t)
        )
          return JSON.stringify(t);
        if ("function" === typeof t.toJSON) return p(t.toJSON());
        throw new Error("[unstorage] Cannot stringify value!");
      }
      function f() {
        if ("undefined" === typeof Buffer)
          throw new TypeError("[unstorage] Buffer is not supported!");
      }
      const d = "base64:";
      function g(t) {
        return t
          ? t
              .split("?")[0]
              .replace(/[/\\]/g, ":")
              .replace(/:+/g, ":")
              .replace(/^:|:$/g, "")
          : "";
      }
      function v() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return g(e.join(":"));
      }
      function y(t) {
        return (t = g(t)) ? t + ":" : "";
      }
      const m = () => {
        const t = new Map();
        return {
          name: "memory",
          getInstance: () => t,
          hasItem: (e) => t.has(e),
          getItem(e) {
            var r;
            return null !== (r = t.get(e)) && void 0 !== r ? r : null;
          },
          getItemRaw(e) {
            var r;
            return null !== (r = t.get(e)) && void 0 !== r ? r : null;
          },
          setItem(e, r) {
            t.set(e, r);
          },
          setItemRaw(e, r) {
            t.set(e, r);
          },
          removeItem(e) {
            t.delete(e);
          },
          getKeys: () => [...t.keys()],
          clear() {
            t.clear();
          },
          dispose() {
            t.clear();
          },
        };
      };
      function w() {
        const t = {
            mounts: {
              "":
                (arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {}
                ).driver || m(),
            },
            mountpoints: [""],
            watching: !1,
            watchListeners: [],
            unwatch: {},
          },
          e = (e) => {
            for (const r of t.mountpoints)
              if (e.startsWith(r))
                return {
                  base: r,
                  relativeKey: e.slice(r.length),
                  driver: t.mounts[r],
                };
            return { base: "", relativeKey: e, driver: t.mounts[""] };
          },
          r = (e, r) =>
            t.mountpoints
              .filter((t) => t.startsWith(e) || (r && e.startsWith(t)))
              .map((r) => ({
                relativeBase: e.length > r.length ? e.slice(r.length) : void 0,
                mountpoint: r,
                driver: t.mounts[r],
              })),
          n = (e, r) => {
            if (t.watching) {
              r = g(r);
              for (const n of t.watchListeners) n(e, r);
            }
          },
          i = async () => {
            if (t.watching) {
              for (const e in t.unwatch) await t.unwatch[e]();
              (t.unwatch = {}), (t.watching = !1);
            }
          },
          s = (t, r, n) => {
            const i = new Map(),
              s = (t) => {
                let e = i.get(t.base);
                return (
                  e ||
                    ((e = { driver: t.driver, base: t.base, items: [] }),
                    i.set(t.base, e)),
                  e
                );
              };
            for (const o of t) {
              const t = "string" === typeof o,
                n = g(t ? o : o.key),
                i = t ? void 0 : o.value,
                a = t || !o.options ? r : { ...r, ...o.options },
                c = e(n);
              s(c).items.push({
                key: n,
                value: i,
                relativeKey: c.relativeKey,
                options: a,
              });
            }
            return Promise.all([...i.values()].map((t) => n(t))).then((t) =>
              t.flat()
            );
          },
          o = {
            hasItem(t) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              t = g(t);
              const { relativeKey: n, driver: i } = e(t);
              return l(i.hasItem, n, r);
            },
            getItem(t) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              t = g(t);
              const { relativeKey: n, driver: i } = e(t);
              return l(i.getItem, n, r).then((t) => h(t));
            },
            getItems: (t, e) =>
              s(t, e, (t) =>
                t.driver.getItems
                  ? l(
                      t.driver.getItems,
                      t.items.map((t) => ({
                        key: t.relativeKey,
                        options: t.options,
                      })),
                      e
                    ).then((e) =>
                      e.map((e) => ({
                        key: v(t.base, e.key),
                        value: h(e.value),
                      }))
                    )
                  : Promise.all(
                      t.items.map((e) =>
                        l(t.driver.getItem, e.relativeKey, e.options).then(
                          (t) => ({ key: e.key, value: h(t) })
                        )
                      )
                    )
              ),
            getItemRaw(t) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              t = g(t);
              const { relativeKey: n, driver: i } = e(t);
              return i.getItemRaw
                ? l(i.getItemRaw, n, r)
                : l(i.getItem, n, r).then((t) =>
                    (function (t) {
                      return "string" !== typeof t
                        ? t
                        : t.startsWith(d)
                        ? (f(), Buffer.from(t.slice(7), "base64"))
                        : t;
                    })(t)
                  );
            },
            async setItem(t, r) {
              let i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              if (void 0 === r) return o.removeItem(t);
              t = g(t);
              const { relativeKey: s, driver: a } = e(t);
              a.setItem &&
                (await l(a.setItem, s, p(r), i), a.watch || n("update", t));
            },
            async setItems(t, e) {
              await s(t, e, async (t) => {
                if (t.driver.setItems)
                  return l(
                    t.driver.setItems,
                    t.items.map((t) => ({
                      key: t.relativeKey,
                      value: p(t.value),
                      options: t.options,
                    })),
                    e
                  );
                t.driver.setItem &&
                  (await Promise.all(
                    t.items.map((e) =>
                      l(t.driver.setItem, e.relativeKey, p(e.value), e.options)
                    )
                  ));
              });
            },
            async setItemRaw(t, r) {
              let i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              if (void 0 === r) return o.removeItem(t, i);
              t = g(t);
              const { relativeKey: s, driver: a } = e(t);
              if (a.setItemRaw) await l(a.setItemRaw, s, r, i);
              else {
                if (!a.setItem) return;
                await l(
                  a.setItem,
                  s,
                  (function (t) {
                    if ("string" === typeof t) return t;
                    f();
                    const e = Buffer.from(t).toString("base64");
                    return d + e;
                  })(r),
                  i
                );
              }
              a.watch || n("update", t);
            },
            async removeItem(t) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              "boolean" === typeof r && (r = { removeMeta: r }), (t = g(t));
              const { relativeKey: i, driver: s } = e(t);
              s.removeItem &&
                (await l(s.removeItem, i, r),
                (r.removeMeta || r.removeMata) &&
                  (await l(s.removeItem, i + "$", r)),
                s.watch || n("remove", t));
            },
            async getMeta(t) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              "boolean" === typeof r && (r = { nativeOnly: r }), (t = g(t));
              const { relativeKey: n, driver: i } = e(t),
                s = Object.create(null);
              if (
                (i.getMeta && Object.assign(s, await l(i.getMeta, n, r)),
                !r.nativeOnly)
              ) {
                const t = await l(i.getItem, n + "$", r).then((t) => h(t));
                t &&
                  "object" === typeof t &&
                  ("string" === typeof t.atime && (t.atime = new Date(t.atime)),
                  "string" === typeof t.mtime && (t.mtime = new Date(t.mtime)),
                  Object.assign(s, t));
              }
              return s;
            },
            setMeta(t, e) {
              let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              return this.setItem(t + "$", e, r);
            },
            removeMeta(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return this.removeItem(t + "$", e);
            },
            async getKeys(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              t = y(t);
              const n = r(t, !0);
              let i = [];
              const s = [];
              for (const r of n) {
                const t = await l(r.driver.getKeys, r.relativeBase, e);
                for (const e of t) {
                  const t = r.mountpoint + g(e);
                  i.some((e) => t.startsWith(e)) || s.push(t);
                }
                i = [
                  r.mountpoint,
                  ...i.filter((t) => !t.startsWith(r.mountpoint)),
                ];
              }
              return t
                ? s.filter((e) => e.startsWith(t) && "$" !== e[e.length - 1])
                : s.filter((t) => "$" !== t[t.length - 1]);
            },
            async clear(t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (t = y(t)),
                await Promise.all(
                  r(t, !1).map(async (t) => {
                    if (t.driver.clear)
                      return l(t.driver.clear, t.relativeBase, e);
                    if (t.driver.removeItem) {
                      const r = await t.driver.getKeys(t.relativeBase || "", e);
                      return Promise.all(
                        r.map((r) => t.driver.removeItem(r, e))
                      );
                    }
                  })
                );
            },
            async dispose() {
              await Promise.all(Object.values(t.mounts).map((t) => b(t)));
            },
            watch: async (e) => (
              await (async () => {
                if (!t.watching) {
                  t.watching = !0;
                  for (const e in t.mounts)
                    t.unwatch[e] = await _(t.mounts[e], n, e);
                }
              })(),
              t.watchListeners.push(e),
              async () => {
                (t.watchListeners = t.watchListeners.filter((t) => t !== e)),
                  0 === t.watchListeners.length && (await i());
              }
            ),
            async unwatch() {
              (t.watchListeners = []), await i();
            },
            mount(e, r) {
              if ((e = y(e)) && t.mounts[e])
                throw new Error(`already mounted at ${e}`);
              return (
                e &&
                  (t.mountpoints.push(e),
                  t.mountpoints.sort((t, e) => e.length - t.length)),
                (t.mounts[e] = r),
                t.watching &&
                  Promise.resolve(_(r, n, e))
                    .then((r) => {
                      t.unwatch[e] = r;
                    })
                    .catch(console.error),
                o
              );
            },
            async unmount(e) {
              let r =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              (e = y(e)) &&
                t.mounts[e] &&
                (t.watching &&
                  e in t.unwatch &&
                  (t.unwatch[e](), delete t.unwatch[e]),
                r && (await b(t.mounts[e])),
                (t.mountpoints = t.mountpoints.filter((t) => t !== e)),
                delete t.mounts[e]);
            },
            getMount() {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              t = g(t) + ":";
              const r = e(t);
              return { driver: r.driver, base: r.base };
            },
            getMounts() {
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              t = g(t);
              return r(t, e.parents).map((t) => ({
                driver: t.driver,
                base: t.mountpoint,
              }));
            },
            keys: function (t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return o.getKeys(t, e);
            },
            get: function (t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return o.getItem(t, e);
            },
            set: function (t, e) {
              let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              return o.setItem(t, e, r);
            },
            has: function (t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return o.hasItem(t, e);
            },
            del: function (t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return o.removeItem(t, e);
            },
            remove: function (t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return o.removeItem(t, e);
            },
          };
        return o;
      }
      function _(t, e, r) {
        return t.watch ? t.watch((t, n) => e(t, r + n)) : () => {};
      }
      async function b(t) {
        "function" === typeof t.dispose && (await l(t.dispose));
      }
      function E(t) {
        return new Promise((e, r) => {
          (t.oncomplete = t.onsuccess = () => e(t.result)),
            (t.onabort = t.onerror = () => r(t.error));
        });
      }
      function I(t, e) {
        const r = indexedDB.open(t);
        r.onupgradeneeded = () => r.result.createObjectStore(e);
        const n = E(r);
        return (t, r) => n.then((n) => r(n.transaction(e, t).objectStore(e)));
      }
      let P;
      function S() {
        return P || (P = I("keyval-store", "keyval")), P;
      }
      function O(t) {
        return (
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S()
        )("readonly", (e) => E(e.get(t)));
      }
      function x(t, e) {
        return (
          (t.openCursor().onsuccess = function () {
            this.result && (e(this.result), this.result.continue());
          }),
          E(t.transaction)
        );
      }
      function R(t) {
        if ("string" !== typeof t)
          throw new Error("Cannot safe json parse value of type " + typeof t);
        try {
          return ((t) => {
            const e = t.replace(
              /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
              '$1"$2n"$3'
            );
            return JSON.parse(e, (t, e) =>
              "string" === typeof e && e.match(/^\d+n$/)
                ? BigInt(e.substring(0, e.length - 1))
                : e
            );
          })(t);
        } catch (e) {
          return t;
        }
      }
      function A(t) {
        return "string" === typeof t
          ? t
          : ((e = t),
            JSON.stringify(e, (t, e) =>
              "bigint" === typeof e ? e.toString() + "n" : e
            ) || "");
        var e;
      }
      var C = function () {
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const e = t.base && t.base.length > 0 ? `${t.base}:` : "",
          r = (t) => e + t;
        let n;
        return (
          t.dbName && t.storeName && (n = I(t.dbName, t.storeName)),
          {
            name: "idb-keyval",
            options: t,
            hasItem: async (t) => !(typeof (await O(r(t), n)) > "u"),
            async getItem(t) {
              var e;
              return null !== (e = await O(r(t), n)) && void 0 !== e ? e : null;
            },
            setItem: (t, e) =>
              (function (t, e) {
                return (
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : S()
                )("readwrite", (r) => (r.put(e, t), E(r.transaction)));
              })(r(t), e, n),
            removeItem: (t) =>
              (function (t) {
                return (
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : S()
                )("readwrite", (e) => (e.delete(t), E(e.transaction)));
              })(r(t), n),
            getKeys: () =>
              (function () {
                return (
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : S()
                )("readonly", (t) => {
                  if (t.getAllKeys) return E(t.getAllKeys());
                  const e = [];
                  return x(t, (t) => e.push(t.key)).then(() => e);
                });
              })(n),
            clear: () =>
              (function () {
                return (
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : S()
                )("readwrite", (t) => (t.clear(), E(t.transaction)));
              })(n),
          }
        );
      };
      class j {
        constructor() {
          this.indexedDb = w({
            driver: C({
              dbName: "WALLET_CONNECT_V2_INDEXED_DB",
              storeName: "keyvaluestorage",
            }),
          });
        }
        async getKeys() {
          return this.indexedDb.getKeys();
        }
        async getEntries() {
          return (
            await this.indexedDb.getItems(await this.indexedDb.getKeys())
          ).map((t) => [t.key, t.value]);
        }
        async getItem(t) {
          const e = await this.indexedDb.getItem(t);
          if (null !== e) return e;
        }
        async setItem(t, e) {
          await this.indexedDb.setItem(t, A(e));
        }
        async removeItem(t) {
          await this.indexedDb.removeItem(t);
        }
      }
      var T =
          typeof globalThis < "u"
            ? globalThis
            : typeof window < "u"
            ? window
            : typeof r.g < "u"
            ? r.g
            : typeof self < "u"
            ? self
            : {},
        N = { exports: {} };
      function L(t) {
        var e;
        return [t[0], R(null != (e = t[1]) ? e : "")];
      }
      !(function () {
        let t;
        function e() {}
        (t = e),
          (t.prototype.getItem = function (t) {
            return this.hasOwnProperty(t) ? String(this[t]) : null;
          }),
          (t.prototype.setItem = function (t, e) {
            this[t] = String(e);
          }),
          (t.prototype.removeItem = function (t) {
            delete this[t];
          }),
          (t.prototype.clear = function () {
            const t = this;
            Object.keys(t).forEach(function (e) {
              (t[e] = void 0), delete t[e];
            });
          }),
          (t.prototype.key = function (t) {
            return (t = t || 0), Object.keys(this)[t];
          }),
          t.prototype.__defineGetter__("length", function () {
            return Object.keys(this).length;
          }),
          typeof T < "u" && T.localStorage
            ? (N.exports = T.localStorage)
            : typeof window < "u" && window.localStorage
            ? (N.exports = window.localStorage)
            : (N.exports = new e());
      })();
      class q {
        constructor() {
          this.localStorage = N.exports;
        }
        async getKeys() {
          return Object.keys(this.localStorage);
        }
        async getEntries() {
          return Object.entries(this.localStorage).map(L);
        }
        async getItem(t) {
          const e = this.localStorage.getItem(t);
          if (null !== e) return R(e);
        }
        async setItem(t, e) {
          this.localStorage.setItem(t, A(e));
        }
        async removeItem(t) {
          this.localStorage.removeItem(t);
        }
      }
      const D = async (t, e) => {
        e.length &&
          e.forEach(async (e) => {
            await t.removeItem(e);
          });
      };
      class z {
        constructor() {
          (this.initialized = !1),
            (this.setInitialized = (t) => {
              (this.storage = t), (this.initialized = !0);
            });
          const t = new q();
          this.storage = t;
          try {
            (async (t, e, r) => {
              const n = "wc_storage_version",
                i = await e.getItem(n);
              if (i && i >= 1) return void r(e);
              const s = await t.getKeys();
              if (!s.length) return void r(e);
              const o = [];
              for (; s.length; ) {
                const r = s.shift();
                if (!r) continue;
                const n = r.toLowerCase();
                if (
                  n.includes("wc@") ||
                  n.includes("walletconnect") ||
                  n.includes("wc_") ||
                  n.includes("wallet_connect")
                ) {
                  const n = await t.getItem(r);
                  await e.setItem(r, n), o.push(r);
                }
              }
              await e.setItem(n, 1), r(e), D(t, o);
            })(t, new j(), this.setInitialized);
          } catch {
            this.initialized = !0;
          }
        }
        async getKeys() {
          return await this.initialize(), this.storage.getKeys();
        }
        async getEntries() {
          return await this.initialize(), this.storage.getEntries();
        }
        async getItem(t) {
          return await this.initialize(), this.storage.getItem(t);
        }
        async setItem(t, e) {
          return await this.initialize(), this.storage.setItem(t, e);
        }
        async removeItem(t) {
          return await this.initialize(), this.storage.removeItem(t);
        }
        async initialize() {
          this.initialized ||
            (await new Promise((t) => {
              const e = setInterval(() => {
                this.initialized && (clearInterval(e), t());
              }, 20);
            }));
        }
      }
      var M = r(80391),
        k = r(39758),
        $ = r.n(k);
      const U = "info",
        H = "custom_context";
      Symbol.iterator;
      var V = Object.defineProperty,
        K = Object.defineProperties,
        G = Object.getOwnPropertyDescriptors,
        B = Object.getOwnPropertySymbols,
        F = Object.prototype.hasOwnProperty,
        W = Object.prototype.propertyIsEnumerable,
        Q = (t, e, r) =>
          e in t
            ? V(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        J = (t, e) => {
          for (var r in e || (e = {})) F.call(e, r) && Q(t, r, e[r]);
          if (B) for (var r of B(e)) W.call(e, r) && Q(t, r, e[r]);
          return t;
        },
        Y = (t, e) => K(t, G(e));
      function Z(t) {
        return Y(J({}, t), {
          level: (null === t || void 0 === t ? void 0 : t.level) || U,
        });
      }
      function X(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H,
          r = "";
        return (
          (r =
            typeof t.bindings > "u"
              ? (function (t) {
                  return (
                    t[
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : H
                    ] || ""
                  );
                })(t, e)
              : t.bindings().context || ""),
          r
        );
      }
      function tt(t, e) {
        let r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : H;
        const n = (function (t, e) {
          const r = X(
            t,
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : H
          );
          return r.trim() ? `${r}/${e}` : e;
        })(t, e, r);
        return (function (t, e) {
          return (
            (t[
              arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : H
            ] = e),
            t
          );
        })(t.child({ context: n }), n, r);
      }
      var et = r(16454);
      class rt extends et.H {
        constructor(t) {
          super(), (this.opts = t), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class nt extends et.H {
        constructor(t, e) {
          super(),
            (this.core = t),
            (this.logger = e),
            (this.records = new Map());
        }
      }
      class it {
        constructor(t, e) {
          (this.logger = t), (this.core = e);
        }
      }
      class st extends et.H {
        constructor(t, e) {
          super(), (this.relayer = t), (this.logger = e);
        }
      }
      class ot extends et.H {
        constructor(t) {
          super();
        }
      }
      class at {
        constructor(t, e, r, n) {
          (this.core = t), (this.logger = e), (this.name = r);
        }
      }
      class ct extends et.H {
        constructor(t, e) {
          super(), (this.relayer = t), (this.logger = e);
        }
      }
      class ut extends et.H {
        constructor(t, e) {
          super(), (this.core = t), (this.logger = e);
        }
      }
      class ht {
        constructor(t, e) {
          (this.projectId = t), (this.logger = e);
        }
      }
      class lt {
        constructor(t, e) {
          (this.projectId = t), (this.logger = e);
        }
      }
      i();
      class pt {
        constructor(t) {
          (this.opts = t), (this.protocol = "wc"), (this.version = 2);
        }
      }
      n.EventEmitter;
      class ft {
        constructor(t) {
          this.client = t;
        }
      }
      var dt = r(4914),
        gt = r(86022),
        vt = r(50878);
      const yt = "base64url",
        mt = "did",
        wt = "key",
        _t = "base58btc";
      var bt = r(79055),
        Et = r(54262),
        It = r(69477);
      function Pt(t) {
        return (0, Et.d)((0, It.s)(A(t), "utf8"), yt);
      }
      function St(t) {
        const e = (0, It.s)("K36", _t),
          r = "z" + (0, Et.d)((0, bt.x)([e, t]), _t);
        return [mt, wt, r].join(":");
      }
      function Ot() {
        let t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : (0, gt.randomBytes)(32);
        return dt.K(t);
      }
      async function xt(t, e, r, n) {
        let i =
          arguments.length > 4 && void 0 !== arguments[4]
            ? arguments[4]
            : (0, vt.fromMiliseconds)(Date.now());
        const s = { alg: "EdDSA", typ: "JWT" },
          o = { iss: St(n.publicKey), sub: t, aud: e, iat: i, exp: i + r },
          a =
            ((c = { header: s, payload: o }),
            (0, It.s)([Pt(c.header), Pt(c.payload)].join("."), "utf8"));
        var c;
        return (function (t) {
          return [
            Pt(t.header),
            Pt(t.payload),
            ((e = t.signature), (0, Et.d)(e, yt)),
          ].join(".");
          var e;
        })({ header: s, payload: o, signature: dt._S(n.secretKey, a) });
      }
      r(28023);
      var Rt = r(20019);
      const At = "PARSE_ERROR",
        Ct = "INVALID_REQUEST",
        jt = "METHOD_NOT_FOUND",
        Tt = "INVALID_PARAMS",
        Nt = "INTERNAL_ERROR",
        Lt = "SERVER_ERROR",
        qt = [-32700, -32600, -32601, -32602, -32603],
        Dt = {
          [At]: { code: -32700, message: "Parse error" },
          [Ct]: { code: -32600, message: "Invalid Request" },
          [jt]: { code: -32601, message: "Method not found" },
          [Tt]: { code: -32602, message: "Invalid params" },
          [Nt]: { code: -32603, message: "Internal error" },
          [Lt]: { code: -32e3, message: "Server error" },
        },
        zt = Lt;
      function Mt(t) {
        return qt.includes(t);
      }
      function kt(t) {
        return Object.keys(Dt).includes(t) ? Dt[t] : Dt[zt];
      }
      function $t(t) {
        const e = Object.values(Dt).find((e) => e.code === t);
        return e || Dt[zt];
      }
      function Ut(t, e, r) {
        return t.message.includes("getaddrinfo ENOTFOUND") ||
          t.message.includes("connect ECONNREFUSED")
          ? new Error(`Unavailable ${r} RPC url at ${e}`)
          : t;
      }
      var Ht = r(21776);
      function Vt() {
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
        return (
          Date.now() * Math.pow(10, t) +
          Math.floor(Math.random() * Math.pow(10, t))
        );
      }
      function Kt() {
        return BigInt(
          Vt(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6)
        );
      }
      function Gt(t, e, r) {
        return { id: r || Vt(), jsonrpc: "2.0", method: t, params: e };
      }
      function Bt(t, e) {
        return { id: t, jsonrpc: "2.0", result: e };
      }
      function Ft(t, e, r) {
        return { id: t, jsonrpc: "2.0", error: Wt(e, r) };
      }
      function Wt(t, e) {
        return "undefined" === typeof t
          ? kt(Nt)
          : ("string" === typeof t &&
              (t = Object.assign(Object.assign({}, kt(Lt)), { message: t })),
            "undefined" !== typeof e && (t.data = e),
            Mt(t.code) && (t = $t(t.code)),
            t);
      }
      class Qt {}
      class Jt extends Qt {
        constructor() {
          super();
        }
      }
      class Yt extends Jt {
        constructor(t) {
          super();
        }
      }
      function Zt(t, e) {
        const r = (function (t) {
          const e = t.match(new RegExp(/^\w+:/, "gi"));
          if (e && e.length) return e[0];
        })(t);
        return "undefined" !== typeof r && new RegExp(e).test(r);
      }
      function Xt(t) {
        return Zt(t, "^https?:");
      }
      function te(t) {
        return Zt(t, "^wss?:");
      }
      function ee(t) {
        return (
          "object" === typeof t &&
          "id" in t &&
          "jsonrpc" in t &&
          "2.0" === t.jsonrpc
        );
      }
      function re(t) {
        return ee(t) && "method" in t;
      }
      function ne(t) {
        return ee(t) && (ie(t) || se(t));
      }
      function ie(t) {
        return "result" in t;
      }
      function se(t) {
        return "error" in t;
      }
      class oe extends Yt {
        constructor(t) {
          super(t),
            (this.events = new n.EventEmitter()),
            (this.hasRegisteredEventListeners = !1),
            (this.connection = this.setConnection(t)),
            this.connection.connected && this.registerEventListeners();
        }
        async connect() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.connection;
          await this.open(t);
        }
        async disconnect() {
          await this.close();
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        async request(t, e) {
          return this.requestStrict(
            Gt(t.method, t.params || [], t.id || Kt().toString()),
            e
          );
        }
        async requestStrict(t, e) {
          return new Promise(async (r, n) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (Qt) {
                n(Qt);
              }
            this.events.on(`${t.id}`, (t) => {
              se(t) ? n(t.error) : r(t.result);
            });
            try {
              await this.connection.send(t, e);
            } catch (Qt) {
              n(Qt);
            }
          });
        }
        setConnection() {
          return arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : this.connection;
        }
        onPayload(t) {
          this.events.emit("payload", t),
            ne(t)
              ? this.events.emit(`${t.id}`, t)
              : this.events.emit("message", { type: t.method, data: t.params });
        }
        onClose(t) {
          t &&
            3e3 === t.code &&
            this.events.emit(
              "error",
              new Error(
                `WebSocket connection closed abnormally with code: ${t.code} ${
                  t.reason ? `(${t.reason})` : ""
                }`
              )
            ),
            this.events.emit("disconnect");
        }
        async open() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.connection;
          (this.connection === t && this.connection.connected) ||
            (this.connection.connected && this.close(),
            "string" === typeof t &&
              (await this.connection.open(t), (t = this.connection)),
            (this.connection = this.setConnection(t)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit("connect"));
        }
        async close() {
          await this.connection.close();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on("payload", (t) => this.onPayload(t)),
            this.connection.on("close", (t) => this.onClose(t)),
            this.connection.on("error", (t) => this.events.emit("error", t)),
            this.connection.on("register_error", (t) => this.onClose()),
            (this.hasRegisteredEventListeners = !0));
        }
      }
      const ae = (t) => t.split("?")[0],
        ce =
          typeof WebSocket < "u"
            ? WebSocket
            : typeof r.g < "u" && typeof r.g.WebSocket < "u"
            ? r.g.WebSocket
            : typeof window < "u" && typeof window.WebSocket < "u"
            ? window.WebSocket
            : typeof self < "u" && typeof self.WebSocket < "u"
            ? self.WebSocket
            : r(88345);
      class ue {
        constructor(t) {
          if (
            ((this.url = t),
            (this.events = new n.EventEmitter()),
            (this.registering = !1),
            !te(t))
          )
            throw new Error(
              `Provided URL is not compatible with WebSocket connection: ${t}`
            );
          this.url = t;
        }
        get connected() {
          return typeof this.socket < "u";
        }
        get connecting() {
          return this.registering;
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        async open() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.url;
          await this.register(t);
        }
        async close() {
          return new Promise((t, e) => {
            typeof this.socket > "u"
              ? e(new Error("Connection already closed"))
              : ((this.socket.onclose = (e) => {
                  this.onClose(e), t();
                }),
                this.socket.close());
          });
        }
        async send(t) {
          typeof this.socket > "u" && (this.socket = await this.register());
          try {
            this.socket.send(A(t));
          } catch (e) {
            this.onError(t.id, e);
          }
        }
        register() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.url;
          if (!te(t))
            throw new Error(
              `Provided URL is not compatible with WebSocket connection: ${t}`
            );
          if (this.registering) {
            const t = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= t ||
                this.events.listenerCount("open") >= t) &&
                this.events.setMaxListeners(t + 1),
              new Promise((t, e) => {
                this.events.once("register_error", (t) => {
                  this.resetMaxListeners(), e(t);
                }),
                  this.events.once("open", () => {
                    if ((this.resetMaxListeners(), typeof this.socket > "u"))
                      return e(
                        new Error("WebSocket connection is missing or invalid")
                      );
                    t(this.socket);
                  });
              })
            );
          }
          return (
            (this.url = t),
            (this.registering = !0),
            new Promise((e, n) => {
              const i = new URLSearchParams(t).get("origin"),
                s = (0, Ht.isReactNative)()
                  ? { headers: { origin: i } }
                  : {
                      rejectUnauthorized:
                        ((a = t),
                        !new RegExp("wss?://localhost(:d{2,5})?").test(a)),
                    },
                o = new ce(t, [], s);
              var a;
              typeof WebSocket < "u" ||
              (typeof r.g < "u" && typeof r.g.WebSocket < "u") ||
              (typeof window < "u" && typeof window.WebSocket < "u") ||
              (typeof self < "u" && typeof self.WebSocket < "u")
                ? (o.onerror = (t) => {
                    const e = t;
                    n(this.emitError(e.error));
                  })
                : o.on("error", (t) => {
                    n(this.emitError(t));
                  }),
                (o.onopen = () => {
                  this.onOpen(o), e(o);
                });
            })
          );
        }
        onOpen(t) {
          (t.onmessage = (t) => this.onPayload(t)),
            (t.onclose = (t) => this.onClose(t)),
            (this.socket = t),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose(t) {
          (this.socket = void 0),
            (this.registering = !1),
            this.events.emit("close", t);
        }
        onPayload(t) {
          if (typeof t.data > "u") return;
          const e = "string" == typeof t.data ? R(t.data) : t.data;
          this.events.emit("payload", e);
        }
        onError(t, e) {
          const r = this.parseError(e),
            n = Ft(t, r.message || r.toString());
          this.events.emit("payload", n);
        }
        parseError(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.url;
          return Ut(t, ae(e), "WS");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
        emitError(t) {
          const e = this.parseError(
            new Error(
              (null === t || void 0 === t ? void 0 : t.message) ||
                `WebSocket connection failed for host: ${ae(this.url)}`
            )
          );
          return this.events.emit("register_error", e), e;
        }
      }
      var he = r(51812),
        le = r.n(he),
        pe = r(62838),
        fe = r.n(pe);
      var de = function (t, e) {
          if (t.length >= 255) throw new TypeError("Alphabet too long");
          for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
            r[n] = 255;
          for (var i = 0; i < t.length; i++) {
            var s = t.charAt(i),
              o = s.charCodeAt(0);
            if (255 !== r[o]) throw new TypeError(s + " is ambiguous");
            r[o] = i;
          }
          var a = t.length,
            c = t.charAt(0),
            u = Math.log(a) / Math.log(256),
            h = Math.log(256) / Math.log(a);
          function l(t) {
            if ("string" != typeof t) throw new TypeError("Expected String");
            if (0 === t.length) return new Uint8Array();
            var e = 0;
            if (" " !== t[e]) {
              for (var n = 0, i = 0; t[e] === c; ) n++, e++;
              for (
                var s = ((t.length - e) * u + 1) >>> 0, o = new Uint8Array(s);
                t[e];

              ) {
                var h = r[t.charCodeAt(e)];
                if (255 === h) return;
                for (
                  var l = 0, p = s - 1;
                  (0 !== h || l < i) && -1 !== p;
                  p--, l++
                )
                  (h += (a * o[p]) >>> 0),
                    (o[p] = h % 256 >>> 0),
                    (h = (h / 256) >>> 0);
                if (0 !== h) throw new Error("Non-zero carry");
                (i = l), e++;
              }
              if (" " !== t[e]) {
                for (var f = s - i; f !== s && 0 === o[f]; ) f++;
                for (var d = new Uint8Array(n + (s - f)), g = n; f !== s; )
                  d[g++] = o[f++];
                return d;
              }
            }
          }
          return {
            encode: function (e) {
              if (
                (e instanceof Uint8Array ||
                  (ArrayBuffer.isView(e)
                    ? (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength))
                    : Array.isArray(e) && (e = Uint8Array.from(e))),
                !(e instanceof Uint8Array))
              )
                throw new TypeError("Expected Uint8Array");
              if (0 === e.length) return "";
              for (
                var r = 0, n = 0, i = 0, s = e.length;
                i !== s && 0 === e[i];

              )
                i++, r++;
              for (
                var o = ((s - i) * h + 1) >>> 0, u = new Uint8Array(o);
                i !== s;

              ) {
                for (
                  var l = e[i], p = 0, f = o - 1;
                  (0 !== l || p < n) && -1 !== f;
                  f--, p++
                )
                  (l += (256 * u[f]) >>> 0),
                    (u[f] = l % a >>> 0),
                    (l = (l / a) >>> 0);
                if (0 !== l) throw new Error("Non-zero carry");
                (n = p), i++;
              }
              for (var d = o - n; d !== o && 0 === u[d]; ) d++;
              for (var g = c.repeat(r); d < o; ++d) g += t.charAt(u[d]);
              return g;
            },
            decodeUnsafe: l,
            decode: function (t) {
              var r = l(t);
              if (r) return r;
              throw new Error(`Non-${e} character`);
            },
          };
        },
        ge = de;
      const ve = (t) => {
        if (t instanceof Uint8Array && "Uint8Array" === t.constructor.name)
          return t;
        if (t instanceof ArrayBuffer) return new Uint8Array(t);
        if (ArrayBuffer.isView(t))
          return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
        throw new Error("Unknown type, must be binary type");
      };
      class ye {
        constructor(t, e, r) {
          (this.name = t), (this.prefix = e), (this.baseEncode = r);
        }
        encode(t) {
          if (t instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(t)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class me {
        constructor(t, e, r) {
          if (((this.name = t), (this.prefix = e), void 0 === e.codePointAt(0)))
            throw new Error("Invalid prefix character");
          (this.prefixCodePoint = e.codePointAt(0)), (this.baseDecode = r);
        }
        decode(t) {
          if ("string" == typeof t) {
            if (t.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(t)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(t.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(t) {
          return _e(this, t);
        }
      }
      class we {
        constructor(t) {
          this.decoders = t;
        }
        or(t) {
          return _e(this, t);
        }
        decode(t) {
          const e = t[0],
            r = this.decoders[e];
          if (r) return r.decode(t);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              t
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      const _e = (t, e) =>
        new we({
          ...(t.decoders || { [t.prefix]: t }),
          ...(e.decoders || { [e.prefix]: e }),
        });
      class be {
        constructor(t, e, r, n) {
          (this.name = t),
            (this.prefix = e),
            (this.baseEncode = r),
            (this.baseDecode = n),
            (this.encoder = new ye(t, e, r)),
            (this.decoder = new me(t, e, n));
        }
        encode(t) {
          return this.encoder.encode(t);
        }
        decode(t) {
          return this.decoder.decode(t);
        }
      }
      const Ee = (t) => {
          let { name: e, prefix: r, encode: n, decode: i } = t;
          return new be(e, r, n, i);
        },
        Ie = (t) => {
          let { prefix: e, name: r, alphabet: n } = t;
          const { encode: i, decode: s } = ge(n, r);
          return Ee({ prefix: e, name: r, encode: i, decode: (t) => ve(s(t)) });
        },
        Pe = (t) => {
          let { name: e, prefix: r, bitsPerChar: n, alphabet: i } = t;
          return Ee({
            prefix: r,
            name: e,
            encode: (t) =>
              ((t, e, r) => {
                const n = "=" === e[e.length - 1],
                  i = (1 << r) - 1;
                let s = "",
                  o = 0,
                  a = 0;
                for (let c = 0; c < t.length; ++c)
                  for (a = (a << 8) | t[c], o += 8; o > r; )
                    (o -= r), (s += e[i & (a >> o)]);
                if ((o && (s += e[i & (a << (r - o))]), n))
                  for (; (s.length * r) & 7; ) s += "=";
                return s;
              })(t, i, n),
            decode: (t) =>
              ((t, e, r, n) => {
                const i = {};
                for (let h = 0; h < e.length; ++h) i[e[h]] = h;
                let s = t.length;
                for (; "=" === t[s - 1]; ) --s;
                const o = new Uint8Array(((s * r) / 8) | 0);
                let a = 0,
                  c = 0,
                  u = 0;
                for (let h = 0; h < s; ++h) {
                  const e = i[t[h]];
                  if (void 0 === e) throw new SyntaxError(`Non-${n} character`);
                  (c = (c << r) | e),
                    (a += r),
                    a >= 8 && ((a -= 8), (o[u++] = 255 & (c >> a)));
                }
                if (a >= r || 255 & (c << (8 - a)))
                  throw new SyntaxError("Unexpected end of data");
                return o;
              })(t, i, n, e),
          });
        },
        Se = Ee({
          prefix: "\0",
          name: "identity",
          encode: (t) => ((t) => new TextDecoder().decode(t))(t),
          decode: (t) => ((t) => new TextEncoder().encode(t))(t),
        });
      var Oe = Object.freeze({ __proto__: null, identity: Se });
      const xe = Pe({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1,
      });
      var Re = Object.freeze({ __proto__: null, base2: xe });
      const Ae = Pe({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3,
      });
      var Ce = Object.freeze({ __proto__: null, base8: Ae });
      const je = Ie({ prefix: "9", name: "base10", alphabet: "0123456789" });
      var Te = Object.freeze({ __proto__: null, base10: je });
      const Ne = Pe({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        Le = Pe({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        });
      var qe = Object.freeze({ __proto__: null, base16: Ne, base16upper: Le });
      const De = Pe({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        ze = Pe({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        Me = Pe({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        ke = Pe({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        $e = Pe({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        Ue = Pe({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        He = Pe({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        Ve = Pe({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        Ke = Pe({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        });
      var Ge = Object.freeze({
        __proto__: null,
        base32: De,
        base32upper: ze,
        base32pad: Me,
        base32padupper: ke,
        base32hex: $e,
        base32hexupper: Ue,
        base32hexpad: He,
        base32hexpadupper: Ve,
        base32z: Ke,
      });
      const Be = Ie({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        Fe = Ie({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
      var We = Object.freeze({ __proto__: null, base36: Be, base36upper: Fe });
      const Qe = Ie({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        Je = Ie({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        });
      var Ye = Object.freeze({
        __proto__: null,
        base58btc: Qe,
        base58flickr: Je,
      });
      const Ze = Pe({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        Xe = Pe({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        tr = Pe({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        er = Pe({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        });
      var rr = Object.freeze({
        __proto__: null,
        base64: Ze,
        base64pad: Xe,
        base64url: tr,
        base64urlpad: er,
      });
      const nr = Array.from(
          "\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"
        ),
        ir = nr.reduce((t, e, r) => ((t[r] = e), t), []),
        sr = nr.reduce((t, e, r) => ((t[e.codePointAt(0)] = r), t), []);
      const or = Ee({
        prefix: "\ud83d\ude80",
        name: "base256emoji",
        encode: function (t) {
          return t.reduce((t, e) => (t += ir[e]), "");
        },
        decode: function (t) {
          const e = [];
          for (const r of t) {
            const t = sr[r.codePointAt(0)];
            if (void 0 === t)
              throw new Error(`Non-base256emoji character: ${r}`);
            e.push(t);
          }
          return new Uint8Array(e);
        },
      });
      var ar = Object.freeze({ __proto__: null, base256emoji: or }),
        cr = function t(e, r, n) {
          r = r || [];
          for (var i = (n = n || 0); e >= lr; )
            (r[n++] = (255 & e) | ur), (e /= 128);
          for (; e & hr; ) (r[n++] = (255 & e) | ur), (e >>>= 7);
          return (r[n] = 0 | e), (t.bytes = n - i + 1), r;
        },
        ur = 128,
        hr = -128,
        lr = Math.pow(2, 31);
      var pr = function t(e, r) {
          var n,
            i = 0,
            s = ((r = r || 0), 0),
            o = r,
            a = e.length;
          do {
            if (o >= a)
              throw ((t.bytes = 0), new RangeError("Could not decode varint"));
            (n = e[o++]),
              (i += s < 28 ? (n & dr) << s : (n & dr) * Math.pow(2, s)),
              (s += 7);
          } while (n >= fr);
          return (t.bytes = o - r), i;
        },
        fr = 128,
        dr = 127;
      var gr = Math.pow(2, 7),
        vr = Math.pow(2, 14),
        yr = Math.pow(2, 21),
        mr = Math.pow(2, 28),
        wr = Math.pow(2, 35),
        _r = Math.pow(2, 42),
        br = Math.pow(2, 49),
        Er = Math.pow(2, 56),
        Ir = Math.pow(2, 63),
        Pr = {
          encode: cr,
          decode: pr,
          encodingLength: function (t) {
            return t < gr
              ? 1
              : t < vr
              ? 2
              : t < yr
              ? 3
              : t < mr
              ? 4
              : t < wr
              ? 5
              : t < _r
              ? 6
              : t < br
              ? 7
              : t < Er
              ? 8
              : t < Ir
              ? 9
              : 10;
          },
        },
        Sr = Pr;
      const Or = function (t, e) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return Sr.encode(t, e, r), e;
        },
        xr = (t) => Sr.encodingLength(t),
        Rr = (t, e) => {
          const r = e.byteLength,
            n = xr(t),
            i = n + xr(r),
            s = new Uint8Array(i + r);
          return Or(t, s, 0), Or(r, s, n), s.set(e, i), new Ar(t, r, e, s);
        };
      class Ar {
        constructor(t, e, r, n) {
          (this.code = t), (this.size = e), (this.digest = r), (this.bytes = n);
        }
      }
      const Cr = (t) => {
        let { name: e, code: r, encode: n } = t;
        return new jr(e, r, n);
      };
      class jr {
        constructor(t, e, r) {
          (this.name = t), (this.code = e), (this.encode = r);
        }
        digest(t) {
          if (t instanceof Uint8Array) {
            const e = this.encode(t);
            return e instanceof Uint8Array
              ? Rr(this.code, e)
              : e.then((t) => Rr(this.code, t));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      const Tr = (t) => async (e) =>
          new Uint8Array(await crypto.subtle.digest(t, e)),
        Nr = Cr({ name: "sha2-256", code: 18, encode: Tr("SHA-256") }),
        Lr = Cr({ name: "sha2-512", code: 19, encode: Tr("SHA-512") });
      Object.freeze({ __proto__: null, sha256: Nr, sha512: Lr });
      const qr = ve,
        Dr = {
          code: 0,
          name: "identity",
          encode: qr,
          digest: (t) => Rr(0, qr(t)),
        };
      Object.freeze({ __proto__: null, identity: Dr });
      new TextEncoder(), new TextDecoder();
      const zr = {
        ...Oe,
        ...Re,
        ...Ce,
        ...Te,
        ...qe,
        ...Ge,
        ...We,
        ...Ye,
        ...rr,
        ...ar,
      };
      function Mr(t) {
        return null != globalThis.Buffer
          ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
          : t;
      }
      function kr(t, e, r, n) {
        return {
          name: t,
          prefix: e,
          encoder: { name: t, prefix: e, encode: r },
          decoder: { decode: n },
        };
      }
      const $r = kr(
          "utf8",
          "u",
          (t) => "u" + new TextDecoder("utf8").decode(t),
          (t) => new TextEncoder().encode(t.substring(1))
        ),
        Ur = kr(
          "ascii",
          "a",
          (t) => {
            let e = "a";
            for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
            return e;
          },
          (t) => {
            const e = (function () {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? Mr(globalThis.Buffer.allocUnsafe(t))
                : new Uint8Array(t);
            })((t = t.substring(1)).length);
            for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
            return e;
          }
        ),
        Hr = {
          utf8: $r,
          "utf-8": $r,
          hex: zr.base16,
          latin1: Ur,
          ascii: Ur,
          binary: Ur,
          ...zr,
        };
      const Vr = "core",
        Kr = `wc@2:${Vr}:`,
        Gr = "error",
        Br = { database: ":memory:" },
        Fr = "client_ed25519_seed",
        Wr = vt.ONE_DAY,
        Qr = vt.SIX_HOURS,
        Jr = "wss://relay.walletconnect.com",
        Yr = "wss://relay.walletconnect.org",
        Zr = "relayer_message",
        Xr = "relayer_message_ack",
        tn = "relayer_connect",
        en = "relayer_disconnect",
        rn = "relayer_error",
        nn = "relayer_connection_stalled",
        sn = "relayer_publish",
        on = "payload",
        an = "connect",
        cn = "disconnect",
        un = "error",
        hn = vt.ONE_SECOND,
        ln = "subscription_created",
        pn = "subscription_deleted",
        fn = "subscription_sync",
        dn = "subscription_resubscribed",
        gn = 1e3 * vt.FIVE_SECONDS,
        vn = {
          wc_pairingDelete: {
            req: { ttl: vt.ONE_DAY, prompt: !1, tag: 1e3 },
            res: { ttl: vt.ONE_DAY, prompt: !1, tag: 1001 },
          },
          wc_pairingPing: {
            req: { ttl: vt.THIRTY_SECONDS, prompt: !1, tag: 1002 },
            res: { ttl: vt.THIRTY_SECONDS, prompt: !1, tag: 1003 },
          },
          unregistered_method: {
            req: { ttl: vt.ONE_DAY, prompt: !1, tag: 0 },
            res: { ttl: vt.ONE_DAY, prompt: !1, tag: 0 },
          },
        },
        yn = "pairing_create",
        mn = "pairing_expire",
        wn = "pairing_delete",
        _n = "pairing_ping",
        bn = "history_created",
        En = "history_updated",
        In = "history_deleted",
        Pn = "history_sync",
        Sn = "expirer_created",
        On = "expirer_deleted",
        xn = "expirer_expired",
        Rn = "expirer_sync",
        An = "verify-api",
        Cn = "https://verify.walletconnect.com",
        jn = "https://verify.walletconnect.org",
        Tn = [Cn, jn];
      class Nn {
        constructor(t, e) {
          (this.core = t),
            (this.logger = e),
            (this.keychain = new Map()),
            (this.name = "keychain"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = Kr),
            (this.init = async () => {
              if (!this.initialized) {
                const t = await this.getKeyChain();
                typeof t < "u" && (this.keychain = t), (this.initialized = !0);
              }
            }),
            (this.has = (t) => (this.isInitialized(), this.keychain.has(t))),
            (this.set = async (t, e) => {
              this.isInitialized(),
                this.keychain.set(t, e),
                await this.persist();
            }),
            (this.get = (t) => {
              this.isInitialized();
              const e = this.keychain.get(t);
              if (typeof e > "u") {
                const { message: e } = (0, s.Gu)(
                  "NO_MATCHING_KEY",
                  `${this.name}: ${t}`
                );
                throw new Error(e);
              }
              return e;
            }),
            (this.del = async (t) => {
              this.isInitialized(),
                this.keychain.delete(t),
                await this.persist();
            }),
            (this.core = t),
            (this.logger = tt(e, this.name));
        }
        get context() {
          return X(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setKeyChain(t) {
          await this.core.storage.setItem(this.storageKey, (0, s.h0)(t));
        }
        async getKeyChain() {
          const t = await this.core.storage.getItem(this.storageKey);
          return typeof t < "u" ? (0, s.PU)(t) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: t } = (0, s.Gu)("NOT_INITIALIZED", this.name);
            throw new Error(t);
          }
        }
      }
      class Ln {
        constructor(t, e, r) {
          (this.core = t),
            (this.logger = e),
            (this.name = "crypto"),
            (this.initialized = !1),
            (this.init = async () => {
              this.initialized ||
                (await this.keychain.init(), (this.initialized = !0));
            }),
            (this.hasKeys = (t) => (
              this.isInitialized(), this.keychain.has(t)
            )),
            (this.getClientId = async () => {
              this.isInitialized();
              return St(Ot(await this.getClientSeed()).publicKey);
            }),
            (this.generateKeyPair = () => {
              this.isInitialized();
              const t = (0, s.TZ)();
              return this.setPrivateKey(t.publicKey, t.privateKey);
            }),
            (this.signJWT = async (t) => {
              this.isInitialized();
              const e = Ot(await this.getClientSeed()),
                r = (0, s.tw)(),
                n = Wr;
              return await xt(r, t, n, e);
            }),
            (this.generateSharedKey = (t, e, r) => {
              this.isInitialized();
              const n = this.getPrivateKey(t),
                i = (0, s.ov)(n, e);
              return this.setSymKey(i, r);
            }),
            (this.setSymKey = async (t, e) => {
              this.isInitialized();
              const r = e || (0, s.EN)(t);
              return await this.keychain.set(r, t), r;
            }),
            (this.deleteKeyPair = async (t) => {
              this.isInitialized(), await this.keychain.del(t);
            }),
            (this.deleteSymKey = async (t) => {
              this.isInitialized(), await this.keychain.del(t);
            }),
            (this.encode = async (t, e, r) => {
              this.isInitialized();
              const n = (0, s.Aw)(r),
                i = A(e);
              if ((0, s.V7)(n)) {
                const e = n.senderPublicKey,
                  r = n.receiverPublicKey;
                t = await this.generateSharedKey(e, r);
              }
              const o = this.getSymKey(t),
                { type: a, senderPublicKey: c } = n;
              return (0, s.w)({
                type: a,
                symKey: o,
                message: i,
                senderPublicKey: c,
              });
            }),
            (this.decode = async (t, e, r) => {
              this.isInitialized();
              const n = (0, s.C5)(e, r);
              if ((0, s.V7)(n)) {
                const e = n.receiverPublicKey,
                  r = n.senderPublicKey;
                t = await this.generateSharedKey(e, r);
              }
              try {
                const r = this.getSymKey(t);
                return R((0, s.Yc)({ symKey: r, encoded: e }));
              } catch (i) {
                this.logger.error(
                  `Failed to decode message from topic: '${t}', clientId: '${await this.getClientId()}'`
                ),
                  this.logger.error(i);
              }
            }),
            (this.getPayloadType = (t) => {
              const e = (0, s.iu)(t);
              return (0, s.x0)(e.type);
            }),
            (this.getPayloadSenderPublicKey = (t) => {
              const e = (0, s.iu)(t);
              return e.senderPublicKey
                ? (0, Rt.dI)(e.senderPublicKey, s.bE)
                : void 0;
            }),
            (this.core = t),
            (this.logger = tt(e, this.name)),
            (this.keychain = r || new Nn(this.core, this.logger));
        }
        get context() {
          return X(this.logger);
        }
        async setPrivateKey(t, e) {
          return await this.keychain.set(t, e), t;
        }
        getPrivateKey(t) {
          return this.keychain.get(t);
        }
        async getClientSeed() {
          let t = "";
          try {
            t = this.keychain.get(Fr);
          } catch {
            (t = (0, s.tw)()), await this.keychain.set(Fr, t);
          }
          return (function (t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "utf8";
            const r = Hr[e];
            if (!r) throw new Error(`Unsupported encoding "${e}"`);
            return ("utf8" !== e && "utf-8" !== e) ||
              null == globalThis.Buffer ||
              null == globalThis.Buffer.from
              ? r.decoder.decode(`${r.prefix}${t}`)
              : Mr(globalThis.Buffer.from(t, "utf-8"));
          })(t, "base16");
        }
        getSymKey(t) {
          return this.keychain.get(t);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: t } = (0, s.Gu)("NOT_INITIALIZED", this.name);
            throw new Error(t);
          }
        }
      }
      class qn extends it {
        constructor(t, e) {
          super(t, e),
            (this.logger = t),
            (this.core = e),
            (this.messages = new Map()),
            (this.name = "messages"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = Kr),
            (this.init = async () => {
              if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                  const t = await this.getRelayerMessages();
                  typeof t < "u" && (this.messages = t),
                    this.logger.debug(
                      `Successfully Restored records for ${this.name}`
                    ),
                    this.logger.trace({
                      type: "method",
                      method: "restore",
                      size: this.messages.size,
                    });
                } catch (J) {
                  this.logger.debug(
                    `Failed to Restore records for ${this.name}`
                  ),
                    this.logger.error(J);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            (this.set = async (t, e) => {
              this.isInitialized();
              const r = (0, s.AL)(e);
              let n = this.messages.get(t);
              return (
                typeof n > "u" && (n = {}),
                typeof n[r] < "u" ||
                  ((n[r] = e), this.messages.set(t, n), await this.persist()),
                r
              );
            }),
            (this.get = (t) => {
              this.isInitialized();
              let e = this.messages.get(t);
              return typeof e > "u" && (e = {}), e;
            }),
            (this.has = (t, e) => {
              this.isInitialized();
              return typeof this.get(t)[(0, s.AL)(e)] < "u";
            }),
            (this.del = async (t) => {
              this.isInitialized(),
                this.messages.delete(t),
                await this.persist();
            }),
            (this.logger = tt(t, this.name)),
            (this.core = e);
        }
        get context() {
          return X(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setRelayerMessages(t) {
          await this.core.storage.setItem(this.storageKey, (0, s.h0)(t));
        }
        async getRelayerMessages() {
          const t = await this.core.storage.getItem(this.storageKey);
          return typeof t < "u" ? (0, s.PU)(t) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: t } = (0, s.Gu)("NOT_INITIALIZED", this.name);
            throw new Error(t);
          }
        }
      }
      class Dn extends st {
        constructor(t, e) {
          super(t, e),
            (this.relayer = t),
            (this.logger = e),
            (this.events = new n.EventEmitter()),
            (this.name = "publisher"),
            (this.queue = new Map()),
            (this.publishTimeout = (0, vt.toMiliseconds)(vt.TEN_SECONDS)),
            (this.needsTransportRestart = !1),
            (this.publish = async (t, e, r) => {
              var n;
              this.logger.debug("Publishing Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { topic: t, message: e, opts: r },
                });
              try {
                const o = (null === r || void 0 === r ? void 0 : r.ttl) || Qr,
                  a = (0, s.n6)(r),
                  c = (null === r || void 0 === r ? void 0 : r.prompt) || !1,
                  u = (null === r || void 0 === r ? void 0 : r.tag) || 0,
                  h =
                    (null === r || void 0 === r ? void 0 : r.id) ||
                    Kt().toString(),
                  l = {
                    topic: t,
                    message: e,
                    opts: { ttl: o, relay: a, prompt: c, tag: u, id: h },
                  },
                  p = setTimeout(
                    () => this.queue.set(h, l),
                    this.publishTimeout
                  );
                try {
                  await await (0, s.K3)(
                    this.rpcPublish(t, e, o, a, c, u, h),
                    this.publishTimeout,
                    "Failed to publish payload, please try again."
                  ),
                    this.removeRequestFromQueue(h),
                    this.relayer.events.emit(sn, l);
                } catch (i) {
                  if (
                    (this.logger.debug("Publishing Payload stalled"),
                    (this.needsTransportRestart = !0),
                    null !=
                      (n = null === r || void 0 === r ? void 0 : r.internal) &&
                      n.throwOnFailedPublish)
                  )
                    throw (this.removeRequestFromQueue(h), i);
                  return;
                } finally {
                  clearTimeout(p);
                }
                this.logger.debug("Successfully Published Payload"),
                  this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: { topic: t, message: e, opts: r },
                  });
              } catch (it) {
                throw (
                  (this.logger.debug("Failed to Publish Payload"),
                  this.logger.error(it),
                  it)
                );
              }
            }),
            (this.on = (t, e) => {
              this.events.on(t, e);
            }),
            (this.once = (t, e) => {
              this.events.once(t, e);
            }),
            (this.off = (t, e) => {
              this.events.off(t, e);
            }),
            (this.removeListener = (t, e) => {
              this.events.removeListener(t, e);
            }),
            (this.relayer = t),
            (this.logger = tt(e, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return X(this.logger);
        }
        rpcPublish(t, e, r, n, i, o, a) {
          var c, u, h, l;
          const p = {
            method: (0, s.a)(n.protocol).publish,
            params: { topic: t, message: e, ttl: r, prompt: i, tag: o },
            id: a,
          };
          return (
            (0, s.b0)(null == (c = p.params) ? void 0 : c.prompt) &&
              (null == (u = p.params) || delete u.prompt),
            (0, s.b0)(null == (h = p.params) ? void 0 : h.tag) &&
              (null == (l = p.params) || delete l.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: p,
            }),
            this.relayer.request(p)
          );
        }
        removeRequestFromQueue(t) {
          this.queue.delete(t);
        }
        checkQueue() {
          this.queue.forEach(async (t) => {
            const { topic: e, message: r, opts: n } = t;
            await this.publish(e, r, n);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(M.HEARTBEAT_EVENTS.pulse, () => {
            if (this.needsTransportRestart)
              return (
                (this.needsTransportRestart = !1),
                void this.relayer.events.emit(nn)
              );
            this.checkQueue();
          }),
            this.relayer.on(Xr, (t) => {
              this.removeRequestFromQueue(t.id.toString());
            });
        }
      }
      class zn {
        constructor() {
          (this.map = new Map()),
            (this.set = (t, e) => {
              const r = this.get(t);
              this.exists(t, e) || this.map.set(t, [...r, e]);
            }),
            (this.get = (t) => this.map.get(t) || []),
            (this.exists = (t, e) => this.get(t).includes(e)),
            (this.delete = (t, e) => {
              if (typeof e > "u") return void this.map.delete(t);
              if (!this.map.has(t)) return;
              const r = this.get(t);
              if (!this.exists(t, e)) return;
              const n = r.filter((t) => t !== e);
              n.length ? this.map.set(t, n) : this.map.delete(t);
            }),
            (this.clear = () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var Mn = Object.defineProperty,
        kn = Object.defineProperties,
        $n = Object.getOwnPropertyDescriptors,
        Un = Object.getOwnPropertySymbols,
        Hn = Object.prototype.hasOwnProperty,
        Vn = Object.prototype.propertyIsEnumerable,
        Kn = (t, e, r) =>
          e in t
            ? Mn(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        Gn = (t, e) => {
          for (var r in e || (e = {})) Hn.call(e, r) && Kn(t, r, e[r]);
          if (Un) for (var r of Un(e)) Vn.call(e, r) && Kn(t, r, e[r]);
          return t;
        },
        Bn = (t, e) => kn(t, $n(e));
      class Fn extends ct {
        constructor(t, e) {
          super(t, e),
            (this.relayer = t),
            (this.logger = e),
            (this.subscriptions = new Map()),
            (this.topicMap = new zn()),
            (this.events = new n.EventEmitter()),
            (this.name = "subscription"),
            (this.version = "0.3"),
            (this.pending = new Map()),
            (this.cached = []),
            (this.initialized = !1),
            (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
            (this.pollingInterval = 20),
            (this.storagePrefix = Kr),
            (this.subscribeTimeout = 1e4),
            (this.restartInProgress = !1),
            (this.batchSubscribeTopicsLimit = 500),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                this.registerEventListeners(),
                (this.clientId = await this.relayer.core.crypto.getClientId()));
            }),
            (this.subscribe = async (t, e) => {
              await this.restartToComplete(),
                this.isInitialized(),
                this.logger.debug("Subscribing Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: { topic: t, opts: e },
                });
              try {
                const r = (0, s.n6)(e),
                  n = { topic: t, relay: r };
                this.pending.set(t, n);
                const i = await this.rpcSubscribe(t, r);
                return (
                  this.onSubscribe(i, n),
                  this.logger.debug("Successfully Subscribed Topic"),
                  this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: { topic: t, opts: e },
                  }),
                  i
                );
              } catch (H) {
                throw (
                  (this.logger.debug("Failed to Subscribe Topic"),
                  this.logger.error(H),
                  H)
                );
              }
            }),
            (this.unsubscribe = async (t, e) => {
              await this.restartToComplete(),
                this.isInitialized(),
                typeof (null === e || void 0 === e ? void 0 : e.id) < "u"
                  ? await this.unsubscribeById(t, e.id, e)
                  : await this.unsubscribeByTopic(t, e);
            }),
            (this.isSubscribed = async (t) =>
              !!this.topics.includes(t) ||
              (await new Promise((e, r) => {
                const n = new vt.Watch();
                n.start(this.pendingSubscriptionWatchLabel);
                const i = setInterval(() => {
                  !this.pending.has(t) &&
                    this.topics.includes(t) &&
                    (clearInterval(i),
                    n.stop(this.pendingSubscriptionWatchLabel),
                    e(!0)),
                    n.elapsed(this.pendingSubscriptionWatchLabel) >= gn &&
                      (clearInterval(i),
                      n.stop(this.pendingSubscriptionWatchLabel),
                      r(new Error("Subscription resolution timeout")));
                }, this.pollingInterval);
              }).catch(() => !1))),
            (this.on = (t, e) => {
              this.events.on(t, e);
            }),
            (this.once = (t, e) => {
              this.events.once(t, e);
            }),
            (this.off = (t, e) => {
              this.events.off(t, e);
            }),
            (this.removeListener = (t, e) => {
              this.events.removeListener(t, e);
            }),
            (this.restart = async () => {
              (this.restartInProgress = !0),
                await this.restore(),
                await this.reset(),
                (this.restartInProgress = !1);
            }),
            (this.relayer = t),
            (this.logger = tt(e, this.name)),
            (this.clientId = "");
        }
        get context() {
          return X(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.relayer.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        hasSubscription(t, e) {
          let r = !1;
          try {
            r = this.getSubscription(t).topic === e;
          } catch {}
          return r;
        }
        onEnable() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
        }
        async unsubscribeByTopic(t, e) {
          const r = this.topicMap.get(t);
          await Promise.all(
            r.map(async (r) => await this.unsubscribeById(t, r, e))
          );
        }
        async unsubscribeById(t, e, r) {
          this.logger.debug("Unsubscribing Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: t, id: e, opts: r },
            });
          try {
            const n = (0, s.n6)(r);
            await this.rpcUnsubscribe(t, e, n);
            const i = (0, s.Hj)("USER_DISCONNECTED", `${this.name}, ${t}`);
            await this.onUnsubscribe(t, e, i),
              this.logger.debug("Successfully Unsubscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: t, id: e, opts: r },
              });
          } catch (n) {
            throw (
              (this.logger.debug("Failed to Unsubscribe Topic"),
              this.logger.error(n),
              n)
            );
          }
        }
        async rpcSubscribe(t, e) {
          const r = {
            method: (0, s.a)(e.protocol).subscribe,
            params: { topic: t },
          };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            });
          try {
            await await (0, s.K3)(
              this.relayer.request(r),
              this.subscribeTimeout
            );
          } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
              this.relayer.events.emit(nn);
          }
          return (0, s.AL)(t + this.clientId);
        }
        async rpcBatchSubscribe(t) {
          if (!t.length) return;
          const e = t[0].relay,
            r = {
              method: (0, s.a)(e.protocol).batchSubscribe,
              params: { topics: t.map((t) => t.topic) },
            };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            });
          try {
            return await await (0, s.K3)(
              this.relayer.request(r),
              this.subscribeTimeout
            );
          } catch {
            this.logger.debug("Outgoing Relay Payload stalled"),
              this.relayer.events.emit(nn);
          }
        }
        rpcUnsubscribe(t, e, r) {
          const n = {
            method: (0, s.a)(r.protocol).unsubscribe,
            params: { topic: t, id: e },
          };
          return (
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: n,
            }),
            this.relayer.request(n)
          );
        }
        onSubscribe(t, e) {
          this.setSubscription(t, Bn(Gn({}, e), { id: t })),
            this.pending.delete(e.topic);
        }
        onBatchSubscribe(t) {
          t.length &&
            t.forEach((t) => {
              this.setSubscription(t.id, Gn({}, t)),
                this.pending.delete(t.topic);
            });
        }
        async onUnsubscribe(t, e, r) {
          this.events.removeAllListeners(e),
            this.hasSubscription(e, t) && this.deleteSubscription(e, r),
            await this.relayer.messages.del(t);
        }
        async setRelayerSubscriptions(t) {
          await this.relayer.core.storage.setItem(this.storageKey, t);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(t, e) {
          this.subscriptions.has(t) ||
            (this.logger.debug("Setting subscription"),
            this.logger.trace({
              type: "method",
              method: "setSubscription",
              id: t,
              subscription: e,
            }),
            this.addSubscription(t, e));
        }
        addSubscription(t, e) {
          this.subscriptions.set(t, Gn({}, e)),
            this.topicMap.set(e.topic, t),
            this.events.emit(ln, e);
        }
        getSubscription(t) {
          this.logger.debug("Getting subscription"),
            this.logger.trace({
              type: "method",
              method: "getSubscription",
              id: t,
            });
          const e = this.subscriptions.get(t);
          if (!e) {
            const { message: e } = (0, s.Gu)(
              "NO_MATCHING_KEY",
              `${this.name}: ${t}`
            );
            throw new Error(e);
          }
          return e;
        }
        deleteSubscription(t, e) {
          this.logger.debug("Deleting subscription"),
            this.logger.trace({
              type: "method",
              method: "deleteSubscription",
              id: t,
              reason: e,
            });
          const r = this.getSubscription(t);
          this.subscriptions.delete(t),
            this.topicMap.delete(r.topic, t),
            this.events.emit(pn, Bn(Gn({}, r), { reason: e }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values), this.events.emit(fn);
        }
        async reset() {
          if (this.cached.length) {
            const t = Math.ceil(
              this.cached.length / this.batchSubscribeTopicsLimit
            );
            for (let e = 0; e < t; e++) {
              const t = this.cached.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(t);
            }
          }
          this.events.emit(dn);
        }
        async restore() {
          try {
            const t = await this.getRelayerSubscriptions();
            if (typeof t > "u" || !t.length) return;
            if (this.subscriptions.size) {
              const { message: t } = (0, s.Gu)(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (
                (this.logger.error(t),
                this.logger.error(
                  `${this.name}: ${JSON.stringify(this.values)}`
                ),
                new Error(t))
              );
            }
            (this.cached = t),
              this.logger.debug(
                `Successfully Restored subscriptions for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values,
              });
          } catch (Qt) {
            this.logger.debug(
              `Failed to Restore subscriptions for ${this.name}`
            ),
              this.logger.error(Qt);
          }
        }
        async batchSubscribe(t) {
          if (!t.length) return;
          const e = await this.rpcBatchSubscribe(t);
          (0, s.OP)(e) &&
            this.onBatchSubscribe(e.map((e, r) => Bn(Gn({}, t[r]), { id: e })));
        }
        async onConnect() {
          this.restartInProgress || (await this.restart(), this.onEnable());
        }
        onDisconnect() {
          this.onDisable();
        }
        async checkPending() {
          if (!this.initialized || this.relayer.transportExplicitlyClosed)
            return;
          const t = [];
          this.pending.forEach((e) => {
            t.push(e);
          }),
            await this.batchSubscribe(t);
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(M.HEARTBEAT_EVENTS.pulse, async () => {
            await this.checkPending();
          }),
            this.relayer.on(tn, async () => {
              await this.onConnect();
            }),
            this.relayer.on(en, () => {
              this.onDisconnect();
            }),
            this.events.on(ln, async (t) => {
              const e = ln;
              this.logger.info(`Emitting ${e}`),
                this.logger.debug({ type: "event", event: e, data: t }),
                await this.persist();
            }),
            this.events.on(pn, async (t) => {
              const e = pn;
              this.logger.info(`Emitting ${e}`),
                this.logger.debug({ type: "event", event: e, data: t }),
                await this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: t } = (0, s.Gu)("NOT_INITIALIZED", this.name);
            throw new Error(t);
          }
        }
        async restartToComplete() {
          this.restartInProgress &&
            (await new Promise((t) => {
              const e = setInterval(() => {
                this.restartInProgress || (clearInterval(e), t());
              }, this.pollingInterval);
            }));
        }
      }
      var Wn = Object.defineProperty,
        Qn = Object.getOwnPropertySymbols,
        Jn = Object.prototype.hasOwnProperty,
        Yn = Object.prototype.propertyIsEnumerable,
        Zn = (t, e, r) =>
          e in t
            ? Wn(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r);
      class Xn extends ot {
        constructor(t) {
          super(t),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.events = new n.EventEmitter()),
            (this.name = "relayer"),
            (this.transportExplicitlyClosed = !1),
            (this.initialized = !1),
            (this.connectionAttemptInProgress = !1),
            (this.connectionStatusPollingInterval = 20),
            (this.staleConnectionErrors = ["socket hang up", "socket stalled"]),
            (this.hasExperiencedNetworkDisruption = !1),
            (this.request = async (t) => {
              this.logger.debug("Publishing Request Payload");
              try {
                return (
                  await this.toEstablishConnection(),
                  await this.provider.request(t)
                );
              } catch (J) {
                throw (
                  (this.logger.debug("Failed to Publish Request"),
                  this.logger.error(J),
                  J)
                );
              }
            }),
            (this.onPayloadHandler = (t) => {
              this.onProviderPayload(t);
            }),
            (this.onConnectHandler = () => {
              this.events.emit(tn);
            }),
            (this.onDisconnectHandler = () => {
              this.onProviderDisconnect();
            }),
            (this.onProviderErrorHandler = (t) => {
              this.logger.error(t),
                this.events.emit(rn, t),
                this.logger.info(
                  "Fatal socket error received, closing transport"
                ),
                this.transportClose();
            }),
            (this.registerProviderListeners = () => {
              this.provider.on(on, this.onPayloadHandler),
                this.provider.on(an, this.onConnectHandler),
                this.provider.on(cn, this.onDisconnectHandler),
                this.provider.on(un, this.onProviderErrorHandler);
            }),
            (this.core = t.core),
            (this.logger =
              typeof t.logger < "u" && "string" != typeof t.logger
                ? tt(t.logger, this.name)
                : $()(Z({ level: t.logger || "error" }))),
            (this.messages = new qn(this.logger, t.core)),
            (this.subscriber = new Fn(this, this.logger)),
            (this.publisher = new Dn(this, this.logger)),
            (this.relayUrl =
              (null === t || void 0 === t ? void 0 : t.relayUrl) || Jr),
            (this.projectId = t.projectId),
            (this.bundleId = (0, s.w4)()),
            (this.provider = {});
        }
        async init() {
          this.logger.trace("Initialized"),
            this.registerEventListeners(),
            await this.createProvider(),
            await Promise.all([this.messages.init(), this.subscriber.init()]);
          try {
            await this.transportOpen();
          } catch {
            this.logger.warn(
              `Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Yr}...`
            ),
              await this.restartTransport(Yr);
          }
          (this.initialized = !0),
            setTimeout(async () => {
              0 === this.subscriber.topics.length &&
                (this.logger.info(
                  "No topics subscribed to after init, closing transport"
                ),
                await this.transportClose(),
                (this.transportExplicitlyClosed = !1));
            }, 1e4);
        }
        get context() {
          return X(this.logger);
        }
        get connected() {
          return this.provider.connection.connected;
        }
        get connecting() {
          return this.provider.connection.connecting;
        }
        async publish(t, e, r) {
          this.isInitialized(),
            await this.publisher.publish(t, e, r),
            await this.recordMessageEvent({
              topic: t,
              message: e,
              publishedAt: Date.now(),
            });
        }
        async subscribe(t, e) {
          var r;
          this.isInitialized();
          let n,
            i =
              (null == (r = this.subscriber.topicMap.get(t)) ? void 0 : r[0]) ||
              "";
          if (i) return i;
          const s = (e) => {
            e.topic === t && (this.subscriber.off(ln, s), n());
          };
          return (
            await Promise.all([
              new Promise((t) => {
                (n = t), this.subscriber.on(ln, s);
              }),
              new Promise(async (r) => {
                (i = await this.subscriber.subscribe(t, e)), r();
              }),
            ]),
            i
          );
        }
        async unsubscribe(t, e) {
          this.isInitialized(), await this.subscriber.unsubscribe(t, e);
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0),
            this.hasExperiencedNetworkDisruption && this.connected
              ? await (0, s.K3)(
                  this.provider.disconnect(),
                  1e3,
                  "provider.disconnect()"
                ).catch(() => this.onProviderDisconnect())
              : this.connected && (await this.provider.disconnect());
        }
        async transportOpen(t) {
          if (
            ((this.transportExplicitlyClosed = !1),
            await this.confirmOnlineStateOrThrow(),
            !this.connectionAttemptInProgress)
          ) {
            t &&
              t !== this.relayUrl &&
              ((this.relayUrl = t),
              await this.transportClose(),
              await this.createProvider()),
              (this.connectionAttemptInProgress = !0);
            try {
              await Promise.all([
                new Promise((t) => {
                  if (!this.initialized) return t();
                  this.subscriber.once(dn, () => {
                    t();
                  });
                }),
                new Promise(async (t, e) => {
                  try {
                    await (0, s.K3)(
                      this.provider.connect(),
                      1e4,
                      `Socket stalled when trying to connect to ${this.relayUrl}`
                    );
                  } catch (r) {
                    return void e(r);
                  }
                  t();
                }),
              ]);
            } catch (e) {
              this.logger.error(e);
              const t = e;
              if (!this.isConnectionStalled(t.message)) throw e;
              this.provider.events.emit(cn);
            } finally {
              (this.connectionAttemptInProgress = !1),
                (this.hasExperiencedNetworkDisruption = !1);
            }
          }
        }
        async restartTransport(t) {
          await this.confirmOnlineStateOrThrow(),
            !this.connectionAttemptInProgress &&
              ((this.relayUrl = t || this.relayUrl),
              await this.transportClose(),
              await this.createProvider(),
              await this.transportOpen());
        }
        async confirmOnlineStateOrThrow() {
          if (!(await (0, s.sc)()))
            throw new Error(
              "No internet connection detected. Please restart your network and try again."
            );
        }
        isConnectionStalled(t) {
          return this.staleConnectionErrors.some((e) => t.includes(e));
        }
        async createProvider() {
          this.provider.connection && this.unregisterProviderListeners();
          const t = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new oe(
            new ue(
              (0, s.jU)({
                sdkVersion: "2.11.0",
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: t,
                useOnCloseEvent: !0,
                bundleId: this.bundleId,
              })
            )
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(t) {
          const { topic: e, message: r } = t;
          await this.messages.set(e, r);
        }
        async shouldIgnoreMessageEvent(t) {
          const { topic: e, message: r } = t;
          if (!r || 0 === r.length)
            return (
              this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0
            );
          if (!(await this.subscriber.isSubscribed(e)))
            return (
              this.logger.debug(
                `Ignoring message for non-subscribed topic ${e}`
              ),
              !0
            );
          const n = this.messages.has(e, r);
          return n && this.logger.debug(`Ignoring duplicate message: ${r}`), n;
        }
        async onProviderPayload(t) {
          if (
            (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "incoming",
              payload: t,
            }),
            re(t))
          ) {
            if (!t.method.endsWith("_subscription")) return;
            const e = t.params,
              { topic: r, message: n, publishedAt: i } = e.data,
              s = { topic: r, message: n, publishedAt: i };
            this.logger.debug("Emitting Relayer Payload"),
              this.logger.trace(
                ((t, e) => {
                  for (var r in e || (e = {})) Jn.call(e, r) && Zn(t, r, e[r]);
                  if (Qn) for (var r of Qn(e)) Yn.call(e, r) && Zn(t, r, e[r]);
                  return t;
                })({ type: "event", event: e.id }, s)
              ),
              this.events.emit(e.id, s),
              await this.acknowledgePayload(t),
              await this.onMessageEvent(s);
          } else ne(t) && this.events.emit(Xr, t);
        }
        async onMessageEvent(t) {
          (await this.shouldIgnoreMessageEvent(t)) ||
            (this.events.emit(Zr, t), await this.recordMessageEvent(t));
        }
        async acknowledgePayload(t) {
          const e = Bt(t.id, !0);
          await this.provider.connection.send(e);
        }
        unregisterProviderListeners() {
          this.provider.off(on, this.onPayloadHandler),
            this.provider.off(an, this.onConnectHandler),
            this.provider.off(cn, this.onDisconnectHandler),
            this.provider.off(un, this.onProviderErrorHandler);
        }
        async registerEventListeners() {
          this.events.on(nn, () => {
            this.restartTransport().catch((t) => this.logger.error(t));
          });
          let t = await (0, s.sc)();
          (0, s.bb)(async (e) => {
            this.initialized &&
              t !== e &&
              ((t = e),
              e
                ? await this.restartTransport().catch((t) =>
                    this.logger.error(t)
                  )
                : ((this.hasExperiencedNetworkDisruption = !0),
                  await this.transportClose().catch((t) =>
                    this.logger.error(t)
                  )));
          });
        }
        onProviderDisconnect() {
          this.events.emit(en), this.attemptToReconnect();
        }
        attemptToReconnect() {
          this.transportExplicitlyClosed ||
            (this.logger.info("attemptToReconnect called. Connecting..."),
            setTimeout(async () => {
              await this.restartTransport().catch((t) => this.logger.error(t));
            }, (0, vt.toMiliseconds)(hn)));
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: t } = (0, s.Gu)("NOT_INITIALIZED", this.name);
            throw new Error(t);
          }
        }
        async toEstablishConnection() {
          if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
            if (this.connectionAttemptInProgress)
              return await new Promise((t) => {
                const e = setInterval(() => {
                  this.connected && (clearInterval(e), t());
                }, this.connectionStatusPollingInterval);
              });
            await this.restartTransport();
          }
        }
      }
      var ti = Object.defineProperty,
        ei = Object.getOwnPropertySymbols,
        ri = Object.prototype.hasOwnProperty,
        ni = Object.prototype.propertyIsEnumerable,
        ii = (t, e, r) =>
          e in t
            ? ti(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        si = (t, e) => {
          for (var r in e || (e = {})) ri.call(e, r) && ii(t, r, e[r]);
          if (ei) for (var r of ei(e)) ni.call(e, r) && ii(t, r, e[r]);
          return t;
        };
      class oi extends at {
        constructor(t, e, r) {
          let n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : Kr,
            i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : void 0;
          super(t, e, r, n),
            (this.core = t),
            (this.logger = e),
            (this.name = r),
            (this.map = new Map()),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = Kr),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((t) => {
                  this.getKey && null !== t && !(0, s.b0)(t)
                    ? this.map.set(this.getKey(t), t)
                    : (0, s.CT)(t)
                    ? this.map.set(t.id, t)
                    : (0, s.mr)(t) && this.map.set(t.topic, t);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            (this.set = async (t, e) => {
              this.isInitialized(),
                this.map.has(t)
                  ? await this.update(t, e)
                  : (this.logger.debug("Setting value"),
                    this.logger.trace({
                      type: "method",
                      method: "set",
                      key: t,
                      value: e,
                    }),
                    this.map.set(t, e),
                    await this.persist());
            }),
            (this.get = (t) => (
              this.isInitialized(),
              this.logger.debug("Getting value"),
              this.logger.trace({ type: "method", method: "get", key: t }),
              this.getData(t)
            )),
            (this.getAll = (t) => (
              this.isInitialized(),
              t
                ? this.values.filter((e) =>
                    Object.keys(t).every((r) => le()(e[r], t[r]))
                  )
                : this.values
            )),
            (this.update = async (t, e) => {
              this.isInitialized(),
                this.logger.debug("Updating value"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  key: t,
                  update: e,
                });
              const r = si(si({}, this.getData(t)), e);
              this.map.set(t, r), await this.persist();
            }),
            (this.delete = async (t, e) => {
              this.isInitialized(),
                this.map.has(t) &&
                  (this.logger.debug("Deleting value"),
                  this.logger.trace({
                    type: "method",
                    method: "delete",
                    key: t,
                    reason: e,
                  }),
                  this.map.delete(t),
                  await this.persist());
            }),
            (this.logger = tt(e, this.name)),
            (this.storagePrefix = n),
            (this.getKey = i);
        }
        get context() {
          return X(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        async setDataStore(t) {
          await this.core.storage.setItem(this.storageKey, t);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(t) {
          const e = this.map.get(t);
          if (!e) {
            const { message: e } = (0, s.Gu)(
              "NO_MATCHING_KEY",
              `${this.name}: ${t}`
            );
            throw (this.logger.error(e), new Error(e));
          }
          return e;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            const t = await this.getDataStore();
            if (typeof t > "u" || !t.length) return;
            if (this.map.size) {
              const { message: t } = (0, s.Gu)(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (this.logger.error(t), new Error(t));
            }
            (this.cached = t),
              this.logger.debug(`Successfully Restored value for ${this.name}`),
              this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values,
              });
          } catch (Qt) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
              this.logger.error(Qt);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: t } = (0, s.Gu)("NOT_INITIALIZED", this.name);
            throw new Error(t);
          }
        }
      }
      class ai {
        constructor(t, e) {
          (this.core = t),
            (this.logger = e),
            (this.name = "pairing"),
            (this.version = "0.3"),
            (this.events = new (i())()),
            (this.initialized = !1),
            (this.storagePrefix = Kr),
            (this.ignoredPayloadTypes = [s.Lp]),
            (this.registeredMethods = []),
            (this.init = async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace("Initialized"));
            }),
            (this.register = (t) => {
              let { methods: e } = t;
              this.isInitialized(),
                (this.registeredMethods = [
                  ...new Set([...this.registeredMethods, ...e]),
                ]);
            }),
            (this.create = async () => {
              this.isInitialized();
              const t = (0, s.tw)(),
                e = await this.core.crypto.setSymKey(t),
                r = (0, s.Xw)(vt.FIVE_MINUTES),
                n = { protocol: "irn" },
                i = { topic: e, expiry: r, relay: n, active: !1 },
                o = (0, s.QJ)({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: e,
                  symKey: t,
                  relay: n,
                });
              return (
                await this.pairings.set(e, i),
                await this.core.relayer.subscribe(e),
                this.core.expirer.set(e, r),
                { topic: e, uri: o }
              );
            }),
            (this.pair = async (t) => {
              this.isInitialized(), this.isValidPair(t);
              const { topic: e, symKey: r, relay: n } = (0, s.wY)(t.uri);
              let i;
              if (
                this.pairings.keys.includes(e) &&
                ((i = this.pairings.get(e)), i.active)
              )
                throw new Error(
                  `Pairing already exists: ${e}. Please try again with a new connection URI.`
                );
              const o = (0, s.Xw)(vt.FIVE_MINUTES),
                a = { topic: e, relay: n, expiry: o, active: !1 };
              return (
                await this.pairings.set(e, a),
                this.core.expirer.set(e, o),
                t.activatePairing && (await this.activate({ topic: e })),
                this.events.emit(yn, a),
                this.core.crypto.keychain.has(e) ||
                  (await this.core.crypto.setSymKey(r, e),
                  await this.core.relayer.subscribe(e, { relay: n })),
                a
              );
            }),
            (this.activate = async (t) => {
              let { topic: e } = t;
              this.isInitialized();
              const r = (0, s.Xw)(vt.THIRTY_DAYS);
              await this.pairings.update(e, { active: !0, expiry: r }),
                this.core.expirer.set(e, r);
            }),
            (this.ping = async (t) => {
              this.isInitialized(), await this.isValidPing(t);
              const { topic: e } = t;
              if (this.pairings.keys.includes(e)) {
                const t = await this.sendRequest(e, "wc_pairingPing", {}),
                  { done: r, resolve: n, reject: i } = (0, s.Wx)();
                this.events.once((0, s.hE)("pairing_ping", t), (t) => {
                  let { error: e } = t;
                  e ? i(e) : n();
                }),
                  await r();
              }
            }),
            (this.updateExpiry = async (t) => {
              let { topic: e, expiry: r } = t;
              this.isInitialized(),
                await this.pairings.update(e, { expiry: r });
            }),
            (this.updateMetadata = async (t) => {
              let { topic: e, metadata: r } = t;
              this.isInitialized(),
                await this.pairings.update(e, { peerMetadata: r });
            }),
            (this.getPairings = () => (
              this.isInitialized(), this.pairings.values
            )),
            (this.disconnect = async (t) => {
              this.isInitialized(), await this.isValidDisconnect(t);
              const { topic: e } = t;
              this.pairings.keys.includes(e) &&
                (await this.sendRequest(
                  e,
                  "wc_pairingDelete",
                  (0, s.Hj)("USER_DISCONNECTED")
                ),
                await this.deletePairing(e));
            }),
            (this.sendRequest = async (t, e, r) => {
              const n = Gt(e, r),
                i = await this.core.crypto.encode(t, n),
                s = vn[e].req;
              return (
                this.core.history.set(t, n),
                this.core.relayer.publish(t, i, s),
                n.id
              );
            }),
            (this.sendResult = async (t, e, r) => {
              const n = Bt(t, r),
                i = await this.core.crypto.encode(e, n),
                s = await this.core.history.get(e, t),
                o = vn[s.request.method].res;
              await this.core.relayer.publish(e, i, o),
                await this.core.history.resolve(n);
            }),
            (this.sendError = async (t, e, r) => {
              const n = Ft(t, r),
                i = await this.core.crypto.encode(e, n),
                s = await this.core.history.get(e, t),
                o = vn[s.request.method]
                  ? vn[s.request.method].res
                  : vn.unregistered_method.res;
              await this.core.relayer.publish(e, i, o),
                await this.core.history.resolve(n);
            }),
            (this.deletePairing = async (t, e) => {
              await this.core.relayer.unsubscribe(t),
                await Promise.all([
                  this.pairings.delete(t, (0, s.Hj)("USER_DISCONNECTED")),
                  this.core.crypto.deleteSymKey(t),
                  e ? Promise.resolve() : this.core.expirer.del(t),
                ]);
            }),
            (this.cleanup = async () => {
              const t = this.pairings
                .getAll()
                .filter((t) => (0, s._d)(t.expiry));
              await Promise.all(t.map((t) => this.deletePairing(t.topic)));
            }),
            (this.onRelayEventRequest = (t) => {
              const { topic: e, payload: r } = t;
              switch (r.method) {
                case "wc_pairingPing":
                  return this.onPairingPingRequest(e, r);
                case "wc_pairingDelete":
                  return this.onPairingDeleteRequest(e, r);
                default:
                  return this.onUnknownRpcMethodRequest(e, r);
              }
            }),
            (this.onRelayEventResponse = async (t) => {
              const { topic: e, payload: r } = t,
                n = (await this.core.history.get(e, r.id)).request.method;
              return "wc_pairingPing" === n
                ? this.onPairingPingResponse(e, r)
                : this.onUnknownRpcMethodResponse(n);
            }),
            (this.onPairingPingRequest = async (t, e) => {
              const { id: r } = e;
              try {
                this.isValidPing({ topic: t }),
                  await this.sendResult(r, t, !0),
                  this.events.emit(_n, { id: r, topic: t });
              } catch (n) {
                await this.sendError(r, t, n), this.logger.error(n);
              }
            }),
            (this.onPairingPingResponse = (t, e) => {
              const { id: r } = e;
              setTimeout(() => {
                ie(e)
                  ? this.events.emit((0, s.hE)("pairing_ping", r), {})
                  : se(e) &&
                    this.events.emit((0, s.hE)("pairing_ping", r), {
                      error: e.error,
                    });
              }, 500);
            }),
            (this.onPairingDeleteRequest = async (t, e) => {
              const { id: r } = e;
              try {
                this.isValidDisconnect({ topic: t }),
                  await this.deletePairing(t),
                  this.events.emit(wn, { id: r, topic: t });
              } catch (n) {
                await this.sendError(r, t, n), this.logger.error(n);
              }
            }),
            (this.onUnknownRpcMethodRequest = async (t, e) => {
              const { id: r, method: n } = e;
              try {
                if (this.registeredMethods.includes(n)) return;
                const e = (0, s.Hj)("WC_METHOD_UNSUPPORTED", n);
                await this.sendError(r, t, e), this.logger.error(e);
              } catch (it) {
                await this.sendError(r, t, it), this.logger.error(it);
              }
            }),
            (this.onUnknownRpcMethodResponse = (t) => {
              this.registeredMethods.includes(t) ||
                this.logger.error((0, s.Hj)("WC_METHOD_UNSUPPORTED", t));
            }),
            (this.isValidPair = (t) => {
              var e;
              if (!(0, s.Te)(t)) {
                const { message: e } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `pair() params: ${t}`
                );
                throw new Error(e);
              }
              if (!(0, s.AY)(t.uri)) {
                const { message: e } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `pair() uri: ${t.uri}`
                );
                throw new Error(e);
              }
              const r = (0, s.wY)(t.uri);
              if (
                null == (e = null === r || void 0 === r ? void 0 : r.relay) ||
                !e.protocol
              ) {
                const { message: t } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  "pair() uri#relay-protocol"
                );
                throw new Error(t);
              }
              if (null == r || !r.symKey) {
                const { message: t } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  "pair() uri#symKey"
                );
                throw new Error(t);
              }
            }),
            (this.isValidPing = async (t) => {
              if (!(0, s.Te)(t)) {
                const { message: e } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `ping() params: ${t}`
                );
                throw new Error(e);
              }
              const { topic: e } = t;
              await this.isValidPairingTopic(e);
            }),
            (this.isValidDisconnect = async (t) => {
              if (!(0, s.Te)(t)) {
                const { message: e } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${t}`
                );
                throw new Error(e);
              }
              const { topic: e } = t;
              await this.isValidPairingTopic(e);
            }),
            (this.isValidPairingTopic = async (t) => {
              if (!(0, s.Qh)(t, !1)) {
                const { message: e } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `pairing topic should be a string: ${t}`
                );
                throw new Error(e);
              }
              if (!this.pairings.keys.includes(t)) {
                const { message: e } = (0, s.Gu)(
                  "NO_MATCHING_KEY",
                  `pairing topic doesn't exist: ${t}`
                );
                throw new Error(e);
              }
              if ((0, s._d)(this.pairings.get(t).expiry)) {
                await this.deletePairing(t);
                const { message: e } = (0, s.Gu)(
                  "EXPIRED",
                  `pairing topic: ${t}`
                );
                throw new Error(e);
              }
            }),
            (this.core = t),
            (this.logger = tt(e, this.name)),
            (this.pairings = new oi(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix
            ));
        }
        get context() {
          return X(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: t } = (0, s.Gu)("NOT_INITIALIZED", this.name);
            throw new Error(t);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(Zr, async (t) => {
            const { topic: e, message: r } = t;
            if (
              !this.pairings.keys.includes(e) ||
              this.ignoredPayloadTypes.includes(
                this.core.crypto.getPayloadType(r)
              )
            )
              return;
            const n = await this.core.crypto.decode(e, r);
            try {
              re(n)
                ? (this.core.history.set(e, n),
                  this.onRelayEventRequest({ topic: e, payload: n }))
                : ne(n) &&
                  (await this.core.history.resolve(n),
                  await this.onRelayEventResponse({ topic: e, payload: n }),
                  this.core.history.delete(e, n.id));
            } catch (H) {
              this.logger.error(H);
            }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(xn, async (t) => {
            const { topic: e } = (0, s.c8)(t.target);
            e &&
              this.pairings.keys.includes(e) &&
              (await this.deletePairing(e, !0),
              this.events.emit(mn, { topic: e }));
          });
        }
      }
      class ci extends nt {
        constructor(t, e) {
          super(t, e),
            (this.core = t),
            (this.logger = e),
            (this.records = new Map()),
            (this.events = new n.EventEmitter()),
            (this.name = "history"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = Kr),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((t) => this.records.set(t.id, t)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.set = (t, e, r) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Setting JSON-RPC request history record"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  topic: t,
                  request: e,
                  chainId: r,
                }),
                this.records.has(e.id))
              )
                return;
              const n = {
                id: e.id,
                topic: t,
                request: { method: e.method, params: e.params || null },
                chainId: r,
                expiry: (0, s.Xw)(vt.THIRTY_DAYS),
              };
              this.records.set(n.id, n), this.events.emit(bn, n);
            }),
            (this.resolve = async (t) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Updating JSON-RPC response history record"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  response: t,
                }),
                !this.records.has(t.id))
              )
                return;
              const e = await this.getRecord(t.id);
              typeof e.response > "u" &&
                ((e.response = se(t)
                  ? { error: t.error }
                  : { result: t.result }),
                this.records.set(e.id, e),
                this.events.emit(En, e));
            }),
            (this.get = async (t, e) => (
              this.isInitialized(),
              this.logger.debug("Getting record"),
              this.logger.trace({
                type: "method",
                method: "get",
                topic: t,
                id: e,
              }),
              await this.getRecord(e)
            )),
            (this.delete = (t, e) => {
              this.isInitialized(),
                this.logger.debug("Deleting record"),
                this.logger.trace({ type: "method", method: "delete", id: e }),
                this.values.forEach((r) => {
                  if (r.topic === t) {
                    if (typeof e < "u" && r.id !== e) return;
                    this.records.delete(r.id), this.events.emit(In, r);
                  }
                });
            }),
            (this.exists = async (t, e) => (
              this.isInitialized(),
              !!this.records.has(e) && (await this.getRecord(e)).topic === t
            )),
            (this.on = (t, e) => {
              this.events.on(t, e);
            }),
            (this.once = (t, e) => {
              this.events.once(t, e);
            }),
            (this.off = (t, e) => {
              this.events.off(t, e);
            }),
            (this.removeListener = (t, e) => {
              this.events.removeListener(t, e);
            }),
            (this.logger = tt(e, this.name));
        }
        get context() {
          return X(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          const t = [];
          return (
            this.values.forEach((e) => {
              if (typeof e.response < "u") return;
              const r = {
                topic: e.topic,
                request: Gt(e.request.method, e.request.params, e.id),
                chainId: e.chainId,
              };
              return t.push(r);
            }),
            t
          );
        }
        async setJsonRpcRecords(t) {
          await this.core.storage.setItem(this.storageKey, t);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(t) {
          this.isInitialized();
          const e = this.records.get(t);
          if (!e) {
            const { message: e } = (0, s.Gu)(
              "NO_MATCHING_KEY",
              `${this.name}: ${t}`
            );
            throw new Error(e);
          }
          return e;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(Pn);
        }
        async restore() {
          try {
            const t = await this.getJsonRpcRecords();
            if (typeof t > "u" || !t.length) return;
            if (this.records.size) {
              const { message: t } = (0, s.Gu)(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (this.logger.error(t), new Error(t));
            }
            (this.cached = t),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values,
              });
          } catch (Qt) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(Qt);
          }
        }
        registerEventListeners() {
          this.events.on(bn, (t) => {
            const e = bn;
            this.logger.info(`Emitting ${e}`),
              this.logger.debug({ type: "event", event: e, record: t }),
              this.persist();
          }),
            this.events.on(En, (t) => {
              const e = En;
              this.logger.info(`Emitting ${e}`),
                this.logger.debug({ type: "event", event: e, record: t }),
                this.persist();
            }),
            this.events.on(In, (t) => {
              const e = In;
              this.logger.info(`Emitting ${e}`),
                this.logger.debug({ type: "event", event: e, record: t }),
                this.persist();
            }),
            this.core.heartbeat.on(M.HEARTBEAT_EVENTS.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.records.forEach((t) => {
              (0, vt.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.delete(t.topic, t.id));
            });
          } catch (Qt) {
            this.logger.warn(Qt);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: t } = (0, s.Gu)("NOT_INITIALIZED", this.name);
            throw new Error(t);
          }
        }
      }
      class ui extends ut {
        constructor(t, e) {
          super(t, e),
            (this.core = t),
            (this.logger = e),
            (this.expirations = new Map()),
            (this.events = new n.EventEmitter()),
            (this.name = "expirer"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = Kr),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((t) => this.expirations.set(t.target, t)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.has = (t) => {
              try {
                const e = this.formatTarget(t);
                return typeof this.getExpiration(e) < "u";
              } catch {
                return !1;
              }
            }),
            (this.set = (t, e) => {
              this.isInitialized();
              const r = this.formatTarget(t),
                n = { target: r, expiry: e };
              this.expirations.set(r, n),
                this.checkExpiry(r, n),
                this.events.emit(Sn, { target: r, expiration: n });
            }),
            (this.get = (t) => {
              this.isInitialized();
              const e = this.formatTarget(t);
              return this.getExpiration(e);
            }),
            (this.del = (t) => {
              if ((this.isInitialized(), this.has(t))) {
                const e = this.formatTarget(t),
                  r = this.getExpiration(e);
                this.expirations.delete(e),
                  this.events.emit(On, { target: e, expiration: r });
              }
            }),
            (this.on = (t, e) => {
              this.events.on(t, e);
            }),
            (this.once = (t, e) => {
              this.events.once(t, e);
            }),
            (this.off = (t, e) => {
              this.events.off(t, e);
            }),
            (this.removeListener = (t, e) => {
              this.events.removeListener(t, e);
            }),
            (this.logger = tt(e, this.name));
        }
        get context() {
          return X(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(t) {
          if ("string" == typeof t) return (0, s.AD)(t);
          if ("number" == typeof t) return (0, s.gO)(t);
          const { message: e } = (0, s.Gu)(
            "UNKNOWN_TYPE",
            "Target type: " + typeof t
          );
          throw new Error(e);
        }
        async setExpirations(t) {
          await this.core.storage.setItem(this.storageKey, t);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(Rn);
        }
        async restore() {
          try {
            const t = await this.getExpirations();
            if (typeof t > "u" || !t.length) return;
            if (this.expirations.size) {
              const { message: t } = (0, s.Gu)(
                "RESTORE_WILL_OVERRIDE",
                this.name
              );
              throw (this.logger.error(t), new Error(t));
            }
            (this.cached = t),
              this.logger.debug(
                `Successfully Restored expirations for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values,
              });
          } catch (Qt) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(Qt);
          }
        }
        getExpiration(t) {
          const e = this.expirations.get(t);
          if (!e) {
            const { message: e } = (0, s.Gu)(
              "NO_MATCHING_KEY",
              `${this.name}: ${t}`
            );
            throw (this.logger.error(e), new Error(e));
          }
          return e;
        }
        checkExpiry(t, e) {
          const { expiry: r } = e;
          (0, vt.toMiliseconds)(r) - Date.now() <= 0 && this.expire(t, e);
        }
        expire(t, e) {
          this.expirations.delete(t),
            this.events.emit(xn, { target: t, expiration: e });
        }
        checkExpirations() {
          this.core.relayer.connected &&
            this.expirations.forEach((t, e) => this.checkExpiry(e, t));
        }
        registerEventListeners() {
          this.core.heartbeat.on(M.HEARTBEAT_EVENTS.pulse, () =>
            this.checkExpirations()
          ),
            this.events.on(Sn, (t) => {
              const e = Sn;
              this.logger.info(`Emitting ${e}`),
                this.logger.debug({ type: "event", event: e, data: t }),
                this.persist();
            }),
            this.events.on(xn, (t) => {
              const e = xn;
              this.logger.info(`Emitting ${e}`),
                this.logger.debug({ type: "event", event: e, data: t }),
                this.persist();
            }),
            this.events.on(On, (t) => {
              const e = On;
              this.logger.info(`Emitting ${e}`),
                this.logger.debug({ type: "event", event: e, data: t }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: t } = (0, s.Gu)("NOT_INITIALIZED", this.name);
            throw new Error(t);
          }
        }
      }
      class hi extends ht {
        constructor(t, e) {
          super(t, e),
            (this.projectId = t),
            (this.logger = e),
            (this.name = An),
            (this.initialized = !1),
            (this.queue = []),
            (this.verifyDisabled = !1),
            (this.init = async (t) => {
              if (this.verifyDisabled || (0, s.lV)() || !(0, s.Bd)()) return;
              const e = this.getVerifyUrl(
                null === t || void 0 === t ? void 0 : t.verifyUrl
              );
              this.verifyUrl !== e && this.removeIframe(), (this.verifyUrl = e);
              try {
                await this.createIframe();
              } catch (H) {
                this.logger.info(
                  `Verify iframe failed to load: ${this.verifyUrl}`
                ),
                  this.logger.info(H);
              }
              if (!this.initialized) {
                this.removeIframe(), (this.verifyUrl = jn);
                try {
                  await this.createIframe();
                } catch (H) {
                  this.logger.info(
                    `Verify iframe failed to load: ${this.verifyUrl}`
                  ),
                    this.logger.info(H),
                    (this.verifyDisabled = !0);
                }
              }
            }),
            (this.register = async (t) => {
              this.initialized
                ? this.sendPost(t.attestationId)
                : (this.addToQueue(t.attestationId), await this.init());
            }),
            (this.resolve = async (t) => {
              if (this.isDevEnv) return "";
              const e = this.getVerifyUrl(
                null === t || void 0 === t ? void 0 : t.verifyUrl
              );
              let r;
              try {
                r = await this.fetchAttestation(t.attestationId, e);
              } catch (n) {
                this.logger.info(
                  `failed to resolve attestation: ${t.attestationId} from url: ${e}`
                ),
                  this.logger.info(n),
                  (r = await this.fetchAttestation(t.attestationId, jn));
              }
              return r;
            }),
            (this.fetchAttestation = async (t, e) => {
              this.logger.info(`resolving attestation: ${t} from url: ${e}`);
              const r = this.startAbortTimer(2 * vt.ONE_SECOND),
                n = await fetch(`${e}/attestation/${t}`, {
                  signal: this.abortController.signal,
                });
              return (
                clearTimeout(r), 200 === n.status ? await n.json() : void 0
              );
            }),
            (this.addToQueue = (t) => {
              this.queue.push(t);
            }),
            (this.processQueue = () => {
              0 !== this.queue.length &&
                (this.queue.forEach((t) => this.sendPost(t)),
                (this.queue = []));
            }),
            (this.sendPost = (t) => {
              var e;
              try {
                if (!this.iframe) return;
                null == (e = this.iframe.contentWindow) ||
                  e.postMessage(t, "*"),
                  this.logger.info(`postMessage sent: ${t} ${this.verifyUrl}`);
              } catch {}
            }),
            (this.createIframe = async () => {
              let t;
              const e = (r) => {
                "verify_ready" === r.data &&
                  ((this.initialized = !0),
                  this.processQueue(),
                  window.removeEventListener("message", e),
                  t());
              };
              await Promise.race([
                new Promise((r) => {
                  if (document.getElementById(An)) return r();
                  window.addEventListener("message", e);
                  const n = document.createElement("iframe");
                  (n.id = An),
                    (n.src = `${this.verifyUrl}/${this.projectId}`),
                    (n.style.display = "none"),
                    document.body.append(n),
                    (this.iframe = n),
                    (t = r);
                }),
                new Promise((t, r) =>
                  setTimeout(() => {
                    window.removeEventListener("message", e),
                      r("verify iframe load timeout");
                  }, (0, vt.toMiliseconds)(vt.FIVE_SECONDS))
                ),
              ]);
            }),
            (this.removeIframe = () => {
              this.iframe &&
                (this.iframe.remove(),
                (this.iframe = void 0),
                (this.initialized = !1));
            }),
            (this.getVerifyUrl = (t) => {
              let e = t || Cn;
              return (
                Tn.includes(e) ||
                  (this.logger.info(
                    `verify url: ${e}, not included in trusted list, assigning default: ${Cn}`
                  ),
                  (e = Cn)),
                e
              );
            }),
            (this.logger = tt(e, this.name)),
            (this.verifyUrl = Cn),
            (this.abortController = new AbortController()),
            (this.isDevEnv =
              (0, s.Ll)() &&
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }.IS_VITEST);
        }
        get context() {
          return X(this.logger);
        }
        startAbortTimer(t) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(
              () => this.abortController.abort(),
              (0, vt.toMiliseconds)(t)
            )
          );
        }
      }
      class li extends lt {
        constructor(t, e) {
          super(t, e),
            (this.projectId = t),
            (this.logger = e),
            (this.context = "echo"),
            (this.registerDeviceToken = async (t) => {
              const {
                  clientId: e,
                  token: r,
                  notificationType: n,
                  enableEncrypted: i = !1,
                } = t,
                s = `https://echo.walletconnect.com/${this.projectId}/clients`;
              await fe()(s, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  client_id: e,
                  type: n,
                  token: r,
                  always_raw: i,
                }),
              });
            }),
            (this.logger = tt(e, this.context));
        }
      }
      var pi = Object.defineProperty,
        fi = Object.getOwnPropertySymbols,
        di = Object.prototype.hasOwnProperty,
        gi = Object.prototype.propertyIsEnumerable,
        vi = (t, e, r) =>
          e in t
            ? pi(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        yi = (t, e) => {
          for (var r in e || (e = {})) di.call(e, r) && vi(t, r, e[r]);
          if (fi) for (var r of fi(e)) gi.call(e, r) && vi(t, r, e[r]);
          return t;
        };
      class mi extends rt {
        constructor(t) {
          super(t),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = Vr),
            (this.events = new n.EventEmitter()),
            (this.initialized = !1),
            (this.on = (t, e) => this.events.on(t, e)),
            (this.once = (t, e) => this.events.once(t, e)),
            (this.off = (t, e) => this.events.off(t, e)),
            (this.removeListener = (t, e) => this.events.removeListener(t, e)),
            (this.projectId =
              null === t || void 0 === t ? void 0 : t.projectId),
            (this.relayUrl =
              (null === t || void 0 === t ? void 0 : t.relayUrl) || Jr),
            (this.customStoragePrefix =
              null != t && t.customStoragePrefix
                ? `:${t.customStoragePrefix}`
                : "");
          const e =
            typeof (null === t || void 0 === t ? void 0 : t.logger) < "u" &&
            "string" != typeof (null === t || void 0 === t ? void 0 : t.logger)
              ? t.logger
              : $()(
                  Z({
                    level:
                      (null === t || void 0 === t ? void 0 : t.logger) || Gr,
                  })
                );
          (this.logger = tt(e, this.name)),
            (this.heartbeat = new M.HeartBeat()),
            (this.crypto = new Ln(
              this,
              this.logger,
              null === t || void 0 === t ? void 0 : t.keychain
            )),
            (this.history = new ci(this, this.logger)),
            (this.expirer = new ui(this, this.logger)),
            (this.storage =
              null != t && t.storage
                ? t.storage
                : new z(
                    yi(
                      yi({}, Br),
                      null === t || void 0 === t ? void 0 : t.storageOptions
                    )
                  )),
            (this.relayer = new Xn({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new ai(this, this.logger)),
            (this.verify = new hi(this.projectId || "", this.logger)),
            (this.echoClient = new li(this.projectId || "", this.logger));
        }
        static async init(t) {
          const e = new mi(t);
          await e.initialize();
          const r = await e.crypto.getClientId();
          return await e.storage.setItem("WALLETCONNECT_CLIENT_ID", r), e;
        }
        get context() {
          return X(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              (this.initialized = !0),
              this.logger.info("Core Initialization Success");
          } catch (Qt) {
            throw (
              (this.logger.warn(
                `Core Initialization Failure at epoch ${Date.now()}`,
                Qt
              ),
              this.logger.error(Qt.message),
              Qt)
            );
          }
        }
      }
      const wi = mi,
        _i = "client",
        bi = `wc@2:${_i}:`,
        Ei = _i,
        Ii = "error",
        Pi = "WALLETCONNECT_DEEPLINK_CHOICE",
        Si = "Proposal expired",
        Oi = vt.SEVEN_DAYS,
        xi = {
          wc_sessionPropose: {
            req: { ttl: vt.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: vt.FIVE_MINUTES, prompt: !1, tag: 1101 },
          },
          wc_sessionSettle: {
            req: { ttl: vt.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: vt.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: vt.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: vt.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: vt.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: vt.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: vt.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: vt.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: vt.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: vt.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: vt.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: vt.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: vt.THIRTY_SECONDS, prompt: !1, tag: 1114 },
            res: { ttl: vt.THIRTY_SECONDS, prompt: !1, tag: 1115 },
          },
        },
        Ri = { min: vt.FIVE_MINUTES, max: vt.SEVEN_DAYS },
        Ai = "IDLE",
        Ci = "ACTIVE",
        ji = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
      var Ti = Object.defineProperty,
        Ni = Object.defineProperties,
        Li = Object.getOwnPropertyDescriptors,
        qi = Object.getOwnPropertySymbols,
        Di = Object.prototype.hasOwnProperty,
        zi = Object.prototype.propertyIsEnumerable,
        Mi = (t, e, r) =>
          e in t
            ? Ti(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        ki = (t, e) => {
          for (var r in e || (e = {})) Di.call(e, r) && Mi(t, r, e[r]);
          if (qi) for (var r of qi(e)) zi.call(e, r) && Mi(t, r, e[r]);
          return t;
        },
        $i = (t, e) => Ni(t, Li(e));
      class Ui extends ft {
        constructor(t) {
          var e;
          super(t),
            (e = this),
            (this.name = "engine"),
            (this.events = new (i())()),
            (this.initialized = !1),
            (this.ignoredPayloadTypes = [s.Lp]),
            (this.requestQueue = { state: Ai, queue: [] }),
            (this.sessionRequestQueue = { state: Ai, queue: [] }),
            (this.requestQueueDelay = vt.ONE_SECOND),
            (this.init = async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                this.client.core.pairing.register({ methods: Object.keys(xi) }),
                (this.initialized = !0),
                setTimeout(() => {
                  (this.sessionRequestQueue.queue =
                    this.getPendingSessionRequests()),
                    this.processSessionRequestQueue();
                }, (0, vt.toMiliseconds)(this.requestQueueDelay)));
            }),
            (this.connect = async (t) => {
              await this.isInitialized();
              const e = $i(ki({}, t), {
                requiredNamespaces: t.requiredNamespaces || {},
                optionalNamespaces: t.optionalNamespaces || {},
              });
              await this.isValidConnect(e);
              const {
                pairingTopic: r,
                requiredNamespaces: n,
                optionalNamespaces: i,
                sessionProperties: o,
                relays: a,
              } = e;
              let c,
                u = r,
                h = !1;
              if (
                (u && (h = this.client.core.pairing.pairings.get(u).active),
                !u || !h)
              ) {
                const { topic: t, uri: e } =
                  await this.client.core.pairing.create();
                (u = t), (c = e);
              }
              const l = await this.client.core.crypto.generateKeyPair(),
                p = ki(
                  {
                    requiredNamespaces: n,
                    optionalNamespaces: i,
                    relays:
                      null !== a && void 0 !== a ? a : [{ protocol: "irn" }],
                    proposer: { publicKey: l, metadata: this.client.metadata },
                  },
                  o && { sessionProperties: o }
                ),
                {
                  reject: f,
                  resolve: d,
                  done: g,
                } = (0, s.Wx)(vt.FIVE_MINUTES, Si);
              if (
                (this.events.once((0, s.hE)("session_connect"), async (t) => {
                  let { error: e, session: r } = t;
                  if (e) f(e);
                  else if (r) {
                    r.self.publicKey = l;
                    const t = $i(ki({}, r), {
                      requiredNamespaces: r.requiredNamespaces,
                      optionalNamespaces: r.optionalNamespaces,
                    });
                    await this.client.session.set(r.topic, t),
                      await this.setExpiry(r.topic, r.expiry),
                      u &&
                        (await this.client.core.pairing.updateMetadata({
                          topic: u,
                          metadata: r.peer.metadata,
                        })),
                      d(t);
                  }
                }),
                !u)
              ) {
                const { message: t } = (0, s.Gu)(
                  "NO_MATCHING_KEY",
                  `connect() pairing topic: ${u}`
                );
                throw new Error(t);
              }
              const v = await this.sendRequest({
                  topic: u,
                  method: "wc_sessionPropose",
                  params: p,
                }),
                y = (0, s.Xw)(vt.FIVE_MINUTES);
              return (
                await this.setProposal(v, ki({ id: v, expiry: y }, p)),
                { uri: c, approval: g }
              );
            }),
            (this.pair = async (t) => (
              await this.isInitialized(), await this.client.core.pairing.pair(t)
            )),
            (this.approve = async (t) => {
              await this.isInitialized(), await this.isValidApprove(t);
              const {
                  id: e,
                  relayProtocol: r,
                  namespaces: n,
                  sessionProperties: i,
                } = t,
                o = this.client.proposal.get(e);
              let {
                pairingTopic: a,
                proposer: c,
                requiredNamespaces: u,
                optionalNamespaces: h,
              } = o;
              (a = a || ""), (0, s.aF)(u) || (u = (0, s.aZ)(n, "approve()"));
              const l = await this.client.core.crypto.generateKeyPair(),
                p = c.publicKey,
                f = await this.client.core.crypto.generateSharedKey(l, p);
              a &&
                e &&
                (await this.client.core.pairing.updateMetadata({
                  topic: a,
                  metadata: c.metadata,
                }),
                await this.sendResult({
                  id: e,
                  topic: a,
                  result: {
                    relay: { protocol: null !== r && void 0 !== r ? r : "irn" },
                    responderPublicKey: l,
                  },
                }),
                await this.client.proposal.delete(
                  e,
                  (0, s.Hj)("USER_DISCONNECTED")
                ),
                await this.client.core.pairing.activate({ topic: a }));
              const d = ki(
                {
                  relay: { protocol: null !== r && void 0 !== r ? r : "irn" },
                  namespaces: n,
                  requiredNamespaces: u,
                  optionalNamespaces: h,
                  pairingTopic: a,
                  controller: { publicKey: l, metadata: this.client.metadata },
                  expiry: (0, s.Xw)(Oi),
                },
                i && { sessionProperties: i }
              );
              await this.client.core.relayer.subscribe(f),
                await this.sendRequest({
                  topic: f,
                  method: "wc_sessionSettle",
                  params: d,
                  throwOnFailedPublish: !0,
                });
              const g = $i(ki({}, d), {
                topic: f,
                pairingTopic: a,
                acknowledged: !1,
                self: d.controller,
                peer: { publicKey: c.publicKey, metadata: c.metadata },
                controller: l,
              });
              return (
                await this.client.session.set(f, g),
                await this.setExpiry(f, (0, s.Xw)(Oi)),
                {
                  topic: f,
                  acknowledged: () =>
                    new Promise((t) =>
                      setTimeout(() => t(this.client.session.get(f)), 500)
                    ),
                }
              );
            }),
            (this.reject = async (t) => {
              await this.isInitialized(), await this.isValidReject(t);
              const { id: e, reason: r } = t,
                { pairingTopic: n } = this.client.proposal.get(e);
              n &&
                (await this.sendError(e, n, r),
                await this.client.proposal.delete(
                  e,
                  (0, s.Hj)("USER_DISCONNECTED")
                ));
            }),
            (this.update = async (t) => {
              await this.isInitialized(), await this.isValidUpdate(t);
              const { topic: e, namespaces: r } = t,
                n = await this.sendRequest({
                  topic: e,
                  method: "wc_sessionUpdate",
                  params: { namespaces: r },
                }),
                { done: i, resolve: o, reject: a } = (0, s.Wx)();
              return (
                this.events.once((0, s.hE)("session_update", n), (t) => {
                  let { error: e } = t;
                  e ? a(e) : o();
                }),
                await this.client.session.update(e, { namespaces: r }),
                { acknowledged: i }
              );
            }),
            (this.extend = async (t) => {
              await this.isInitialized(), await this.isValidExtend(t);
              const { topic: e } = t,
                r = await this.sendRequest({
                  topic: e,
                  method: "wc_sessionExtend",
                  params: {},
                }),
                { done: n, resolve: i, reject: o } = (0, s.Wx)();
              return (
                this.events.once((0, s.hE)("session_extend", r), (t) => {
                  let { error: e } = t;
                  e ? o(e) : i();
                }),
                await this.setExpiry(e, (0, s.Xw)(Oi)),
                { acknowledged: n }
              );
            }),
            (this.request = async (t) => {
              await this.isInitialized(), await this.isValidRequest(t);
              const { chainId: e, request: r, topic: n, expiry: i } = t,
                o = Vt(),
                {
                  done: a,
                  resolve: c,
                  reject: u,
                } = (0, s.Wx)(i, "Request expired. Please try again.");
              return (
                this.events.once((0, s.hE)("session_request", o), (t) => {
                  let { error: e, result: r } = t;
                  e ? u(e) : c(r);
                }),
                await Promise.all([
                  new Promise(async (t) => {
                    await this.sendRequest({
                      clientRpcId: o,
                      topic: n,
                      method: "wc_sessionRequest",
                      params: { request: r, chainId: e },
                      expiry: i,
                      throwOnFailedPublish: !0,
                    }).catch((t) => u(t)),
                      this.client.events.emit("session_request_sent", {
                        topic: n,
                        request: r,
                        chainId: e,
                        id: o,
                      }),
                      t();
                  }),
                  new Promise(async (t) => {
                    const e = await (0, s.jT)(this.client.core.storage, Pi);
                    (0, s.n3)({ id: o, topic: n, wcDeepLink: e }), t();
                  }),
                  a(),
                ]).then((t) => t[2])
              );
            }),
            (this.respond = async (t) => {
              await this.isInitialized(), await this.isValidRespond(t);
              const { topic: e, response: r } = t,
                { id: n } = r;
              ie(r)
                ? await this.sendResult({
                    id: n,
                    topic: e,
                    result: r.result,
                    throwOnFailedPublish: !0,
                  })
                : se(r) && (await this.sendError(n, e, r.error)),
                this.cleanupAfterResponse(t);
            }),
            (this.ping = async (t) => {
              await this.isInitialized(), await this.isValidPing(t);
              const { topic: e } = t;
              if (this.client.session.keys.includes(e)) {
                const t = await this.sendRequest({
                    topic: e,
                    method: "wc_sessionPing",
                    params: {},
                  }),
                  { done: r, resolve: n, reject: i } = (0, s.Wx)();
                this.events.once((0, s.hE)("session_ping", t), (t) => {
                  let { error: e } = t;
                  e ? i(e) : n();
                }),
                  await r();
              } else
                this.client.core.pairing.pairings.keys.includes(e) &&
                  (await this.client.core.pairing.ping({ topic: e }));
            }),
            (this.emit = async (t) => {
              await this.isInitialized(), await this.isValidEmit(t);
              const { topic: e, event: r, chainId: n } = t;
              await this.sendRequest({
                topic: e,
                method: "wc_sessionEvent",
                params: { event: r, chainId: n },
              });
            }),
            (this.disconnect = async (t) => {
              await this.isInitialized(), await this.isValidDisconnect(t);
              const { topic: e } = t;
              this.client.session.keys.includes(e)
                ? (await this.sendRequest({
                    topic: e,
                    method: "wc_sessionDelete",
                    params: (0, s.Hj)("USER_DISCONNECTED"),
                    throwOnFailedPublish: !0,
                  }),
                  await this.deleteSession(e))
                : await this.client.core.pairing.disconnect({ topic: e });
            }),
            (this.find = (t) => (
              this.isInitialized(),
              this.client.session.getAll().filter((e) => (0, s.HN)(e, t))
            )),
            (this.getPendingSessionRequests = () => (
              this.isInitialized(), this.client.pendingRequest.getAll()
            )),
            (this.cleanupDuplicatePairings = async (t) => {
              if (t.pairingTopic)
                try {
                  const e = this.client.core.pairing.pairings.get(
                      t.pairingTopic
                    ),
                    r = this.client.core.pairing.pairings
                      .getAll()
                      .filter((r) => {
                        var n, i;
                        return (
                          (null == (n = r.peerMetadata) ? void 0 : n.url) &&
                          (null == (i = r.peerMetadata) ? void 0 : i.url) ===
                            t.peer.metadata.url &&
                          r.topic &&
                          r.topic !== e.topic
                        );
                      });
                  if (0 === r.length) return;
                  this.client.logger.info(
                    `Cleaning up ${r.length} duplicate pairing(s)`
                  ),
                    await Promise.all(
                      r.map((t) =>
                        this.client.core.pairing.disconnect({ topic: t.topic })
                      )
                    ),
                    this.client.logger.info(
                      "Duplicate pairings clean up finished"
                    );
                } catch (e) {
                  this.client.logger.error(e);
                }
            }),
            (this.deleteSession = async (t, e) => {
              const { self: r } = this.client.session.get(t);
              await this.client.core.relayer.unsubscribe(t),
                this.client.session.delete(t, (0, s.Hj)("USER_DISCONNECTED")),
                this.client.core.crypto.keychain.has(r.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(r.publicKey)),
                this.client.core.crypto.keychain.has(t) &&
                  (await this.client.core.crypto.deleteSymKey(t)),
                e || this.client.core.expirer.del(t),
                this.client.core.storage
                  .removeItem(Pi)
                  .catch((t) => this.client.logger.warn(t)),
                this.getPendingSessionRequests().forEach((e) => {
                  e.topic === t &&
                    this.deletePendingSessionRequest(
                      e.id,
                      (0, s.Hj)("USER_DISCONNECTED")
                    );
                });
            }),
            (this.deleteProposal = async (t, e) => {
              await Promise.all([
                this.client.proposal.delete(t, (0, s.Hj)("USER_DISCONNECTED")),
                e ? Promise.resolve() : this.client.core.expirer.del(t),
              ]);
            }),
            (this.deletePendingSessionRequest = async function (t, r) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              await Promise.all([
                e.client.pendingRequest.delete(t, r),
                n ? Promise.resolve() : e.client.core.expirer.del(t),
              ]),
                (e.sessionRequestQueue.queue =
                  e.sessionRequestQueue.queue.filter((e) => e.id !== t)),
                n && (e.sessionRequestQueue.state = Ai);
            }),
            (this.setExpiry = async (t, e) => {
              this.client.session.keys.includes(t) &&
                (await this.client.session.update(t, { expiry: e })),
                this.client.core.expirer.set(t, e);
            }),
            (this.setProposal = async (t, e) => {
              await this.client.proposal.set(t, e),
                this.client.core.expirer.set(t, e.expiry);
            }),
            (this.setPendingSessionRequest = async (t) => {
              const e = xi.wc_sessionRequest.req.ttl,
                { id: r, topic: n, params: i, verifyContext: o } = t;
              await this.client.pendingRequest.set(r, {
                id: r,
                topic: n,
                params: i,
                verifyContext: o,
              }),
                e && this.client.core.expirer.set(r, (0, s.Xw)(e));
            }),
            (this.sendRequest = async (t) => {
              const {
                  topic: e,
                  method: r,
                  params: n,
                  expiry: i,
                  relayRpcId: o,
                  clientRpcId: a,
                  throwOnFailedPublish: c,
                } = t,
                u = Gt(r, n, a);
              if ((0, s.Bd)() && ji.includes(r)) {
                const t = (0, s.AL)(JSON.stringify(u));
                this.client.core.verify.register({ attestationId: t });
              }
              const h = await this.client.core.crypto.encode(e, u),
                l = xi[r].req;
              return (
                i && (l.ttl = i),
                o && (l.id = o),
                this.client.core.history.set(e, u),
                c
                  ? ((l.internal = $i(ki({}, l.internal), {
                      throwOnFailedPublish: !0,
                    })),
                    await this.client.core.relayer.publish(e, h, l))
                  : this.client.core.relayer
                      .publish(e, h, l)
                      .catch((t) => this.client.logger.error(t)),
                u.id
              );
            }),
            (this.sendResult = async (t) => {
              const { id: e, topic: r, result: n, throwOnFailedPublish: i } = t,
                s = Bt(e, n),
                o = await this.client.core.crypto.encode(r, s),
                a = await this.client.core.history.get(r, e),
                c = xi[a.request.method].res;
              i
                ? ((c.internal = $i(ki({}, c.internal), {
                    throwOnFailedPublish: !0,
                  })),
                  await this.client.core.relayer.publish(r, o, c))
                : this.client.core.relayer
                    .publish(r, o, c)
                    .catch((t) => this.client.logger.error(t)),
                await this.client.core.history.resolve(s);
            }),
            (this.sendError = async (t, e, r) => {
              const n = Ft(t, r),
                i = await this.client.core.crypto.encode(e, n),
                s = await this.client.core.history.get(e, t),
                o = xi[s.request.method].res;
              this.client.core.relayer.publish(e, i, o),
                await this.client.core.history.resolve(n);
            }),
            (this.cleanup = async () => {
              const t = [],
                e = [];
              this.client.session.getAll().forEach((e) => {
                (0, s._d)(e.expiry) && t.push(e.topic);
              }),
                this.client.proposal.getAll().forEach((t) => {
                  (0, s._d)(t.expiry) && e.push(t.id);
                }),
                await Promise.all([
                  ...t.map((t) => this.deleteSession(t)),
                  ...e.map((t) => this.deleteProposal(t)),
                ]);
            }),
            (this.onRelayEventRequest = async (t) => {
              this.requestQueue.queue.push(t),
                await this.processRequestsQueue();
            }),
            (this.processRequestsQueue = async () => {
              if (this.requestQueue.state !== Ci) {
                for (
                  this.client.logger.info(
                    `Request queue starting with ${this.requestQueue.queue.length} requests`
                  );
                  this.requestQueue.queue.length > 0;

                ) {
                  this.requestQueue.state = Ci;
                  const e = this.requestQueue.queue.shift();
                  if (e)
                    try {
                      this.processRequest(e),
                        await new Promise((t) => setTimeout(t, 300));
                    } catch (t) {
                      this.client.logger.warn(t);
                    }
                }
                this.requestQueue.state = Ai;
              } else
                this.client.logger.info(
                  "Request queue already active, skipping..."
                );
            }),
            (this.processRequest = (t) => {
              const { topic: e, payload: r } = t,
                n = r.method;
              switch (n) {
                case "wc_sessionPropose":
                  return this.onSessionProposeRequest(e, r);
                case "wc_sessionSettle":
                  return this.onSessionSettleRequest(e, r);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateRequest(e, r);
                case "wc_sessionExtend":
                  return this.onSessionExtendRequest(e, r);
                case "wc_sessionPing":
                  return this.onSessionPingRequest(e, r);
                case "wc_sessionDelete":
                  return this.onSessionDeleteRequest(e, r);
                case "wc_sessionRequest":
                  return this.onSessionRequest(e, r);
                case "wc_sessionEvent":
                  return this.onSessionEventRequest(e, r);
                default:
                  return this.client.logger.info(
                    `Unsupported request method ${n}`
                  );
              }
            }),
            (this.onRelayEventResponse = async (t) => {
              const { topic: e, payload: r } = t,
                n = (await this.client.core.history.get(e, r.id)).request
                  .method;
              switch (n) {
                case "wc_sessionPropose":
                  return this.onSessionProposeResponse(e, r);
                case "wc_sessionSettle":
                  return this.onSessionSettleResponse(e, r);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateResponse(e, r);
                case "wc_sessionExtend":
                  return this.onSessionExtendResponse(e, r);
                case "wc_sessionPing":
                  return this.onSessionPingResponse(e, r);
                case "wc_sessionRequest":
                  return this.onSessionRequestResponse(e, r);
                default:
                  return this.client.logger.info(
                    `Unsupported response method ${n}`
                  );
              }
            }),
            (this.onRelayEventUnknownPayload = (t) => {
              const { topic: e } = t,
                { message: r } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `Decoded payload on topic ${e} is not identifiable as a JSON-RPC request or a response.`
                );
              throw new Error(r);
            }),
            (this.onSessionProposeRequest = async (t, e) => {
              const { params: r, id: n } = e;
              try {
                this.isValidConnect(ki({}, e.params));
                const i = (0, s.Xw)(vt.FIVE_MINUTES),
                  o = ki({ id: n, pairingTopic: t, expiry: i }, r);
                await this.setProposal(n, o);
                const a = (0, s.AL)(JSON.stringify(e)),
                  c = await this.getVerifyContext(a, o.proposer.metadata);
                this.client.events.emit("session_proposal", {
                  id: n,
                  params: o,
                  verifyContext: c,
                });
              } catch (H) {
                await this.sendError(n, t, H), this.client.logger.error(H);
              }
            }),
            (this.onSessionProposeResponse = async (t, e) => {
              const { id: r } = e;
              if (ie(e)) {
                const { result: n } = e;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  result: n,
                });
                const i = this.client.proposal.get(r);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  proposal: i,
                });
                const s = i.proposer.publicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  selfPublicKey: s,
                });
                const o = n.responderPublicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  peerPublicKey: o,
                });
                const a = await this.client.core.crypto.generateSharedKey(s, o);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  sessionTopic: a,
                });
                const c = await this.client.core.relayer.subscribe(a);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  subscriptionId: c,
                }),
                  await this.client.core.pairing.activate({ topic: t });
              } else
                se(e) &&
                  (await this.client.proposal.delete(
                    r,
                    (0, s.Hj)("USER_DISCONNECTED")
                  ),
                  this.events.emit((0, s.hE)("session_connect"), {
                    error: e.error,
                  }));
            }),
            (this.onSessionSettleRequest = async (t, e) => {
              const { id: r, params: n } = e;
              try {
                this.isValidSessionSettleRequest(n);
                const {
                    relay: r,
                    controller: i,
                    expiry: o,
                    namespaces: a,
                    requiredNamespaces: c,
                    optionalNamespaces: u,
                    sessionProperties: h,
                    pairingTopic: l,
                  } = e.params,
                  p = ki(
                    {
                      topic: t,
                      relay: r,
                      expiry: o,
                      namespaces: a,
                      acknowledged: !0,
                      pairingTopic: l,
                      requiredNamespaces: c,
                      optionalNamespaces: u,
                      controller: i.publicKey,
                      self: { publicKey: "", metadata: this.client.metadata },
                      peer: { publicKey: i.publicKey, metadata: i.metadata },
                    },
                    h && { sessionProperties: h }
                  );
                await this.sendResult({ id: e.id, topic: t, result: !0 }),
                  this.events.emit((0, s.hE)("session_connect"), {
                    session: p,
                  }),
                  this.cleanupDuplicatePairings(p);
              } catch (H) {
                await this.sendError(r, t, H), this.client.logger.error(H);
              }
            }),
            (this.onSessionSettleResponse = async (t, e) => {
              const { id: r } = e;
              ie(e)
                ? (await this.client.session.update(t, { acknowledged: !0 }),
                  this.events.emit((0, s.hE)("session_approve", r), {}))
                : se(e) &&
                  (await this.client.session.delete(
                    t,
                    (0, s.Hj)("USER_DISCONNECTED")
                  ),
                  this.events.emit((0, s.hE)("session_approve", r), {
                    error: e.error,
                  }));
            }),
            (this.onSessionUpdateRequest = async (t, e) => {
              const { params: r, id: n } = e;
              try {
                const e = `${t}_session_update`,
                  i = s.ny.get(e);
                if (i && this.isRequestOutOfSync(i, n))
                  return void this.client.logger.info(
                    `Discarding out of sync request - ${n}`
                  );
                this.isValidUpdate(ki({ topic: t }, r)),
                  await this.client.session.update(t, {
                    namespaces: r.namespaces,
                  }),
                  await this.sendResult({ id: n, topic: t, result: !0 }),
                  this.client.events.emit("session_update", {
                    id: n,
                    topic: t,
                    params: r,
                  }),
                  s.ny.set(e, n);
              } catch (H) {
                await this.sendError(n, t, H), this.client.logger.error(H);
              }
            }),
            (this.isRequestOutOfSync = (t, e) =>
              parseInt(e.toString().slice(0, -3)) <=
              parseInt(t.toString().slice(0, -3))),
            (this.onSessionUpdateResponse = (t, e) => {
              const { id: r } = e;
              ie(e)
                ? this.events.emit((0, s.hE)("session_update", r), {})
                : se(e) &&
                  this.events.emit((0, s.hE)("session_update", r), {
                    error: e.error,
                  });
            }),
            (this.onSessionExtendRequest = async (t, e) => {
              const { id: r } = e;
              try {
                this.isValidExtend({ topic: t }),
                  await this.setExpiry(t, (0, s.Xw)(Oi)),
                  await this.sendResult({ id: r, topic: t, result: !0 }),
                  this.client.events.emit("session_extend", {
                    id: r,
                    topic: t,
                  });
              } catch (J) {
                await this.sendError(r, t, J), this.client.logger.error(J);
              }
            }),
            (this.onSessionExtendResponse = (t, e) => {
              const { id: r } = e;
              ie(e)
                ? this.events.emit((0, s.hE)("session_extend", r), {})
                : se(e) &&
                  this.events.emit((0, s.hE)("session_extend", r), {
                    error: e.error,
                  });
            }),
            (this.onSessionPingRequest = async (t, e) => {
              const { id: r } = e;
              try {
                this.isValidPing({ topic: t }),
                  await this.sendResult({ id: r, topic: t, result: !0 }),
                  this.client.events.emit("session_ping", { id: r, topic: t });
              } catch (J) {
                await this.sendError(r, t, J), this.client.logger.error(J);
              }
            }),
            (this.onSessionPingResponse = (t, e) => {
              const { id: r } = e;
              setTimeout(() => {
                ie(e)
                  ? this.events.emit((0, s.hE)("session_ping", r), {})
                  : se(e) &&
                    this.events.emit((0, s.hE)("session_ping", r), {
                      error: e.error,
                    });
              }, 500);
            }),
            (this.onSessionDeleteRequest = async (t, e) => {
              const { id: r } = e;
              try {
                this.isValidDisconnect({ topic: t, reason: e.params }),
                  await Promise.all([
                    new Promise((e) => {
                      this.client.core.relayer.once(sn, async () => {
                        e(await this.deleteSession(t));
                      });
                    }),
                    this.sendResult({ id: r, topic: t, result: !0 }),
                  ]),
                  this.client.events.emit("session_delete", {
                    id: r,
                    topic: t,
                  });
              } catch (J) {
                this.client.logger.error(J);
              }
            }),
            (this.onSessionRequest = async (t, e) => {
              const { id: r, params: n } = e;
              try {
                this.isValidRequest(ki({ topic: t }, n));
                const e = (0, s.AL)(
                    JSON.stringify(Gt("wc_sessionRequest", n, r))
                  ),
                  i = this.client.session.get(t),
                  o = {
                    id: r,
                    topic: t,
                    params: n,
                    verifyContext: await this.getVerifyContext(
                      e,
                      i.peer.metadata
                    ),
                  };
                await this.setPendingSessionRequest(o),
                  this.addSessionRequestToSessionRequestQueue(o),
                  this.processSessionRequestQueue();
              } catch (H) {
                await this.sendError(r, t, H), this.client.logger.error(H);
              }
            }),
            (this.onSessionRequestResponse = (t, e) => {
              const { id: r } = e;
              ie(e)
                ? this.events.emit((0, s.hE)("session_request", r), {
                    result: e.result,
                  })
                : se(e) &&
                  this.events.emit((0, s.hE)("session_request", r), {
                    error: e.error,
                  });
            }),
            (this.onSessionEventRequest = async (t, e) => {
              const { id: r, params: n } = e;
              try {
                const e = `${t}_session_event_${n.event.name}`,
                  i = s.ny.get(e);
                if (i && this.isRequestOutOfSync(i, r))
                  return void this.client.logger.info(
                    `Discarding out of sync request - ${r}`
                  );
                this.isValidEmit(ki({ topic: t }, n)),
                  this.client.events.emit("session_event", {
                    id: r,
                    topic: t,
                    params: n,
                  }),
                  s.ny.set(e, r);
              } catch (H) {
                await this.sendError(r, t, H), this.client.logger.error(H);
              }
            }),
            (this.addSessionRequestToSessionRequestQueue = (t) => {
              this.sessionRequestQueue.queue.push(t);
            }),
            (this.cleanupAfterResponse = (t) => {
              this.deletePendingSessionRequest(t.response.id, {
                message: "fulfilled",
                code: 0,
              }),
                setTimeout(() => {
                  (this.sessionRequestQueue.state = Ai),
                    this.processSessionRequestQueue();
                }, (0, vt.toMiliseconds)(this.requestQueueDelay));
            }),
            (this.processSessionRequestQueue = () => {
              if (this.sessionRequestQueue.state === Ci)
                return void this.client.logger.info(
                  "session request queue is already active."
                );
              const t = this.sessionRequestQueue.queue[0];
              if (t)
                try {
                  (this.sessionRequestQueue.state = Ci),
                    this.client.events.emit("session_request", t);
                } catch (e) {
                  this.client.logger.error(e);
                }
              else this.client.logger.info("session request queue is empty.");
            }),
            (this.onPairingCreated = (t) => {
              if (t.active) return;
              const e = this.client.proposal
                .getAll()
                .find((e) => e.pairingTopic === t.topic);
              e &&
                this.onSessionProposeRequest(
                  t.topic,
                  Gt(
                    "wc_sessionPropose",
                    {
                      requiredNamespaces: e.requiredNamespaces,
                      optionalNamespaces: e.optionalNamespaces,
                      relays: e.relays,
                      proposer: e.proposer,
                      sessionProperties: e.sessionProperties,
                    },
                    e.id
                  )
                );
            }),
            (this.isValidConnect = async (t) => {
              if (!(0, s.Te)(t)) {
                const { message: e } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `connect() params: ${JSON.stringify(t)}`
                );
                throw new Error(e);
              }
              const {
                pairingTopic: e,
                requiredNamespaces: r,
                optionalNamespaces: n,
                sessionProperties: i,
                relays: o,
              } = t;
              if (
                ((0, s.b0)(e) || (await this.isValidPairingTopic(e)),
                !(0, s.V9)(o, !0))
              ) {
                const { message: t } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `connect() relays: ${o}`
                );
                throw new Error(t);
              }
              !(0, s.b0)(r) &&
                0 !== (0, s.aF)(r) &&
                this.validateNamespaces(r, "requiredNamespaces"),
                !(0, s.b0)(n) &&
                  0 !== (0, s.aF)(n) &&
                  this.validateNamespaces(n, "optionalNamespaces"),
                (0, s.b0)(i) ||
                  this.validateSessionProps(i, "sessionProperties");
            }),
            (this.validateNamespaces = (t, e) => {
              const r = (0, s.es)(t, "connect()", e);
              if (r) throw new Error(r.message);
            }),
            (this.isValidApprove = async (t) => {
              if (!(0, s.Te)(t))
                throw new Error(
                  (0, s.Gu)(
                    "MISSING_OR_INVALID",
                    `approve() params: ${t}`
                  ).message
                );
              const {
                id: e,
                namespaces: r,
                relayProtocol: n,
                sessionProperties: i,
              } = t;
              await this.isValidProposalId(e);
              const o = this.client.proposal.get(e),
                a = (0, s.Fi)(r, "approve()");
              if (a) throw new Error(a.message);
              const c = (0, s.Xq)(o.requiredNamespaces, r, "approve()");
              if (c) throw new Error(c.message);
              if (!(0, s.Qh)(n, !0)) {
                const { message: t } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `approve() relayProtocol: ${n}`
                );
                throw new Error(t);
              }
              (0, s.b0)(i) || this.validateSessionProps(i, "sessionProperties");
            }),
            (this.isValidReject = async (t) => {
              if (!(0, s.Te)(t)) {
                const { message: e } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `reject() params: ${t}`
                );
                throw new Error(e);
              }
              const { id: e, reason: r } = t;
              if ((await this.isValidProposalId(e), !(0, s.X3)(r))) {
                const { message: t } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `reject() reason: ${JSON.stringify(r)}`
                );
                throw new Error(t);
              }
            }),
            (this.isValidSessionSettleRequest = (t) => {
              if (!(0, s.Te)(t)) {
                const { message: e } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `onSessionSettleRequest() params: ${t}`
                );
                throw new Error(e);
              }
              const { relay: e, controller: r, namespaces: n, expiry: i } = t;
              if (!(0, s.ku)(e)) {
                const { message: t } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() relay protocol should be a string"
                );
                throw new Error(t);
              }
              const o = (0, s.tk)(r, "onSessionSettleRequest()");
              if (o) throw new Error(o.message);
              const a = (0, s.Fi)(n, "onSessionSettleRequest()");
              if (a) throw new Error(a.message);
              if ((0, s._d)(i)) {
                const { message: t } = (0, s.Gu)(
                  "EXPIRED",
                  "onSessionSettleRequest()"
                );
                throw new Error(t);
              }
            }),
            (this.isValidUpdate = async (t) => {
              if (!(0, s.Te)(t)) {
                const { message: e } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `update() params: ${t}`
                );
                throw new Error(e);
              }
              const { topic: e, namespaces: r } = t;
              await this.isValidSessionTopic(e);
              const n = this.client.session.get(e),
                i = (0, s.Fi)(r, "update()");
              if (i) throw new Error(i.message);
              const o = (0, s.Xq)(n.requiredNamespaces, r, "update()");
              if (o) throw new Error(o.message);
            }),
            (this.isValidExtend = async (t) => {
              if (!(0, s.Te)(t)) {
                const { message: e } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `extend() params: ${t}`
                );
                throw new Error(e);
              }
              const { topic: e } = t;
              await this.isValidSessionTopic(e);
            }),
            (this.isValidRequest = async (t) => {
              if (!(0, s.Te)(t)) {
                const { message: e } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `request() params: ${t}`
                );
                throw new Error(e);
              }
              const { topic: e, request: r, chainId: n, expiry: i } = t;
              await this.isValidSessionTopic(e);
              const { namespaces: o } = this.client.session.get(e);
              if (!(0, s.tL)(o, n)) {
                const { message: t } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `request() chainId: ${n}`
                );
                throw new Error(t);
              }
              if (!(0, s.iV)(r)) {
                const { message: t } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `request() ${JSON.stringify(r)}`
                );
                throw new Error(t);
              }
              if (!(0, s.oK)(o, n, r.method)) {
                const { message: t } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `request() method: ${r.method}`
                );
                throw new Error(t);
              }
              if (i && !(0, s.Hb)(i, Ri)) {
                const { message: t } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `request() expiry: ${i}. Expiry must be a number (in seconds) between ${Ri.min} and ${Ri.max}`
                );
                throw new Error(t);
              }
            }),
            (this.isValidRespond = async (t) => {
              var e;
              if (!(0, s.Te)(t)) {
                const { message: e } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `respond() params: ${t}`
                );
                throw new Error(e);
              }
              const { topic: r, response: n } = t;
              try {
                await this.isValidSessionTopic(r);
              } catch (H) {
                throw (
                  (null !=
                    (e = null === t || void 0 === t ? void 0 : t.response) &&
                    e.id &&
                    this.cleanupAfterResponse(t),
                  H)
                );
              }
              if (!(0, s.M8)(n)) {
                const { message: t } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `respond() response: ${JSON.stringify(n)}`
                );
                throw new Error(t);
              }
            }),
            (this.isValidPing = async (t) => {
              if (!(0, s.Te)(t)) {
                const { message: e } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `ping() params: ${t}`
                );
                throw new Error(e);
              }
              const { topic: e } = t;
              await this.isValidSessionOrPairingTopic(e);
            }),
            (this.isValidEmit = async (t) => {
              if (!(0, s.Te)(t)) {
                const { message: e } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `emit() params: ${t}`
                );
                throw new Error(e);
              }
              const { topic: e, event: r, chainId: n } = t;
              await this.isValidSessionTopic(e);
              const { namespaces: i } = this.client.session.get(e);
              if (!(0, s.tL)(i, n)) {
                const { message: t } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `emit() chainId: ${n}`
                );
                throw new Error(t);
              }
              if (!(0, s.FR)(r)) {
                const { message: t } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(r)}`
                );
                throw new Error(t);
              }
              if (!(0, s.z2)(i, n, r.name)) {
                const { message: t } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(r)}`
                );
                throw new Error(t);
              }
            }),
            (this.isValidDisconnect = async (t) => {
              if (!(0, s.Te)(t)) {
                const { message: e } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${t}`
                );
                throw new Error(e);
              }
              const { topic: e } = t;
              await this.isValidSessionOrPairingTopic(e);
            }),
            (this.getVerifyContext = async (t, e) => {
              const r = {
                verified: {
                  verifyUrl: e.verifyUrl || Cn,
                  validation: "UNKNOWN",
                  origin: e.url || "",
                },
              };
              try {
                const n = await this.client.core.verify.resolve({
                  attestationId: t,
                  verifyUrl: e.verifyUrl,
                });
                n &&
                  ((r.verified.origin = n.origin),
                  (r.verified.isScam = n.isScam),
                  (r.verified.validation =
                    n.origin === new URL(e.url).origin ? "VALID" : "INVALID"));
              } catch (J) {
                this.client.logger.info(J);
              }
              return (
                this.client.logger.info(`Verify context: ${JSON.stringify(r)}`),
                r
              );
            }),
            (this.validateSessionProps = (t, e) => {
              Object.values(t).forEach((t) => {
                if (!(0, s.Qh)(t, !1)) {
                  const { message: r } = (0, s.Gu)(
                    "MISSING_OR_INVALID",
                    `${e} must be in Record<string, string> format. Received: ${JSON.stringify(
                      t
                    )}`
                  );
                  throw new Error(r);
                }
              });
            });
        }
        async isInitialized() {
          if (!this.initialized) {
            const { message: t } = (0, s.Gu)("NOT_INITIALIZED", this.name);
            throw new Error(t);
          }
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(Zr, async (t) => {
            const { topic: e, message: r } = t;
            if (
              this.ignoredPayloadTypes.includes(
                this.client.core.crypto.getPayloadType(r)
              )
            )
              return;
            const n = await this.client.core.crypto.decode(e, r);
            try {
              re(n)
                ? (this.client.core.history.set(e, n),
                  this.onRelayEventRequest({ topic: e, payload: n }))
                : ne(n)
                ? (await this.client.core.history.resolve(n),
                  await this.onRelayEventResponse({ topic: e, payload: n }),
                  this.client.core.history.delete(e, n.id))
                : this.onRelayEventUnknownPayload({ topic: e, payload: n });
            } catch (J) {
              this.client.logger.error(J);
            }
          });
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(xn, async (t) => {
            const { topic: e, id: r } = (0, s.c8)(t.target);
            if (r && this.client.pendingRequest.keys.includes(r))
              return await this.deletePendingSessionRequest(
                r,
                (0, s.Gu)("EXPIRED"),
                !0
              );
            e
              ? this.client.session.keys.includes(e) &&
                (await this.deleteSession(e, !0),
                this.client.events.emit("session_expire", { topic: e }))
              : r &&
                (await this.deleteProposal(r, !0),
                this.client.events.emit("proposal_expire", { id: r }));
          });
        }
        registerPairingEvents() {
          this.client.core.pairing.events.on(yn, (t) =>
            this.onPairingCreated(t)
          );
        }
        isValidPairingTopic(t) {
          if (!(0, s.Qh)(t, !1)) {
            const { message: e } = (0, s.Gu)(
              "MISSING_OR_INVALID",
              `pairing topic should be a string: ${t}`
            );
            throw new Error(e);
          }
          if (!this.client.core.pairing.pairings.keys.includes(t)) {
            const { message: e } = (0, s.Gu)(
              "NO_MATCHING_KEY",
              `pairing topic doesn't exist: ${t}`
            );
            throw new Error(e);
          }
          if ((0, s._d)(this.client.core.pairing.pairings.get(t).expiry)) {
            const { message: e } = (0, s.Gu)("EXPIRED", `pairing topic: ${t}`);
            throw new Error(e);
          }
        }
        async isValidSessionTopic(t) {
          if (!(0, s.Qh)(t, !1)) {
            const { message: e } = (0, s.Gu)(
              "MISSING_OR_INVALID",
              `session topic should be a string: ${t}`
            );
            throw new Error(e);
          }
          if (!this.client.session.keys.includes(t)) {
            const { message: e } = (0, s.Gu)(
              "NO_MATCHING_KEY",
              `session topic doesn't exist: ${t}`
            );
            throw new Error(e);
          }
          if ((0, s._d)(this.client.session.get(t).expiry)) {
            await this.deleteSession(t);
            const { message: e } = (0, s.Gu)("EXPIRED", `session topic: ${t}`);
            throw new Error(e);
          }
        }
        async isValidSessionOrPairingTopic(t) {
          if (this.client.session.keys.includes(t))
            await this.isValidSessionTopic(t);
          else {
            if (!this.client.core.pairing.pairings.keys.includes(t)) {
              if ((0, s.Qh)(t, !1)) {
                const { message: e } = (0, s.Gu)(
                  "NO_MATCHING_KEY",
                  `session or pairing topic doesn't exist: ${t}`
                );
                throw new Error(e);
              }
              {
                const { message: e } = (0, s.Gu)(
                  "MISSING_OR_INVALID",
                  `session or pairing topic should be a string: ${t}`
                );
                throw new Error(e);
              }
            }
            this.isValidPairingTopic(t);
          }
        }
        async isValidProposalId(t) {
          if (!(0, s.Al)(t)) {
            const { message: e } = (0, s.Gu)(
              "MISSING_OR_INVALID",
              `proposal id should be a number: ${t}`
            );
            throw new Error(e);
          }
          if (!this.client.proposal.keys.includes(t)) {
            const { message: e } = (0, s.Gu)(
              "NO_MATCHING_KEY",
              `proposal id doesn't exist: ${t}`
            );
            throw new Error(e);
          }
          if ((0, s._d)(this.client.proposal.get(t).expiry)) {
            await this.deleteProposal(t);
            const { message: e } = (0, s.Gu)("EXPIRED", `proposal id: ${t}`);
            throw new Error(e);
          }
        }
      }
      class Hi extends oi {
        constructor(t, e) {
          super(t, e, "proposal", bi), (this.core = t), (this.logger = e);
        }
      }
      class Vi extends oi {
        constructor(t, e) {
          super(t, e, "session", bi), (this.core = t), (this.logger = e);
        }
      }
      class Ki extends oi {
        constructor(t, e) {
          super(t, e, "request", bi, (t) => t.id),
            (this.core = t),
            (this.logger = e);
        }
      }
      class Gi extends pt {
        constructor(t) {
          super(t),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = Ei),
            (this.events = new n.EventEmitter()),
            (this.on = (t, e) => this.events.on(t, e)),
            (this.once = (t, e) => this.events.once(t, e)),
            (this.off = (t, e) => this.events.off(t, e)),
            (this.removeListener = (t, e) => this.events.removeListener(t, e)),
            (this.removeAllListeners = (t) =>
              this.events.removeAllListeners(t)),
            (this.connect = async (t) => {
              try {
                return await this.engine.connect(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.pair = async (t) => {
              try {
                return await this.engine.pair(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.approve = async (t) => {
              try {
                return await this.engine.approve(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.reject = async (t) => {
              try {
                return await this.engine.reject(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.update = async (t) => {
              try {
                return await this.engine.update(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.extend = async (t) => {
              try {
                return await this.engine.extend(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.request = async (t) => {
              try {
                return await this.engine.request(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.respond = async (t) => {
              try {
                return await this.engine.respond(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.ping = async (t) => {
              try {
                return await this.engine.ping(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.emit = async (t) => {
              try {
                return await this.engine.emit(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.disconnect = async (t) => {
              try {
                return await this.engine.disconnect(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.find = (t) => {
              try {
                return this.engine.find(t);
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.getPendingSessionRequests = () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.name = (null === t || void 0 === t ? void 0 : t.name) || Ei),
            (this.metadata =
              (null === t || void 0 === t ? void 0 : t.metadata) ||
              (0, s.lF)());
          const e =
            typeof (null === t || void 0 === t ? void 0 : t.logger) < "u" &&
            "string" != typeof (null === t || void 0 === t ? void 0 : t.logger)
              ? t.logger
              : $()(
                  Z({
                    level:
                      (null === t || void 0 === t ? void 0 : t.logger) || Ii,
                  })
                );
          (this.core =
            (null === t || void 0 === t ? void 0 : t.core) || new wi(t)),
            (this.logger = tt(e, this.name)),
            (this.session = new Vi(this.core, this.logger)),
            (this.proposal = new Hi(this.core, this.logger)),
            (this.pendingRequest = new Ki(this.core, this.logger)),
            (this.engine = new Ui(this));
        }
        static async init(t) {
          const e = new Gi(t);
          return await e.initialize(), e;
        }
        get context() {
          return X(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.engine.init(),
              this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
              this.logger.info("SignClient Initialization Success");
          } catch (Yt) {
            throw (
              (this.logger.info("SignClient Initialization Failure"),
              this.logger.error(Yt.message),
              Yt)
            );
          }
        }
      }
      var Bi = r(96487),
        Fi = r.n(Bi),
        Wi = Object.defineProperty,
        Qi = Object.defineProperties,
        Ji = Object.getOwnPropertyDescriptors,
        Yi = Object.getOwnPropertySymbols,
        Zi = Object.prototype.hasOwnProperty,
        Xi = Object.prototype.propertyIsEnumerable,
        ts = (t, e, r) =>
          e in t
            ? Wi(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        es = (t, e) => {
          for (var r in e || (e = {})) Zi.call(e, r) && ts(t, r, e[r]);
          if (Yi) for (var r of Yi(e)) Xi.call(e, r) && ts(t, r, e[r]);
          return t;
        },
        rs = (t, e) => Qi(t, Ji(e));
      const ns = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      };
      class is {
        constructor(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (
            ((this.url = t),
            (this.disableProviderPing = e),
            (this.events = new n.EventEmitter()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !Xt(t))
          )
            throw new Error(
              `Provided URL is not compatible with HTTP connection: ${t}`
            );
          (this.url = t), (this.disableProviderPing = e);
        }
        get connected() {
          return this.isAvailable;
        }
        get connecting() {
          return this.registering;
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        async open() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.url;
          await this.register(t);
        }
        async close() {
          if (!this.isAvailable) throw new Error("Connection already closed");
          this.onClose();
        }
        async send(t) {
          this.isAvailable || (await this.register());
          try {
            const e = A(t),
              r = await (
                await Fi()(this.url, rs(es({}, ns), { body: e }))
              ).json();
            this.onPayload({ data: r });
          } catch (Qt) {
            this.onError(t.id, Qt);
          }
        }
        async register() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.url;
          if (!Xt(t))
            throw new Error(
              `Provided URL is not compatible with HTTP connection: ${t}`
            );
          if (this.registering) {
            const t = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= t ||
                this.events.listenerCount("open") >= t) &&
                this.events.setMaxListeners(t + 1),
              new Promise((t, e) => {
                this.events.once("register_error", (t) => {
                  this.resetMaxListeners(), e(t);
                }),
                  this.events.once("open", () => {
                    if (
                      (this.resetMaxListeners(), typeof this.isAvailable > "u")
                    )
                      return e(
                        new Error("HTTP connection is missing or invalid")
                      );
                    t();
                  });
              })
            );
          }
          (this.url = t), (this.registering = !0);
          try {
            if (!this.disableProviderPing) {
              const e = A({
                id: 1,
                jsonrpc: "2.0",
                method: "test",
                params: [],
              });
              await Fi()(t, rs(es({}, ns), { body: e }));
            }
            this.onOpen();
          } catch (Qt) {
            const e = this.parseError(Qt);
            throw (this.events.emit("register_error", e), this.onClose(), e);
          }
        }
        onOpen() {
          (this.isAvailable = !0),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose() {
          (this.isAvailable = !1),
            (this.registering = !1),
            this.events.emit("close");
        }
        onPayload(t) {
          if (typeof t.data > "u") return;
          const e = "string" == typeof t.data ? R(t.data) : t.data;
          this.events.emit("payload", e);
        }
        onError(t, e) {
          const r = this.parseError(e),
            n = Ft(t, r.message || r.toString());
          this.events.emit("payload", n);
        }
        parseError(t) {
          return Ut(
            t,
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.url,
            "HTTP"
          );
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
      }
      class ss extends Yt {
        constructor(t) {
          super(t),
            (this.events = new n.EventEmitter()),
            (this.hasRegisteredEventListeners = !1),
            (this.connection = this.setConnection(t)),
            this.connection.connected && this.registerEventListeners();
        }
        async connect() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.connection;
          await this.open(t);
        }
        async disconnect() {
          await this.close();
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        async request(t, e) {
          return this.requestStrict(
            Gt(t.method, t.params || [], t.id || Kt().toString()),
            e
          );
        }
        async requestStrict(t, e) {
          return new Promise(async (r, n) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (Qt) {
                n(Qt);
              }
            this.events.on(`${t.id}`, (t) => {
              se(t) ? n(t.error) : r(t.result);
            });
            try {
              await this.connection.send(t, e);
            } catch (Qt) {
              n(Qt);
            }
          });
        }
        setConnection() {
          return arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : this.connection;
        }
        onPayload(t) {
          this.events.emit("payload", t),
            ne(t)
              ? this.events.emit(`${t.id}`, t)
              : this.events.emit("message", { type: t.method, data: t.params });
        }
        onClose(t) {
          t &&
            3e3 === t.code &&
            this.events.emit(
              "error",
              new Error(
                `WebSocket connection closed abnormally with code: ${t.code} ${
                  t.reason ? `(${t.reason})` : ""
                }`
              )
            ),
            this.events.emit("disconnect");
        }
        async open() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.connection;
          (this.connection === t && this.connection.connected) ||
            (this.connection.connected && this.close(),
            "string" === typeof t &&
              (await this.connection.open(t), (t = this.connection)),
            (this.connection = this.setConnection(t)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit("connect"));
        }
        async close() {
          await this.connection.close();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on("payload", (t) => this.onPayload(t)),
            this.connection.on("close", (t) => this.onClose(t)),
            this.connection.on("error", (t) => this.events.emit("error", t)),
            this.connection.on("register_error", (t) => this.onClose()),
            (this.hasRegisteredEventListeners = !0));
        }
      }
      const os = "error",
        as = "wc@2:universal_provider:",
        cs = "default_chain_changed";
      var us =
          typeof globalThis < "u"
            ? globalThis
            : typeof window < "u"
            ? window
            : typeof r.g < "u"
            ? r.g
            : typeof self < "u"
            ? self
            : {},
        hs = { exports: {} };
      !(function (t, e) {
        (function () {
          var r,
            n = "Expected a function",
            i = "__lodash_hash_undefined__",
            s = "__lodash_placeholder__",
            o = 16,
            a = 32,
            c = 64,
            u = 128,
            h = 256,
            l = 1 / 0,
            p = 9007199254740991,
            f = NaN,
            d = 4294967295,
            g = d - 1,
            v = d >>> 1,
            y = [
              ["ary", u],
              ["bind", 1],
              ["bindKey", 2],
              ["curry", 8],
              ["curryRight", o],
              ["flip", 512],
              ["partial", a],
              ["partialRight", c],
              ["rearg", h],
            ],
            m = "[object Arguments]",
            w = "[object Array]",
            _ = "[object Boolean]",
            b = "[object Date]",
            E = "[object Error]",
            I = "[object Function]",
            P = "[object GeneratorFunction]",
            S = "[object Map]",
            O = "[object Number]",
            x = "[object Object]",
            R = "[object Promise]",
            A = "[object RegExp]",
            C = "[object Set]",
            j = "[object String]",
            T = "[object Symbol]",
            N = "[object WeakMap]",
            L = "[object ArrayBuffer]",
            q = "[object DataView]",
            D = "[object Float32Array]",
            z = "[object Float64Array]",
            M = "[object Int8Array]",
            k = "[object Int16Array]",
            $ = "[object Int32Array]",
            U = "[object Uint8Array]",
            H = "[object Uint8ClampedArray]",
            V = "[object Uint16Array]",
            K = "[object Uint32Array]",
            G = /\b__p \+= '';/g,
            B = /\b(__p \+=) '' \+/g,
            F = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            W = /&(?:amp|lt|gt|quot|#39);/g,
            Q = /[&<>"']/g,
            J = RegExp(W.source),
            Y = RegExp(Q.source),
            Z = /<%-([\s\S]+?)%>/g,
            X = /<%([\s\S]+?)%>/g,
            tt = /<%=([\s\S]+?)%>/g,
            et = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            rt = /^\w*$/,
            nt =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            it = /[\\^$.*+?()[\]{}|]/g,
            st = RegExp(it.source),
            ot = /^\s+/,
            at = /\s/,
            ct = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            ut = /\{\n\/\* \[wrapped with (.+)\] \*/,
            ht = /,? & /,
            lt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            pt = /[()=,{}\[\]\/\s]/,
            ft = /\\(\\)?/g,
            dt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            gt = /\w*$/,
            vt = /^[-+]0x[0-9a-f]+$/i,
            yt = /^0b[01]+$/i,
            mt = /^\[object .+?Constructor\]$/,
            wt = /^0o[0-7]+$/i,
            _t = /^(?:0|[1-9]\d*)$/,
            bt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            Et = /($^)/,
            It = /['\n\r\u2028\u2029\\]/g,
            Pt = "\\ud800-\\udfff",
            St = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
            Ot = "\\u2700-\\u27bf",
            xt = "a-z\\xdf-\\xf6\\xf8-\\xff",
            Rt = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            At = "\\ufe0e\\ufe0f",
            Ct =
              "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            jt = "['\u2019]",
            Tt = "[" + Pt + "]",
            Nt = "[" + Ct + "]",
            Lt = "[" + St + "]",
            qt = "\\d+",
            Dt = "[" + Ot + "]",
            zt = "[" + xt + "]",
            Mt = "[^" + Pt + Ct + qt + Ot + xt + Rt + "]",
            kt = "\\ud83c[\\udffb-\\udfff]",
            $t = "[^" + Pt + "]",
            Ut = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Ht = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            Vt = "[" + Rt + "]",
            Kt = "\\u200d",
            Gt = "(?:" + zt + "|" + Mt + ")",
            Bt = "(?:" + Vt + "|" + Mt + ")",
            Ft = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
            Wt = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
            Jt = "(?:" + Lt + "|" + kt + ")" + "?",
            Yt = "[" + At + "]?",
            Zt =
              Yt +
              Jt +
              ("(?:" +
                Kt +
                "(?:" +
                [$t, Ut, Ht].join("|") +
                ")" +
                Yt +
                Jt +
                ")*"),
            Xt = "(?:" + [Dt, Ut, Ht].join("|") + ")" + Zt,
            te = "(?:" + [$t + Lt + "?", Lt, Ut, Ht, Tt].join("|") + ")",
            ee = RegExp(jt, "g"),
            re = RegExp(Lt, "g"),
            ne = RegExp(kt + "(?=" + kt + ")|" + te + Zt, "g"),
            ie = RegExp(
              [
                Vt +
                  "?" +
                  zt +
                  "+" +
                  Ft +
                  "(?=" +
                  [Nt, Vt, "$"].join("|") +
                  ")",
                Bt + "+" + Wt + "(?=" + [Nt, Vt + Gt, "$"].join("|") + ")",
                Vt + "?" + Gt + "+" + Ft,
                Vt + "+" + Wt,
                "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                qt,
                Xt,
              ].join("|"),
              "g"
            ),
            se = RegExp("[" + Kt + Pt + St + At + "]"),
            oe =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            ae = [
              "Array",
              "Buffer",
              "DataView",
              "Date",
              "Error",
              "Float32Array",
              "Float64Array",
              "Function",
              "Int8Array",
              "Int16Array",
              "Int32Array",
              "Map",
              "Math",
              "Object",
              "Promise",
              "RegExp",
              "Set",
              "String",
              "Symbol",
              "TypeError",
              "Uint8Array",
              "Uint8ClampedArray",
              "Uint16Array",
              "Uint32Array",
              "WeakMap",
              "_",
              "clearTimeout",
              "isFinite",
              "parseInt",
              "setTimeout",
            ],
            ce = -1,
            ue = {};
          (ue[D] =
            ue[z] =
            ue[M] =
            ue[k] =
            ue[$] =
            ue[U] =
            ue[H] =
            ue[V] =
            ue[K] =
              !0),
            (ue[m] =
              ue[w] =
              ue[L] =
              ue[_] =
              ue[q] =
              ue[b] =
              ue[E] =
              ue[I] =
              ue[S] =
              ue[O] =
              ue[x] =
              ue[A] =
              ue[C] =
              ue[j] =
              ue[N] =
                !1);
          var he = {};
          (he[m] =
            he[w] =
            he[L] =
            he[q] =
            he[_] =
            he[b] =
            he[D] =
            he[z] =
            he[M] =
            he[k] =
            he[$] =
            he[S] =
            he[O] =
            he[x] =
            he[A] =
            he[C] =
            he[j] =
            he[T] =
            he[U] =
            he[H] =
            he[V] =
            he[K] =
              !0),
            (he[E] = he[I] = he[N] = !1);
          var le = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029",
            },
            pe = parseFloat,
            fe = parseInt,
            de = "object" == typeof us && us && us.Object === Object && us,
            ge =
              "object" == typeof self && self && self.Object === Object && self,
            ve = de || ge || Function("return this")(),
            ye = e && !e.nodeType && e,
            me = ye && t && !t.nodeType && t,
            we = me && me.exports === ye,
            _e = we && de.process,
            be = (function () {
              try {
                return (
                  (me && me.require && me.require("util").types) ||
                  (_e && _e.binding && _e.binding("util"))
                );
              } catch {}
            })(),
            Ee = be && be.isArrayBuffer,
            Ie = be && be.isDate,
            Pe = be && be.isMap,
            Se = be && be.isRegExp,
            Oe = be && be.isSet,
            xe = be && be.isTypedArray;
          function Re(t, e, r) {
            switch (r.length) {
              case 0:
                return t.call(e);
              case 1:
                return t.call(e, r[0]);
              case 2:
                return t.call(e, r[0], r[1]);
              case 3:
                return t.call(e, r[0], r[1], r[2]);
            }
            return t.apply(e, r);
          }
          function Ae(t, e, r, n) {
            for (var i = -1, s = null == t ? 0 : t.length; ++i < s; ) {
              var o = t[i];
              e(n, o, r(o), t);
            }
            return n;
          }
          function Ce(t, e) {
            for (
              var r = -1, n = null == t ? 0 : t.length;
              ++r < n && !1 !== e(t[r], r, t);

            );
            return t;
          }
          function je(t, e) {
            for (
              var r = null == t ? 0 : t.length;
              r-- && !1 !== e(t[r], r, t);

            );
            return t;
          }
          function Te(t, e) {
            for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
              if (!e(t[r], r, t)) return !1;
            return !0;
          }
          function Ne(t, e) {
            for (
              var r = -1, n = null == t ? 0 : t.length, i = 0, s = [];
              ++r < n;

            ) {
              var o = t[r];
              e(o, r, t) && (s[i++] = o);
            }
            return s;
          }
          function Le(t, e) {
            return !!(null == t ? 0 : t.length) && Ke(t, e, 0) > -1;
          }
          function qe(t, e, r) {
            for (var n = -1, i = null == t ? 0 : t.length; ++n < i; )
              if (r(e, t[n])) return !0;
            return !1;
          }
          function De(t, e) {
            for (
              var r = -1, n = null == t ? 0 : t.length, i = Array(n);
              ++r < n;

            )
              i[r] = e(t[r], r, t);
            return i;
          }
          function ze(t, e) {
            for (var r = -1, n = e.length, i = t.length; ++r < n; )
              t[i + r] = e[r];
            return t;
          }
          function Me(t, e, r, n) {
            var i = -1,
              s = null == t ? 0 : t.length;
            for (n && s && (r = t[++i]); ++i < s; ) r = e(r, t[i], i, t);
            return r;
          }
          function ke(t, e, r, n) {
            var i = null == t ? 0 : t.length;
            for (n && i && (r = t[--i]); i--; ) r = e(r, t[i], i, t);
            return r;
          }
          function $e(t, e) {
            for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
              if (e(t[r], r, t)) return !0;
            return !1;
          }
          var Ue = We("length");
          function He(t, e, r) {
            var n;
            return (
              r(t, function (t, r, i) {
                if (e(t, r, i)) return (n = r), !1;
              }),
              n
            );
          }
          function Ve(t, e, r, n) {
            for (var i = t.length, s = r + (n ? 1 : -1); n ? s-- : ++s < i; )
              if (e(t[s], s, t)) return s;
            return -1;
          }
          function Ke(t, e, r) {
            return e === e
              ? (function (t, e, r) {
                  for (var n = r - 1, i = t.length; ++n < i; )
                    if (t[n] === e) return n;
                  return -1;
                })(t, e, r)
              : Ve(t, Be, r);
          }
          function Ge(t, e, r, n) {
            for (var i = r - 1, s = t.length; ++i < s; )
              if (n(t[i], e)) return i;
            return -1;
          }
          function Be(t) {
            return t !== t;
          }
          function Fe(t, e) {
            var r = null == t ? 0 : t.length;
            return r ? Ye(t, e) / r : f;
          }
          function We(t) {
            return function (e) {
              return null == e ? r : e[t];
            };
          }
          function Qe(t) {
            return function (e) {
              return null == t ? r : t[e];
            };
          }
          function Je(t, e, r, n, i) {
            return (
              i(t, function (t, i, s) {
                r = n ? ((n = !1), t) : e(r, t, i, s);
              }),
              r
            );
          }
          function Ye(t, e) {
            for (var n, i = -1, s = t.length; ++i < s; ) {
              var o = e(t[i]);
              o !== r && (n = n === r ? o : n + o);
            }
            return n;
          }
          function Ze(t, e) {
            for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
            return n;
          }
          function Xe(t) {
            return t && t.slice(0, gr(t) + 1).replace(ot, "");
          }
          function tr(t) {
            return function (e) {
              return t(e);
            };
          }
          function er(t, e) {
            return De(e, function (e) {
              return t[e];
            });
          }
          function rr(t, e) {
            return t.has(e);
          }
          function nr(t, e) {
            for (var r = -1, n = t.length; ++r < n && Ke(e, t[r], 0) > -1; );
            return r;
          }
          function ir(t, e) {
            for (var r = t.length; r-- && Ke(e, t[r], 0) > -1; );
            return r;
          }
          var sr = Qe({
              "\xc0": "A",
              "\xc1": "A",
              "\xc2": "A",
              "\xc3": "A",
              "\xc4": "A",
              "\xc5": "A",
              "\xe0": "a",
              "\xe1": "a",
              "\xe2": "a",
              "\xe3": "a",
              "\xe4": "a",
              "\xe5": "a",
              "\xc7": "C",
              "\xe7": "c",
              "\xd0": "D",
              "\xf0": "d",
              "\xc8": "E",
              "\xc9": "E",
              "\xca": "E",
              "\xcb": "E",
              "\xe8": "e",
              "\xe9": "e",
              "\xea": "e",
              "\xeb": "e",
              "\xcc": "I",
              "\xcd": "I",
              "\xce": "I",
              "\xcf": "I",
              "\xec": "i",
              "\xed": "i",
              "\xee": "i",
              "\xef": "i",
              "\xd1": "N",
              "\xf1": "n",
              "\xd2": "O",
              "\xd3": "O",
              "\xd4": "O",
              "\xd5": "O",
              "\xd6": "O",
              "\xd8": "O",
              "\xf2": "o",
              "\xf3": "o",
              "\xf4": "o",
              "\xf5": "o",
              "\xf6": "o",
              "\xf8": "o",
              "\xd9": "U",
              "\xda": "U",
              "\xdb": "U",
              "\xdc": "U",
              "\xf9": "u",
              "\xfa": "u",
              "\xfb": "u",
              "\xfc": "u",
              "\xdd": "Y",
              "\xfd": "y",
              "\xff": "y",
              "\xc6": "Ae",
              "\xe6": "ae",
              "\xde": "Th",
              "\xfe": "th",
              "\xdf": "ss",
              "\u0100": "A",
              "\u0102": "A",
              "\u0104": "A",
              "\u0101": "a",
              "\u0103": "a",
              "\u0105": "a",
              "\u0106": "C",
              "\u0108": "C",
              "\u010a": "C",
              "\u010c": "C",
              "\u0107": "c",
              "\u0109": "c",
              "\u010b": "c",
              "\u010d": "c",
              "\u010e": "D",
              "\u0110": "D",
              "\u010f": "d",
              "\u0111": "d",
              "\u0112": "E",
              "\u0114": "E",
              "\u0116": "E",
              "\u0118": "E",
              "\u011a": "E",
              "\u0113": "e",
              "\u0115": "e",
              "\u0117": "e",
              "\u0119": "e",
              "\u011b": "e",
              "\u011c": "G",
              "\u011e": "G",
              "\u0120": "G",
              "\u0122": "G",
              "\u011d": "g",
              "\u011f": "g",
              "\u0121": "g",
              "\u0123": "g",
              "\u0124": "H",
              "\u0126": "H",
              "\u0125": "h",
              "\u0127": "h",
              "\u0128": "I",
              "\u012a": "I",
              "\u012c": "I",
              "\u012e": "I",
              "\u0130": "I",
              "\u0129": "i",
              "\u012b": "i",
              "\u012d": "i",
              "\u012f": "i",
              "\u0131": "i",
              "\u0134": "J",
              "\u0135": "j",
              "\u0136": "K",
              "\u0137": "k",
              "\u0138": "k",
              "\u0139": "L",
              "\u013b": "L",
              "\u013d": "L",
              "\u013f": "L",
              "\u0141": "L",
              "\u013a": "l",
              "\u013c": "l",
              "\u013e": "l",
              "\u0140": "l",
              "\u0142": "l",
              "\u0143": "N",
              "\u0145": "N",
              "\u0147": "N",
              "\u014a": "N",
              "\u0144": "n",
              "\u0146": "n",
              "\u0148": "n",
              "\u014b": "n",
              "\u014c": "O",
              "\u014e": "O",
              "\u0150": "O",
              "\u014d": "o",
              "\u014f": "o",
              "\u0151": "o",
              "\u0154": "R",
              "\u0156": "R",
              "\u0158": "R",
              "\u0155": "r",
              "\u0157": "r",
              "\u0159": "r",
              "\u015a": "S",
              "\u015c": "S",
              "\u015e": "S",
              "\u0160": "S",
              "\u015b": "s",
              "\u015d": "s",
              "\u015f": "s",
              "\u0161": "s",
              "\u0162": "T",
              "\u0164": "T",
              "\u0166": "T",
              "\u0163": "t",
              "\u0165": "t",
              "\u0167": "t",
              "\u0168": "U",
              "\u016a": "U",
              "\u016c": "U",
              "\u016e": "U",
              "\u0170": "U",
              "\u0172": "U",
              "\u0169": "u",
              "\u016b": "u",
              "\u016d": "u",
              "\u016f": "u",
              "\u0171": "u",
              "\u0173": "u",
              "\u0174": "W",
              "\u0175": "w",
              "\u0176": "Y",
              "\u0177": "y",
              "\u0178": "Y",
              "\u0179": "Z",
              "\u017b": "Z",
              "\u017d": "Z",
              "\u017a": "z",
              "\u017c": "z",
              "\u017e": "z",
              "\u0132": "IJ",
              "\u0133": "ij",
              "\u0152": "Oe",
              "\u0153": "oe",
              "\u0149": "'n",
              "\u017f": "s",
            }),
            or = Qe({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            });
          function ar(t) {
            return "\\" + le[t];
          }
          function cr(t) {
            return se.test(t);
          }
          function ur(t) {
            var e = -1,
              r = Array(t.size);
            return (
              t.forEach(function (t, n) {
                r[++e] = [n, t];
              }),
              r
            );
          }
          function hr(t, e) {
            return function (r) {
              return t(e(r));
            };
          }
          function lr(t, e) {
            for (var r = -1, n = t.length, i = 0, o = []; ++r < n; ) {
              var a = t[r];
              (a === e || a === s) && ((t[r] = s), (o[i++] = r));
            }
            return o;
          }
          function pr(t) {
            var e = -1,
              r = Array(t.size);
            return (
              t.forEach(function (t) {
                r[++e] = t;
              }),
              r
            );
          }
          function fr(t) {
            return cr(t)
              ? (function (t) {
                  for (var e = (ne.lastIndex = 0); ne.test(t); ) ++e;
                  return e;
                })(t)
              : Ue(t);
          }
          function dr(t) {
            return cr(t)
              ? (function (t) {
                  return t.match(ne) || [];
                })(t)
              : (function (t) {
                  return t.split("");
                })(t);
          }
          function gr(t) {
            for (var e = t.length; e-- && at.test(t.charAt(e)); );
            return e;
          }
          var vr = Qe({
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
          });
          var yr = (function t(e) {
            var at = (e =
                null == e ? ve : yr.defaults(ve.Object(), e, yr.pick(ve, ae)))
                .Array,
              Pt = e.Date,
              St = e.Error,
              Ot = e.Function,
              xt = e.Math,
              Rt = e.Object,
              At = e.RegExp,
              Ct = e.String,
              jt = e.TypeError,
              Tt = at.prototype,
              Nt = Ot.prototype,
              Lt = Rt.prototype,
              qt = e["__core-js_shared__"],
              Dt = Nt.toString,
              zt = Lt.hasOwnProperty,
              Mt = 0,
              kt = (function () {
                var t = /[^.]+$/.exec(
                  (qt && qt.keys && qt.keys.IE_PROTO) || ""
                );
                return t ? "Symbol(src)_1." + t : "";
              })(),
              $t = Lt.toString,
              Ut = Dt.call(Rt),
              Ht = ve._,
              Vt = At(
                "^" +
                  Dt.call(zt)
                    .replace(it, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              ),
              Kt = we ? e.Buffer : r,
              Gt = e.Symbol,
              Bt = e.Uint8Array,
              Ft = Kt ? Kt.allocUnsafe : r,
              Wt = hr(Rt.getPrototypeOf, Rt),
              Jt = Rt.create,
              Yt = Lt.propertyIsEnumerable,
              Zt = Tt.splice,
              Xt = Gt ? Gt.isConcatSpreadable : r,
              te = Gt ? Gt.iterator : r,
              ne = Gt ? Gt.toStringTag : r,
              se = (function () {
                try {
                  var t = fs(Rt, "defineProperty");
                  return t({}, "", {}), t;
                } catch {}
              })(),
              le = e.clearTimeout !== ve.clearTimeout && e.clearTimeout,
              de = Pt && Pt.now !== ve.Date.now && Pt.now,
              ge = e.setTimeout !== ve.setTimeout && e.setTimeout,
              ye = xt.ceil,
              me = xt.floor,
              _e = Rt.getOwnPropertySymbols,
              be = Kt ? Kt.isBuffer : r,
              Ue = e.isFinite,
              Qe = Tt.join,
              mr = hr(Rt.keys, Rt),
              wr = xt.max,
              _r = xt.min,
              br = Pt.now,
              Er = e.parseInt,
              Ir = xt.random,
              Pr = Tt.reverse,
              Sr = fs(e, "DataView"),
              Or = fs(e, "Map"),
              xr = fs(e, "Promise"),
              Rr = fs(e, "Set"),
              Ar = fs(e, "WeakMap"),
              Cr = fs(Rt, "create"),
              jr = Ar && new Ar(),
              Tr = {},
              Nr = ks(Sr),
              Lr = ks(Or),
              qr = ks(xr),
              Dr = ks(Rr),
              zr = ks(Ar),
              Mr = Gt ? Gt.prototype : r,
              kr = Mr ? Mr.valueOf : r,
              $r = Mr ? Mr.toString : r;
            function Ur(t) {
              if (na(t) && !Bo(t) && !(t instanceof Gr)) {
                if (t instanceof Kr) return t;
                if (zt.call(t, "__wrapped__")) return $s(t);
              }
              return new Kr(t);
            }
            var Hr = (function () {
              function t() {}
              return function (e) {
                if (!ra(e)) return {};
                if (Jt) return Jt(e);
                t.prototype = e;
                var n = new t();
                return (t.prototype = r), n;
              };
            })();
            function Vr() {}
            function Kr(t, e) {
              (this.__wrapped__ = t),
                (this.__actions__ = []),
                (this.__chain__ = !!e),
                (this.__index__ = 0),
                (this.__values__ = r);
            }
            function Gr(t) {
              (this.__wrapped__ = t),
                (this.__actions__ = []),
                (this.__dir__ = 1),
                (this.__filtered__ = !1),
                (this.__iteratees__ = []),
                (this.__takeCount__ = d),
                (this.__views__ = []);
            }
            function Br(t) {
              var e = -1,
                r = null == t ? 0 : t.length;
              for (this.clear(); ++e < r; ) {
                var n = t[e];
                this.set(n[0], n[1]);
              }
            }
            function Fr(t) {
              var e = -1,
                r = null == t ? 0 : t.length;
              for (this.clear(); ++e < r; ) {
                var n = t[e];
                this.set(n[0], n[1]);
              }
            }
            function Wr(t) {
              var e = -1,
                r = null == t ? 0 : t.length;
              for (this.clear(); ++e < r; ) {
                var n = t[e];
                this.set(n[0], n[1]);
              }
            }
            function Qr(t) {
              var e = -1,
                r = null == t ? 0 : t.length;
              for (this.__data__ = new Wr(); ++e < r; ) this.add(t[e]);
            }
            function Jr(t) {
              var e = (this.__data__ = new Fr(t));
              this.size = e.size;
            }
            function Yr(t, e) {
              var r = Bo(t),
                n = !r && Go(t),
                i = !r && !n && Jo(t),
                s = !r && !n && !i && la(t),
                o = r || n || i || s,
                a = o ? Ze(t.length, Ct) : [],
                c = a.length;
              for (var u in t)
                (e || zt.call(t, u)) &&
                  (!o ||
                    !(
                      "length" == u ||
                      (i && ("offset" == u || "parent" == u)) ||
                      (s &&
                        ("buffer" == u ||
                          "byteLength" == u ||
                          "byteOffset" == u)) ||
                      _s(u, c)
                    )) &&
                  a.push(u);
              return a;
            }
            function Zr(t) {
              var e = t.length;
              return e ? t[Jn(0, e - 1)] : r;
            }
            function Xr(t, e) {
              return Ds(ji(t), un(e, 0, t.length));
            }
            function tn(t) {
              return Ds(ji(t));
            }
            function en(t, e, n) {
              ((n !== r && !Ho(t[e], n)) || (n === r && !(e in t))) &&
                an(t, e, n);
            }
            function rn(t, e, n) {
              var i = t[e];
              (!zt.call(t, e) || !Ho(i, n) || (n === r && !(e in t))) &&
                an(t, e, n);
            }
            function nn(t, e) {
              for (var r = t.length; r--; ) if (Ho(t[r][0], e)) return r;
              return -1;
            }
            function sn(t, e, r, n) {
              return (
                dn(t, function (t, i, s) {
                  e(n, t, r(t), s);
                }),
                n
              );
            }
            function on(t, e) {
              return t && Ti(e, Na(e), t);
            }
            function an(t, e, r) {
              "__proto__" == e && se
                ? se(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: r,
                    writable: !0,
                  })
                : (t[e] = r);
            }
            function cn(t, e) {
              for (
                var n = -1, i = e.length, s = at(i), o = null == t;
                ++n < i;

              )
                s[n] = o ? r : Ra(t, e[n]);
              return s;
            }
            function un(t, e, n) {
              return (
                t === t &&
                  (n !== r && (t = t <= n ? t : n),
                  e !== r && (t = t >= e ? t : e)),
                t
              );
            }
            function hn(t, e, n, i, s, o) {
              var a,
                c = 1 & e,
                u = 2 & e,
                h = 4 & e;
              if ((n && (a = s ? n(t, i, s, o) : n(t)), a !== r)) return a;
              if (!ra(t)) return t;
              var l = Bo(t);
              if (l) {
                if (
                  ((a = (function (t) {
                    var e = t.length,
                      r = new t.constructor(e);
                    return (
                      e &&
                        "string" == typeof t[0] &&
                        zt.call(t, "index") &&
                        ((r.index = t.index), (r.input = t.input)),
                      r
                    );
                  })(t)),
                  !c)
                )
                  return ji(t, a);
              } else {
                var p = vs(t),
                  f = p == I || p == P;
                if (Jo(t)) return Si(t, c);
                if (p == x || p == m || (f && !s)) {
                  if (((a = u || f ? {} : ms(t)), !c))
                    return u
                      ? (function (t, e) {
                          return Ti(t, gs(t), e);
                        })(
                          t,
                          (function (t, e) {
                            return t && Ti(e, La(e), t);
                          })(a, t)
                        )
                      : (function (t, e) {
                          return Ti(t, ds(t), e);
                        })(t, on(a, t));
                } else {
                  if (!he[p]) return s ? t : {};
                  a = (function (t, e, r) {
                    var n = t.constructor;
                    switch (e) {
                      case L:
                        return Oi(t);
                      case _:
                      case b:
                        return new n(+t);
                      case q:
                        return (function (t, e) {
                          var r = e ? Oi(t.buffer) : t.buffer;
                          return new t.constructor(
                            r,
                            t.byteOffset,
                            t.byteLength
                          );
                        })(t, r);
                      case D:
                      case z:
                      case M:
                      case k:
                      case $:
                      case U:
                      case H:
                      case V:
                      case K:
                        return xi(t, r);
                      case S:
                        return new n();
                      case O:
                      case j:
                        return new n(t);
                      case A:
                        return (function (t) {
                          var e = new t.constructor(t.source, gt.exec(t));
                          return (e.lastIndex = t.lastIndex), e;
                        })(t);
                      case C:
                        return new n();
                      case T:
                        return (function (t) {
                          return kr ? Rt(kr.call(t)) : {};
                        })(t);
                    }
                  })(t, p, c);
                }
              }
              o || (o = new Jr());
              var d = o.get(t);
              if (d) return d;
              o.set(t, a),
                ca(t)
                  ? t.forEach(function (r) {
                      a.add(hn(r, e, n, r, t, o));
                    })
                  : ia(t) &&
                    t.forEach(function (r, i) {
                      a.set(i, hn(r, e, n, i, t, o));
                    });
              var g = l ? r : (h ? (u ? os : ss) : u ? La : Na)(t);
              return (
                Ce(g || t, function (r, i) {
                  g && (r = t[(i = r)]), rn(a, i, hn(r, e, n, i, t, o));
                }),
                a
              );
            }
            function ln(t, e, n) {
              var i = n.length;
              if (null == t) return !i;
              for (t = Rt(t); i--; ) {
                var s = n[i],
                  o = e[s],
                  a = t[s];
                if ((a === r && !(s in t)) || !o(a)) return !1;
              }
              return !0;
            }
            function pn(t, e, i) {
              if ("function" != typeof t) throw new jt(n);
              return Ts(function () {
                t.apply(r, i);
              }, e);
            }
            function fn(t, e, r, n) {
              var i = -1,
                s = Le,
                o = !0,
                a = t.length,
                c = [],
                u = e.length;
              if (!a) return c;
              r && (e = De(e, tr(r))),
                n
                  ? ((s = qe), (o = !1))
                  : e.length >= 200 && ((s = rr), (o = !1), (e = new Qr(e)));
              t: for (; ++i < a; ) {
                var h = t[i],
                  l = null == r ? h : r(h);
                if (((h = n || 0 !== h ? h : 0), o && l === l)) {
                  for (var p = u; p--; ) if (e[p] === l) continue t;
                  c.push(h);
                } else s(e, l, n) || c.push(h);
              }
              return c;
            }
            (Ur.templateSettings = {
              escape: Z,
              evaluate: X,
              interpolate: tt,
              variable: "",
              imports: { _: Ur },
            }),
              (Ur.prototype = Vr.prototype),
              (Ur.prototype.constructor = Ur),
              (Kr.prototype = Hr(Vr.prototype)),
              (Kr.prototype.constructor = Kr),
              (Gr.prototype = Hr(Vr.prototype)),
              (Gr.prototype.constructor = Gr),
              (Br.prototype.clear = function () {
                (this.__data__ = Cr ? Cr(null) : {}), (this.size = 0);
              }),
              (Br.prototype.delete = function (t) {
                var e = this.has(t) && delete this.__data__[t];
                return (this.size -= e ? 1 : 0), e;
              }),
              (Br.prototype.get = function (t) {
                var e = this.__data__;
                if (Cr) {
                  var n = e[t];
                  return n === i ? r : n;
                }
                return zt.call(e, t) ? e[t] : r;
              }),
              (Br.prototype.has = function (t) {
                var e = this.__data__;
                return Cr ? e[t] !== r : zt.call(e, t);
              }),
              (Br.prototype.set = function (t, e) {
                var n = this.__data__;
                return (
                  (this.size += this.has(t) ? 0 : 1),
                  (n[t] = Cr && e === r ? i : e),
                  this
                );
              }),
              (Fr.prototype.clear = function () {
                (this.__data__ = []), (this.size = 0);
              }),
              (Fr.prototype.delete = function (t) {
                var e = this.__data__,
                  r = nn(e, t);
                return (
                  !(r < 0) &&
                  (r == e.length - 1 ? e.pop() : Zt.call(e, r, 1),
                  --this.size,
                  !0)
                );
              }),
              (Fr.prototype.get = function (t) {
                var e = this.__data__,
                  n = nn(e, t);
                return n < 0 ? r : e[n][1];
              }),
              (Fr.prototype.has = function (t) {
                return nn(this.__data__, t) > -1;
              }),
              (Fr.prototype.set = function (t, e) {
                var r = this.__data__,
                  n = nn(r, t);
                return (
                  n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this
                );
              }),
              (Wr.prototype.clear = function () {
                (this.size = 0),
                  (this.__data__ = {
                    hash: new Br(),
                    map: new (Or || Fr)(),
                    string: new Br(),
                  });
              }),
              (Wr.prototype.delete = function (t) {
                var e = ls(this, t).delete(t);
                return (this.size -= e ? 1 : 0), e;
              }),
              (Wr.prototype.get = function (t) {
                return ls(this, t).get(t);
              }),
              (Wr.prototype.has = function (t) {
                return ls(this, t).has(t);
              }),
              (Wr.prototype.set = function (t, e) {
                var r = ls(this, t),
                  n = r.size;
                return r.set(t, e), (this.size += r.size == n ? 0 : 1), this;
              }),
              (Qr.prototype.add = Qr.prototype.push =
                function (t) {
                  return this.__data__.set(t, i), this;
                }),
              (Qr.prototype.has = function (t) {
                return this.__data__.has(t);
              }),
              (Jr.prototype.clear = function () {
                (this.__data__ = new Fr()), (this.size = 0);
              }),
              (Jr.prototype.delete = function (t) {
                var e = this.__data__,
                  r = e.delete(t);
                return (this.size = e.size), r;
              }),
              (Jr.prototype.get = function (t) {
                return this.__data__.get(t);
              }),
              (Jr.prototype.has = function (t) {
                return this.__data__.has(t);
              }),
              (Jr.prototype.set = function (t, e) {
                var r = this.__data__;
                if (r instanceof Fr) {
                  var n = r.__data__;
                  if (!Or || n.length < 199)
                    return n.push([t, e]), (this.size = ++r.size), this;
                  r = this.__data__ = new Wr(n);
                }
                return r.set(t, e), (this.size = r.size), this;
              });
            var dn = qi(En),
              gn = qi(In, !0);
            function vn(t, e) {
              var r = !0;
              return (
                dn(t, function (t, n, i) {
                  return (r = !!e(t, n, i));
                }),
                r
              );
            }
            function yn(t, e, n) {
              for (var i = -1, s = t.length; ++i < s; ) {
                var o = t[i],
                  a = e(o);
                if (null != a && (c === r ? a === a && !ha(a) : n(a, c)))
                  var c = a,
                    u = o;
              }
              return u;
            }
            function mn(t, e) {
              var r = [];
              return (
                dn(t, function (t, n, i) {
                  e(t, n, i) && r.push(t);
                }),
                r
              );
            }
            function wn(t, e, r, n, i) {
              var s = -1,
                o = t.length;
              for (r || (r = ws), i || (i = []); ++s < o; ) {
                var a = t[s];
                e > 0 && r(a)
                  ? e > 1
                    ? wn(a, e - 1, r, n, i)
                    : ze(i, a)
                  : n || (i[i.length] = a);
              }
              return i;
            }
            var _n = Di(),
              bn = Di(!0);
            function En(t, e) {
              return t && _n(t, e, Na);
            }
            function In(t, e) {
              return t && bn(t, e, Na);
            }
            function Pn(t, e) {
              return Ne(e, function (e) {
                return Xo(t[e]);
              });
            }
            function Sn(t, e) {
              for (var n = 0, i = (e = bi(e, t)).length; null != t && n < i; )
                t = t[Ms(e[n++])];
              return n && n == i ? t : r;
            }
            function On(t, e, r) {
              var n = e(t);
              return Bo(t) ? n : ze(n, r(t));
            }
            function xn(t) {
              return null == t
                ? t === r
                  ? "[object Undefined]"
                  : "[object Null]"
                : ne && ne in Rt(t)
                ? (function (t) {
                    var e = zt.call(t, ne),
                      n = t[ne];
                    try {
                      t[ne] = r;
                      var i = !0;
                    } catch {}
                    var s = $t.call(t);
                    return i && (e ? (t[ne] = n) : delete t[ne]), s;
                  })(t)
                : (function (t) {
                    return $t.call(t);
                  })(t);
            }
            function Rn(t, e) {
              return t > e;
            }
            function An(t, e) {
              return null != t && zt.call(t, e);
            }
            function Cn(t, e) {
              return null != t && e in Rt(t);
            }
            function jn(t, e, n) {
              for (
                var i = n ? qe : Le,
                  s = t[0].length,
                  o = t.length,
                  a = o,
                  c = at(o),
                  u = 1 / 0,
                  h = [];
                a--;

              ) {
                var l = t[a];
                a && e && (l = De(l, tr(e))),
                  (u = _r(l.length, u)),
                  (c[a] =
                    !n && (e || (s >= 120 && l.length >= 120))
                      ? new Qr(a && l)
                      : r);
              }
              l = t[0];
              var p = -1,
                f = c[0];
              t: for (; ++p < s && h.length < u; ) {
                var d = l[p],
                  g = e ? e(d) : d;
                if (
                  ((d = n || 0 !== d ? d : 0), !(f ? rr(f, g) : i(h, g, n)))
                ) {
                  for (a = o; --a; ) {
                    var v = c[a];
                    if (!(v ? rr(v, g) : i(t[a], g, n))) continue t;
                  }
                  f && f.push(g), h.push(d);
                }
              }
              return h;
            }
            function Tn(t, e, n) {
              var i = null == (t = As(t, (e = bi(e, t)))) ? t : t[Ms(Ys(e))];
              return null == i ? r : Re(i, t, n);
            }
            function Nn(t) {
              return na(t) && xn(t) == m;
            }
            function Ln(t, e, n, i, s) {
              return (
                t === e ||
                (null == t || null == e || (!na(t) && !na(e))
                  ? t !== t && e !== e
                  : (function (t, e, n, i, s, o) {
                      var a = Bo(t),
                        c = Bo(e),
                        u = a ? w : vs(t),
                        h = c ? w : vs(e);
                      (u = u == m ? x : u), (h = h == m ? x : h);
                      var l = u == x,
                        p = h == x,
                        f = u == h;
                      if (f && Jo(t)) {
                        if (!Jo(e)) return !1;
                        (a = !0), (l = !1);
                      }
                      if (f && !l)
                        return (
                          o || (o = new Jr()),
                          a || la(t)
                            ? ns(t, e, n, i, s, o)
                            : (function (t, e, r, n, i, s, o) {
                                switch (r) {
                                  case q:
                                    if (
                                      t.byteLength != e.byteLength ||
                                      t.byteOffset != e.byteOffset
                                    )
                                      return !1;
                                    (t = t.buffer), (e = e.buffer);
                                  case L:
                                    return !(
                                      t.byteLength != e.byteLength ||
                                      !s(new Bt(t), new Bt(e))
                                    );
                                  case _:
                                  case b:
                                  case O:
                                    return Ho(+t, +e);
                                  case E:
                                    return (
                                      t.name == e.name && t.message == e.message
                                    );
                                  case A:
                                  case j:
                                    return t == e + "";
                                  case S:
                                    var a = ur;
                                  case C:
                                    var c = 1 & n;
                                    if ((a || (a = pr), t.size != e.size && !c))
                                      return !1;
                                    var u = o.get(t);
                                    if (u) return u == e;
                                    (n |= 2), o.set(t, e);
                                    var h = ns(a(t), a(e), n, i, s, o);
                                    return o.delete(t), h;
                                  case T:
                                    if (kr) return kr.call(t) == kr.call(e);
                                }
                                return !1;
                              })(t, e, u, n, i, s, o)
                        );
                      if (!(1 & n)) {
                        var d = l && zt.call(t, "__wrapped__"),
                          g = p && zt.call(e, "__wrapped__");
                        if (d || g) {
                          var v = d ? t.value() : t,
                            y = g ? e.value() : e;
                          return o || (o = new Jr()), s(v, y, n, i, o);
                        }
                      }
                      return (
                        !!f &&
                        (o || (o = new Jr()),
                        (function (t, e, n, i, s, o) {
                          var a = 1 & n,
                            c = ss(t),
                            u = c.length,
                            h = ss(e),
                            l = h.length;
                          if (u != l && !a) return !1;
                          for (var p = u; p--; ) {
                            var f = c[p];
                            if (!(a ? f in e : zt.call(e, f))) return !1;
                          }
                          var d = o.get(t),
                            g = o.get(e);
                          if (d && g) return d == e && g == t;
                          var v = !0;
                          o.set(t, e), o.set(e, t);
                          for (var y = a; ++p < u; ) {
                            var m = t[(f = c[p])],
                              w = e[f];
                            if (i)
                              var _ = a
                                ? i(w, m, f, e, t, o)
                                : i(m, w, f, t, e, o);
                            if (!(_ === r ? m === w || s(m, w, n, i, o) : _)) {
                              v = !1;
                              break;
                            }
                            y || (y = "constructor" == f);
                          }
                          if (v && !y) {
                            var b = t.constructor,
                              E = e.constructor;
                            b != E &&
                              "constructor" in t &&
                              "constructor" in e &&
                              !(
                                "function" == typeof b &&
                                b instanceof b &&
                                "function" == typeof E &&
                                E instanceof E
                              ) &&
                              (v = !1);
                          }
                          return o.delete(t), o.delete(e), v;
                        })(t, e, n, i, s, o))
                      );
                    })(t, e, n, i, Ln, s))
              );
            }
            function qn(t, e, n, i) {
              var s = n.length,
                o = s,
                a = !i;
              if (null == t) return !o;
              for (t = Rt(t); s--; ) {
                var c = n[s];
                if (a && c[2] ? c[1] !== t[c[0]] : !(c[0] in t)) return !1;
              }
              for (; ++s < o; ) {
                var u = (c = n[s])[0],
                  h = t[u],
                  l = c[1];
                if (a && c[2]) {
                  if (h === r && !(u in t)) return !1;
                } else {
                  var p = new Jr();
                  if (i) var f = i(h, l, u, t, e, p);
                  if (!(f === r ? Ln(l, h, 3, i, p) : f)) return !1;
                }
              }
              return !0;
            }
            function Dn(t) {
              return (
                !(
                  !ra(t) ||
                  (function (t) {
                    return !!kt && kt in t;
                  })(t)
                ) && (Xo(t) ? Vt : mt).test(ks(t))
              );
            }
            function zn(t) {
              return "function" == typeof t
                ? t
                : null == t
                ? sc
                : "object" == typeof t
                ? Bo(t)
                  ? Vn(t[0], t[1])
                  : Hn(t)
                : dc(t);
            }
            function Mn(t) {
              if (!Ss(t)) return mr(t);
              var e = [];
              for (var r in Rt(t))
                zt.call(t, r) && "constructor" != r && e.push(r);
              return e;
            }
            function kn(t) {
              if (!ra(t))
                return (function (t) {
                  var e = [];
                  if (null != t) for (var r in Rt(t)) e.push(r);
                  return e;
                })(t);
              var e = Ss(t),
                r = [];
              for (var n in t)
                ("constructor" == n && (e || !zt.call(t, n))) || r.push(n);
              return r;
            }
            function $n(t, e) {
              return t < e;
            }
            function Un(t, e) {
              var r = -1,
                n = Wo(t) ? at(t.length) : [];
              return (
                dn(t, function (t, i, s) {
                  n[++r] = e(t, i, s);
                }),
                n
              );
            }
            function Hn(t) {
              var e = ps(t);
              return 1 == e.length && e[0][2]
                ? xs(e[0][0], e[0][1])
                : function (r) {
                    return r === t || qn(r, t, e);
                  };
            }
            function Vn(t, e) {
              return Es(t) && Os(e)
                ? xs(Ms(t), e)
                : function (n) {
                    var i = Ra(n, t);
                    return i === r && i === e ? Aa(n, t) : Ln(e, i, 3);
                  };
            }
            function Kn(t, e, n, i, s) {
              t !== e &&
                _n(
                  e,
                  function (o, a) {
                    if ((s || (s = new Jr()), ra(o)))
                      !(function (t, e, n, i, s, o, a) {
                        var c = Cs(t, n),
                          u = Cs(e, n),
                          h = a.get(u);
                        if (h) return void en(t, n, h);
                        var l = o ? o(c, u, n + "", t, e, a) : r,
                          p = l === r;
                        if (p) {
                          var f = Bo(u),
                            d = !f && Jo(u),
                            g = !f && !d && la(u);
                          (l = u),
                            f || d || g
                              ? Bo(c)
                                ? (l = c)
                                : Qo(c)
                                ? (l = ji(c))
                                : d
                                ? ((p = !1), (l = Si(u, !0)))
                                : g
                                ? ((p = !1), (l = xi(u, !0)))
                                : (l = [])
                              : oa(u) || Go(u)
                              ? ((l = c),
                                Go(c)
                                  ? (l = wa(c))
                                  : (!ra(c) || Xo(c)) && (l = ms(u)))
                              : (p = !1);
                        }
                        p && (a.set(u, l), s(l, u, i, o, a), a.delete(u)),
                          en(t, n, l);
                      })(t, e, a, n, Kn, i, s);
                    else {
                      var c = i ? i(Cs(t, a), o, a + "", t, e, s) : r;
                      c === r && (c = o), en(t, a, c);
                    }
                  },
                  La
                );
            }
            function Gn(t, e) {
              var n = t.length;
              if (n) return _s((e += e < 0 ? n : 0), n) ? t[e] : r;
            }
            function Bn(t, e, r) {
              e = e.length
                ? De(e, function (t) {
                    return Bo(t)
                      ? function (e) {
                          return Sn(e, 1 === t.length ? t[0] : t);
                        }
                      : t;
                  })
                : [sc];
              var n = -1;
              e = De(e, tr(hs()));
              var i = Un(t, function (t, r, i) {
                var s = De(e, function (e) {
                  return e(t);
                });
                return { criteria: s, index: ++n, value: t };
              });
              return (function (t, e) {
                var r = t.length;
                for (t.sort(e); r--; ) t[r] = t[r].value;
                return t;
              })(i, function (t, e) {
                return (function (t, e, r) {
                  for (
                    var n = -1,
                      i = t.criteria,
                      s = e.criteria,
                      o = i.length,
                      a = r.length;
                    ++n < o;

                  ) {
                    var c = Ri(i[n], s[n]);
                    if (c) return n >= a ? c : c * ("desc" == r[n] ? -1 : 1);
                  }
                  return t.index - e.index;
                })(t, e, r);
              });
            }
            function Fn(t, e, r) {
              for (var n = -1, i = e.length, s = {}; ++n < i; ) {
                var o = e[n],
                  a = Sn(t, o);
                r(a, o) && ei(s, bi(o, t), a);
              }
              return s;
            }
            function Wn(t, e, r, n) {
              var i = n ? Ge : Ke,
                s = -1,
                o = e.length,
                a = t;
              for (t === e && (e = ji(e)), r && (a = De(t, tr(r))); ++s < o; )
                for (
                  var c = 0, u = e[s], h = r ? r(u) : u;
                  (c = i(a, h, c, n)) > -1;

                )
                  a !== t && Zt.call(a, c, 1), Zt.call(t, c, 1);
              return t;
            }
            function Qn(t, e) {
              for (var r = t ? e.length : 0, n = r - 1; r--; ) {
                var i = e[r];
                if (r == n || i !== s) {
                  var s = i;
                  _s(i) ? Zt.call(t, i, 1) : fi(t, i);
                }
              }
              return t;
            }
            function Jn(t, e) {
              return t + me(Ir() * (e - t + 1));
            }
            function Yn(t, e) {
              var r = "";
              if (!t || e < 1 || e > p) return r;
              do {
                e % 2 && (r += t), (e = me(e / 2)) && (t += t);
              } while (e);
              return r;
            }
            function Zn(t, e) {
              return Ns(Rs(t, e, sc), t + "");
            }
            function Xn(t) {
              return Zr(Ha(t));
            }
            function ti(t, e) {
              var r = Ha(t);
              return Ds(r, un(e, 0, r.length));
            }
            function ei(t, e, n, i) {
              if (!ra(t)) return t;
              for (
                var s = -1, o = (e = bi(e, t)).length, a = o - 1, c = t;
                null != c && ++s < o;

              ) {
                var u = Ms(e[s]),
                  h = n;
                if (
                  "__proto__" === u ||
                  "constructor" === u ||
                  "prototype" === u
                )
                  return t;
                if (s != a) {
                  var l = c[u];
                  (h = i ? i(l, u, c) : r) === r &&
                    (h = ra(l) ? l : _s(e[s + 1]) ? [] : {});
                }
                rn(c, u, h), (c = c[u]);
              }
              return t;
            }
            var ri = jr
                ? function (t, e) {
                    return jr.set(t, e), t;
                  }
                : sc,
              ni = se
                ? function (t, e) {
                    return se(t, "toString", {
                      configurable: !0,
                      enumerable: !1,
                      value: rc(e),
                      writable: !0,
                    });
                  }
                : sc;
            function ii(t) {
              return Ds(Ha(t));
            }
            function si(t, e, r) {
              var n = -1,
                i = t.length;
              e < 0 && (e = -e > i ? 0 : i + e),
                (r = r > i ? i : r) < 0 && (r += i),
                (i = e > r ? 0 : (r - e) >>> 0),
                (e >>>= 0);
              for (var s = at(i); ++n < i; ) s[n] = t[n + e];
              return s;
            }
            function oi(t, e) {
              var r;
              return (
                dn(t, function (t, n, i) {
                  return !(r = e(t, n, i));
                }),
                !!r
              );
            }
            function ai(t, e, r) {
              var n = 0,
                i = null == t ? n : t.length;
              if ("number" == typeof e && e === e && i <= v) {
                for (; n < i; ) {
                  var s = (n + i) >>> 1,
                    o = t[s];
                  null !== o && !ha(o) && (r ? o <= e : o < e)
                    ? (n = s + 1)
                    : (i = s);
                }
                return i;
              }
              return ci(t, e, sc, r);
            }
            function ci(t, e, n, i) {
              var s = 0,
                o = null == t ? 0 : t.length;
              if (0 === o) return 0;
              for (
                var a = (e = n(e)) !== e,
                  c = null === e,
                  u = ha(e),
                  h = e === r;
                s < o;

              ) {
                var l = me((s + o) / 2),
                  p = n(t[l]),
                  f = p !== r,
                  d = null === p,
                  v = p === p,
                  y = ha(p);
                if (a) var m = i || v;
                else
                  m = h
                    ? v && (i || f)
                    : c
                    ? v && f && (i || !d)
                    : u
                    ? v && f && !d && (i || !y)
                    : !d && !y && (i ? p <= e : p < e);
                m ? (s = l + 1) : (o = l);
              }
              return _r(o, g);
            }
            function ui(t, e) {
              for (var r = -1, n = t.length, i = 0, s = []; ++r < n; ) {
                var o = t[r],
                  a = e ? e(o) : o;
                if (!r || !Ho(a, c)) {
                  var c = a;
                  s[i++] = 0 === o ? 0 : o;
                }
              }
              return s;
            }
            function hi(t) {
              return "number" == typeof t ? t : ha(t) ? f : +t;
            }
            function li(t) {
              if ("string" == typeof t) return t;
              if (Bo(t)) return De(t, li) + "";
              if (ha(t)) return $r ? $r.call(t) : "";
              var e = t + "";
              return "0" == e && 1 / t == -l ? "-0" : e;
            }
            function pi(t, e, r) {
              var n = -1,
                i = Le,
                s = t.length,
                o = !0,
                a = [],
                c = a;
              if (r) (o = !1), (i = qe);
              else if (s >= 200) {
                var u = e ? null : Yi(t);
                if (u) return pr(u);
                (o = !1), (i = rr), (c = new Qr());
              } else c = e ? [] : a;
              t: for (; ++n < s; ) {
                var h = t[n],
                  l = e ? e(h) : h;
                if (((h = r || 0 !== h ? h : 0), o && l === l)) {
                  for (var p = c.length; p--; ) if (c[p] === l) continue t;
                  e && c.push(l), a.push(h);
                } else i(c, l, r) || (c !== a && c.push(l), a.push(h));
              }
              return a;
            }
            function fi(t, e) {
              return null == (t = As(t, (e = bi(e, t)))) || delete t[Ms(Ys(e))];
            }
            function di(t, e, r, n) {
              return ei(t, e, r(Sn(t, e)), n);
            }
            function gi(t, e, r, n) {
              for (
                var i = t.length, s = n ? i : -1;
                (n ? s-- : ++s < i) && e(t[s], s, t);

              );
              return r
                ? si(t, n ? 0 : s, n ? s + 1 : i)
                : si(t, n ? s + 1 : 0, n ? i : s);
            }
            function vi(t, e) {
              var r = t;
              return (
                r instanceof Gr && (r = r.value()),
                Me(
                  e,
                  function (t, e) {
                    return e.func.apply(e.thisArg, ze([t], e.args));
                  },
                  r
                )
              );
            }
            function yi(t, e, r) {
              var n = t.length;
              if (n < 2) return n ? pi(t[0]) : [];
              for (var i = -1, s = at(n); ++i < n; )
                for (var o = t[i], a = -1; ++a < n; )
                  a != i && (s[i] = fn(s[i] || o, t[a], e, r));
              return pi(wn(s, 1), e, r);
            }
            function mi(t, e, n) {
              for (var i = -1, s = t.length, o = e.length, a = {}; ++i < s; ) {
                var c = i < o ? e[i] : r;
                n(a, t[i], c);
              }
              return a;
            }
            function wi(t) {
              return Qo(t) ? t : [];
            }
            function _i(t) {
              return "function" == typeof t ? t : sc;
            }
            function bi(t, e) {
              return Bo(t) ? t : Es(t, e) ? [t] : zs(_a(t));
            }
            var Ei = Zn;
            function Ii(t, e, n) {
              var i = t.length;
              return (n = n === r ? i : n), !e && n >= i ? t : si(t, e, n);
            }
            var Pi =
              le ||
              function (t) {
                return ve.clearTimeout(t);
              };
            function Si(t, e) {
              if (e) return t.slice();
              var r = t.length,
                n = Ft ? Ft(r) : new t.constructor(r);
              return t.copy(n), n;
            }
            function Oi(t) {
              var e = new t.constructor(t.byteLength);
              return new Bt(e).set(new Bt(t)), e;
            }
            function xi(t, e) {
              var r = e ? Oi(t.buffer) : t.buffer;
              return new t.constructor(r, t.byteOffset, t.length);
            }
            function Ri(t, e) {
              if (t !== e) {
                var n = t !== r,
                  i = null === t,
                  s = t === t,
                  o = ha(t),
                  a = e !== r,
                  c = null === e,
                  u = e === e,
                  h = ha(e);
                if (
                  (!c && !h && !o && t > e) ||
                  (o && a && u && !c && !h) ||
                  (i && a && u) ||
                  (!n && u) ||
                  !s
                )
                  return 1;
                if (
                  (!i && !o && !h && t < e) ||
                  (h && n && s && !i && !o) ||
                  (c && n && s) ||
                  (!a && s) ||
                  !u
                )
                  return -1;
              }
              return 0;
            }
            function Ai(t, e, r, n) {
              for (
                var i = -1,
                  s = t.length,
                  o = r.length,
                  a = -1,
                  c = e.length,
                  u = wr(s - o, 0),
                  h = at(c + u),
                  l = !n;
                ++a < c;

              )
                h[a] = e[a];
              for (; ++i < o; ) (l || i < s) && (h[r[i]] = t[i]);
              for (; u--; ) h[a++] = t[i++];
              return h;
            }
            function Ci(t, e, r, n) {
              for (
                var i = -1,
                  s = t.length,
                  o = -1,
                  a = r.length,
                  c = -1,
                  u = e.length,
                  h = wr(s - a, 0),
                  l = at(h + u),
                  p = !n;
                ++i < h;

              )
                l[i] = t[i];
              for (var f = i; ++c < u; ) l[f + c] = e[c];
              for (; ++o < a; ) (p || i < s) && (l[f + r[o]] = t[i++]);
              return l;
            }
            function ji(t, e) {
              var r = -1,
                n = t.length;
              for (e || (e = at(n)); ++r < n; ) e[r] = t[r];
              return e;
            }
            function Ti(t, e, n, i) {
              var s = !n;
              n || (n = {});
              for (var o = -1, a = e.length; ++o < a; ) {
                var c = e[o],
                  u = i ? i(n[c], t[c], c, n, t) : r;
                u === r && (u = t[c]), s ? an(n, c, u) : rn(n, c, u);
              }
              return n;
            }
            function Ni(t, e) {
              return function (r, n) {
                var i = Bo(r) ? Ae : sn,
                  s = e ? e() : {};
                return i(r, t, hs(n, 2), s);
              };
            }
            function Li(t) {
              return Zn(function (e, n) {
                var i = -1,
                  s = n.length,
                  o = s > 1 ? n[s - 1] : r,
                  a = s > 2 ? n[2] : r;
                for (
                  o = t.length > 3 && "function" == typeof o ? (s--, o) : r,
                    a && bs(n[0], n[1], a) && ((o = s < 3 ? r : o), (s = 1)),
                    e = Rt(e);
                  ++i < s;

                ) {
                  var c = n[i];
                  c && t(e, c, i, o);
                }
                return e;
              });
            }
            function qi(t, e) {
              return function (r, n) {
                if (null == r) return r;
                if (!Wo(r)) return t(r, n);
                for (
                  var i = r.length, s = e ? i : -1, o = Rt(r);
                  (e ? s-- : ++s < i) && !1 !== n(o[s], s, o);

                );
                return r;
              };
            }
            function Di(t) {
              return function (e, r, n) {
                for (var i = -1, s = Rt(e), o = n(e), a = o.length; a--; ) {
                  var c = o[t ? a : ++i];
                  if (!1 === r(s[c], c, s)) break;
                }
                return e;
              };
            }
            function zi(t) {
              return function (e) {
                var n = cr((e = _a(e))) ? dr(e) : r,
                  i = n ? n[0] : e.charAt(0),
                  s = n ? Ii(n, 1).join("") : e.slice(1);
                return i[t]() + s;
              };
            }
            function Mi(t) {
              return function (e) {
                return Me(Xa(Ga(e).replace(ee, "")), t, "");
              };
            }
            function ki(t) {
              return function () {
                var e = arguments;
                switch (e.length) {
                  case 0:
                    return new t();
                  case 1:
                    return new t(e[0]);
                  case 2:
                    return new t(e[0], e[1]);
                  case 3:
                    return new t(e[0], e[1], e[2]);
                  case 4:
                    return new t(e[0], e[1], e[2], e[3]);
                  case 5:
                    return new t(e[0], e[1], e[2], e[3], e[4]);
                  case 6:
                    return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                  case 7:
                    return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
                }
                var r = Hr(t.prototype),
                  n = t.apply(r, e);
                return ra(n) ? n : r;
              };
            }
            function $i(t) {
              return function (e, n, i) {
                var s = Rt(e);
                if (!Wo(e)) {
                  var o = hs(n, 3);
                  (e = Na(e)),
                    (n = function (t) {
                      return o(s[t], t, s);
                    });
                }
                var a = t(e, n, i);
                return a > -1 ? s[o ? e[a] : a] : r;
              };
            }
            function Ui(t) {
              return is(function (e) {
                var i = e.length,
                  s = i,
                  o = Kr.prototype.thru;
                for (t && e.reverse(); s--; ) {
                  var a = e[s];
                  if ("function" != typeof a) throw new jt(n);
                  if (o && !c && "wrapper" == cs(a)) var c = new Kr([], !0);
                }
                for (s = c ? s : i; ++s < i; ) {
                  var u = cs((a = e[s])),
                    h = "wrapper" == u ? as(a) : r;
                  c =
                    h && Is(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9]
                      ? c[cs(h[0])].apply(c, h[3])
                      : 1 == a.length && Is(a)
                      ? c[u]()
                      : c.thru(a);
                }
                return function () {
                  var t = arguments,
                    r = t[0];
                  if (c && 1 == t.length && Bo(r)) return c.plant(r).value();
                  for (var n = 0, s = i ? e[n].apply(this, t) : r; ++n < i; )
                    s = e[n].call(this, s);
                  return s;
                };
              });
            }
            function Hi(t, e, n, i, s, o, a, c, h, l) {
              var p = e & u,
                f = 1 & e,
                d = 2 & e,
                g = 24 & e,
                v = 512 & e,
                y = d ? r : ki(t);
              return function u() {
                for (var m = arguments.length, w = at(m), _ = m; _--; )
                  w[_] = arguments[_];
                if (g)
                  var b = us(u),
                    E = (function (t, e) {
                      for (var r = t.length, n = 0; r--; ) t[r] === e && ++n;
                      return n;
                    })(w, b);
                if (
                  (i && (w = Ai(w, i, s, g)),
                  o && (w = Ci(w, o, a, g)),
                  (m -= E),
                  g && m < l)
                ) {
                  var I = lr(w, b);
                  return Qi(t, e, Hi, u.placeholder, n, w, I, c, h, l - m);
                }
                var P = f ? n : this,
                  S = d ? P[t] : t;
                return (
                  (m = w.length),
                  c
                    ? (w = (function (t, e) {
                        for (
                          var n = t.length, i = _r(e.length, n), s = ji(t);
                          i--;

                        ) {
                          var o = e[i];
                          t[i] = _s(o, n) ? s[o] : r;
                        }
                        return t;
                      })(w, c))
                    : v && m > 1 && w.reverse(),
                  p && h < m && (w.length = h),
                  this && this !== ve && this instanceof u && (S = y || ki(S)),
                  S.apply(P, w)
                );
              };
            }
            function Vi(t, e) {
              return function (r, n) {
                return (function (t, e, r, n) {
                  return (
                    En(t, function (t, i, s) {
                      e(n, r(t), i, s);
                    }),
                    n
                  );
                })(r, t, e(n), {});
              };
            }
            function Ki(t, e) {
              return function (n, i) {
                var s;
                if (n === r && i === r) return e;
                if ((n !== r && (s = n), i !== r)) {
                  if (s === r) return i;
                  "string" == typeof n || "string" == typeof i
                    ? ((n = li(n)), (i = li(i)))
                    : ((n = hi(n)), (i = hi(i))),
                    (s = t(n, i));
                }
                return s;
              };
            }
            function Gi(t) {
              return is(function (e) {
                return (
                  (e = De(e, tr(hs()))),
                  Zn(function (r) {
                    var n = this;
                    return t(e, function (t) {
                      return Re(t, n, r);
                    });
                  })
                );
              });
            }
            function Bi(t, e) {
              var n = (e = e === r ? " " : li(e)).length;
              if (n < 2) return n ? Yn(e, t) : e;
              var i = Yn(e, ye(t / fr(e)));
              return cr(e) ? Ii(dr(i), 0, t).join("") : i.slice(0, t);
            }
            function Fi(t) {
              return function (e, n, i) {
                return (
                  i && "number" != typeof i && bs(e, n, i) && (n = i = r),
                  (e = ga(e)),
                  n === r ? ((n = e), (e = 0)) : (n = ga(n)),
                  (function (t, e, r, n) {
                    for (
                      var i = -1, s = wr(ye((e - t) / (r || 1)), 0), o = at(s);
                      s--;

                    )
                      (o[n ? s : ++i] = t), (t += r);
                    return o;
                  })(e, n, (i = i === r ? (e < n ? 1 : -1) : ga(i)), t)
                );
              };
            }
            function Wi(t) {
              return function (e, r) {
                return (
                  ("string" == typeof e && "string" == typeof r) ||
                    ((e = ma(e)), (r = ma(r))),
                  t(e, r)
                );
              };
            }
            function Qi(t, e, n, i, s, o, u, h, l, p) {
              var f = 8 & e;
              (e |= f ? a : c), 4 & (e &= ~(f ? c : a)) || (e &= -4);
              var d = [
                  t,
                  e,
                  s,
                  f ? o : r,
                  f ? u : r,
                  f ? r : o,
                  f ? r : u,
                  h,
                  l,
                  p,
                ],
                g = n.apply(r, d);
              return Is(t) && js(g, d), (g.placeholder = i), Ls(g, t, e);
            }
            function Ji(t) {
              var e = xt[t];
              return function (t, r) {
                if (
                  ((t = ma(t)), (r = null == r ? 0 : _r(va(r), 292)) && Ue(t))
                ) {
                  var n = (_a(t) + "e").split("e");
                  return +(
                    (n = (_a(e(n[0] + "e" + (+n[1] + r))) + "e").split(
                      "e"
                    ))[0] +
                    "e" +
                    (+n[1] - r)
                  );
                }
                return e(t);
              };
            }
            var Yi =
              Rr && 1 / pr(new Rr([, -0]))[1] == l
                ? function (t) {
                    return new Rr(t);
                  }
                : hc;
            function Zi(t) {
              return function (e) {
                var r = vs(e);
                return r == S
                  ? ur(e)
                  : r == C
                  ? (function (t) {
                      var e = -1,
                        r = Array(t.size);
                      return (
                        t.forEach(function (t) {
                          r[++e] = [t, t];
                        }),
                        r
                      );
                    })(e)
                  : (function (t, e) {
                      return De(e, function (e) {
                        return [e, t[e]];
                      });
                    })(e, t(e));
              };
            }
            function Xi(t, e, i, l, p, f, d, g) {
              var v = 2 & e;
              if (!v && "function" != typeof t) throw new jt(n);
              var y = l ? l.length : 0;
              if (
                (y || ((e &= -97), (l = p = r)),
                (d = d === r ? d : wr(va(d), 0)),
                (g = g === r ? g : va(g)),
                (y -= p ? p.length : 0),
                e & c)
              ) {
                var m = l,
                  w = p;
                l = p = r;
              }
              var _ = v ? r : as(t),
                b = [t, e, i, l, p, m, w, f, d, g];
              if (
                (_ &&
                  (function (t, e) {
                    var r = t[1],
                      n = e[1],
                      i = r | n,
                      o = i < 131,
                      a =
                        (n == u && 8 == r) ||
                        (n == u && r == h && t[7].length <= e[8]) ||
                        (384 == n && e[7].length <= e[8] && 8 == r);
                    if (!o && !a) return t;
                    1 & n && ((t[2] = e[2]), (i |= 1 & r ? 0 : 4));
                    var c = e[3];
                    if (c) {
                      var l = t[3];
                      (t[3] = l ? Ai(l, c, e[4]) : c),
                        (t[4] = l ? lr(t[3], s) : e[4]);
                    }
                    (c = e[5]),
                      c &&
                        ((l = t[5]),
                        (t[5] = l ? Ci(l, c, e[6]) : c),
                        (t[6] = l ? lr(t[5], s) : e[6])),
                      (c = e[7]),
                      c && (t[7] = c),
                      n & u && (t[8] = null == t[8] ? e[8] : _r(t[8], e[8])),
                      null == t[9] && (t[9] = e[9]),
                      (t[0] = e[0]),
                      (t[1] = i);
                  })(b, _),
                (t = b[0]),
                (e = b[1]),
                (i = b[2]),
                (l = b[3]),
                (p = b[4]),
                !(g = b[9] =
                  b[9] === r ? (v ? 0 : t.length) : wr(b[9] - y, 0)) &&
                  24 & e &&
                  (e &= -25),
                e && 1 != e)
              )
                E =
                  8 == e || e == o
                    ? (function (t, e, n) {
                        var i = ki(t);
                        return function s() {
                          for (
                            var o = arguments.length,
                              a = at(o),
                              c = o,
                              u = us(s);
                            c--;

                          )
                            a[c] = arguments[c];
                          var h =
                            o < 3 && a[0] !== u && a[o - 1] !== u
                              ? []
                              : lr(a, u);
                          return (o -= h.length) < n
                            ? Qi(t, e, Hi, s.placeholder, r, a, h, r, r, n - o)
                            : Re(
                                this && this !== ve && this instanceof s
                                  ? i
                                  : t,
                                this,
                                a
                              );
                        };
                      })(t, e, g)
                    : (e != a && 33 != e) || p.length
                    ? Hi.apply(r, b)
                    : (function (t, e, r, n) {
                        var i = 1 & e,
                          s = ki(t);
                        return function e() {
                          for (
                            var o = -1,
                              a = arguments.length,
                              c = -1,
                              u = n.length,
                              h = at(u + a),
                              l =
                                this && this !== ve && this instanceof e
                                  ? s
                                  : t;
                            ++c < u;

                          )
                            h[c] = n[c];
                          for (; a--; ) h[c++] = arguments[++o];
                          return Re(l, i ? r : this, h);
                        };
                      })(t, e, i, l);
              else
                var E = (function (t, e, r) {
                  var n = 1 & e,
                    i = ki(t);
                  return function e() {
                    return (
                      this && this !== ve && this instanceof e ? i : t
                    ).apply(n ? r : this, arguments);
                  };
                })(t, e, i);
              return Ls((_ ? ri : js)(E, b), t, e);
            }
            function ts(t, e, n, i) {
              return t === r || (Ho(t, Lt[n]) && !zt.call(i, n)) ? e : t;
            }
            function es(t, e, n, i, s, o) {
              return (
                ra(t) &&
                  ra(e) &&
                  (o.set(e, t), Kn(t, e, r, es, o), o.delete(e)),
                t
              );
            }
            function rs(t) {
              return oa(t) ? r : t;
            }
            function ns(t, e, n, i, s, o) {
              var a = 1 & n,
                c = t.length,
                u = e.length;
              if (c != u && !(a && u > c)) return !1;
              var h = o.get(t),
                l = o.get(e);
              if (h && l) return h == e && l == t;
              var p = -1,
                f = !0,
                d = 2 & n ? new Qr() : r;
              for (o.set(t, e), o.set(e, t); ++p < c; ) {
                var g = t[p],
                  v = e[p];
                if (i) var y = a ? i(v, g, p, e, t, o) : i(g, v, p, t, e, o);
                if (y !== r) {
                  if (y) continue;
                  f = !1;
                  break;
                }
                if (d) {
                  if (
                    !$e(e, function (t, e) {
                      if (!rr(d, e) && (g === t || s(g, t, n, i, o)))
                        return d.push(e);
                    })
                  ) {
                    f = !1;
                    break;
                  }
                } else if (g !== v && !s(g, v, n, i, o)) {
                  f = !1;
                  break;
                }
              }
              return o.delete(t), o.delete(e), f;
            }
            function is(t) {
              return Ns(Rs(t, r, Bs), t + "");
            }
            function ss(t) {
              return On(t, Na, ds);
            }
            function os(t) {
              return On(t, La, gs);
            }
            var as = jr
              ? function (t) {
                  return jr.get(t);
                }
              : hc;
            function cs(t) {
              for (
                var e = t.name + "",
                  r = Tr[e],
                  n = zt.call(Tr, e) ? r.length : 0;
                n--;

              ) {
                var i = r[n],
                  s = i.func;
                if (null == s || s == t) return i.name;
              }
              return e;
            }
            function us(t) {
              return (zt.call(Ur, "placeholder") ? Ur : t).placeholder;
            }
            function hs() {
              var t = Ur.iteratee || oc;
              return (
                (t = t === oc ? zn : t),
                arguments.length ? t(arguments[0], arguments[1]) : t
              );
            }
            function ls(t, e) {
              var r = t.__data__;
              return (function (t) {
                var e = typeof t;
                return "string" == e ||
                  "number" == e ||
                  "symbol" == e ||
                  "boolean" == e
                  ? "__proto__" !== t
                  : null === t;
              })(e)
                ? r["string" == typeof e ? "string" : "hash"]
                : r.map;
            }
            function ps(t) {
              for (var e = Na(t), r = e.length; r--; ) {
                var n = e[r],
                  i = t[n];
                e[r] = [n, i, Os(i)];
              }
              return e;
            }
            function fs(t, e) {
              var n = (function (t, e) {
                return null == t ? r : t[e];
              })(t, e);
              return Dn(n) ? n : r;
            }
            var ds = _e
                ? function (t) {
                    return null == t
                      ? []
                      : ((t = Rt(t)),
                        Ne(_e(t), function (e) {
                          return Yt.call(t, e);
                        }));
                  }
                : yc,
              gs = _e
                ? function (t) {
                    for (var e = []; t; ) ze(e, ds(t)), (t = Wt(t));
                    return e;
                  }
                : yc,
              vs = xn;
            function ys(t, e, r) {
              for (var n = -1, i = (e = bi(e, t)).length, s = !1; ++n < i; ) {
                var o = Ms(e[n]);
                if (!(s = null != t && r(t, o))) break;
                t = t[o];
              }
              return s || ++n != i
                ? s
                : !!(i = null == t ? 0 : t.length) &&
                    ea(i) &&
                    _s(o, i) &&
                    (Bo(t) || Go(t));
            }
            function ms(t) {
              return "function" != typeof t.constructor || Ss(t)
                ? {}
                : Hr(Wt(t));
            }
            function ws(t) {
              return Bo(t) || Go(t) || !!(Xt && t && t[Xt]);
            }
            function _s(t, e) {
              var r,
                n = typeof t;
              return (
                !!(e = null !== (r = e) && void 0 !== r ? r : p) &&
                ("number" == n || ("symbol" != n && _t.test(t))) &&
                t > -1 &&
                t % 1 == 0 &&
                t < e
              );
            }
            function bs(t, e, r) {
              if (!ra(r)) return !1;
              var n = typeof e;
              return (
                !!("number" == n
                  ? Wo(r) && _s(e, r.length)
                  : "string" == n && e in r) && Ho(r[e], t)
              );
            }
            function Es(t, e) {
              if (Bo(t)) return !1;
              var r = typeof t;
              return (
                !(
                  "number" != r &&
                  "symbol" != r &&
                  "boolean" != r &&
                  null != t &&
                  !ha(t)
                ) ||
                rt.test(t) ||
                !et.test(t) ||
                (null != e && t in Rt(e))
              );
            }
            function Is(t) {
              var e = cs(t),
                r = Ur[e];
              if ("function" != typeof r || !(e in Gr.prototype)) return !1;
              if (t === r) return !0;
              var n = as(r);
              return !!n && t === n[0];
            }
            ((Sr && vs(new Sr(new ArrayBuffer(1))) != q) ||
              (Or && vs(new Or()) != S) ||
              (xr && vs(xr.resolve()) != R) ||
              (Rr && vs(new Rr()) != C) ||
              (Ar && vs(new Ar()) != N)) &&
              (vs = function (t) {
                var e = xn(t),
                  n = e == x ? t.constructor : r,
                  i = n ? ks(n) : "";
                if (i)
                  switch (i) {
                    case Nr:
                      return q;
                    case Lr:
                      return S;
                    case qr:
                      return R;
                    case Dr:
                      return C;
                    case zr:
                      return N;
                  }
                return e;
              });
            var Ps = qt ? Xo : mc;
            function Ss(t) {
              var e = t && t.constructor;
              return t === (("function" == typeof e && e.prototype) || Lt);
            }
            function Os(t) {
              return t === t && !ra(t);
            }
            function xs(t, e) {
              return function (n) {
                return null != n && n[t] === e && (e !== r || t in Rt(n));
              };
            }
            function Rs(t, e, n) {
              return (
                (e = wr(e === r ? t.length - 1 : e, 0)),
                function () {
                  for (
                    var r = arguments,
                      i = -1,
                      s = wr(r.length - e, 0),
                      o = at(s);
                    ++i < s;

                  )
                    o[i] = r[e + i];
                  i = -1;
                  for (var a = at(e + 1); ++i < e; ) a[i] = r[i];
                  return (a[e] = n(o)), Re(t, this, a);
                }
              );
            }
            function As(t, e) {
              return e.length < 2 ? t : Sn(t, si(e, 0, -1));
            }
            function Cs(t, e) {
              if (
                ("constructor" !== e || "function" != typeof t[e]) &&
                "__proto__" != e
              )
                return t[e];
            }
            var js = qs(ri),
              Ts =
                ge ||
                function (t, e) {
                  return ve.setTimeout(t, e);
                },
              Ns = qs(ni);
            function Ls(t, e, r) {
              var n = e + "";
              return Ns(
                t,
                (function (t, e) {
                  var r = e.length;
                  if (!r) return t;
                  var n = r - 1;
                  return (
                    (e[n] = (r > 1 ? "& " : "") + e[n]),
                    (e = e.join(r > 2 ? ", " : " ")),
                    t.replace(ct, "{\n/* [wrapped with " + e + "] */\n")
                  );
                })(
                  n,
                  (function (t, e) {
                    return (
                      Ce(y, function (r) {
                        var n = "_." + r[0];
                        e & r[1] && !Le(t, n) && t.push(n);
                      }),
                      t.sort()
                    );
                  })(
                    (function (t) {
                      var e = t.match(ut);
                      return e ? e[1].split(ht) : [];
                    })(n),
                    r
                  )
                )
              );
            }
            function qs(t) {
              var e = 0,
                n = 0;
              return function () {
                var i = br(),
                  s = 16 - (i - n);
                if (((n = i), s > 0)) {
                  if (++e >= 800) return arguments[0];
                } else e = 0;
                return t.apply(r, arguments);
              };
            }
            function Ds(t, e) {
              var n = -1,
                i = t.length,
                s = i - 1;
              for (e = e === r ? i : e; ++n < e; ) {
                var o = Jn(n, s),
                  a = t[o];
                (t[o] = t[n]), (t[n] = a);
              }
              return (t.length = e), t;
            }
            var zs = (function (t) {
              var e = Do(t, function (t) {
                  return 500 === r.size && r.clear(), t;
                }),
                r = e.cache;
              return e;
            })(function (t) {
              var e = [];
              return (
                46 === t.charCodeAt(0) && e.push(""),
                t.replace(nt, function (t, r, n, i) {
                  e.push(n ? i.replace(ft, "$1") : r || t);
                }),
                e
              );
            });
            function Ms(t) {
              if ("string" == typeof t || ha(t)) return t;
              var e = t + "";
              return "0" == e && 1 / t == -l ? "-0" : e;
            }
            function ks(t) {
              if (null != t) {
                try {
                  return Dt.call(t);
                } catch {}
                try {
                  return t + "";
                } catch {}
              }
              return "";
            }
            function $s(t) {
              if (t instanceof Gr) return t.clone();
              var e = new Kr(t.__wrapped__, t.__chain__);
              return (
                (e.__actions__ = ji(t.__actions__)),
                (e.__index__ = t.__index__),
                (e.__values__ = t.__values__),
                e
              );
            }
            var Us = Zn(function (t, e) {
                return Qo(t) ? fn(t, wn(e, 1, Qo, !0)) : [];
              }),
              Hs = Zn(function (t, e) {
                var n = Ys(e);
                return (
                  Qo(n) && (n = r),
                  Qo(t) ? fn(t, wn(e, 1, Qo, !0), hs(n, 2)) : []
                );
              }),
              Vs = Zn(function (t, e) {
                var n = Ys(e);
                return (
                  Qo(n) && (n = r), Qo(t) ? fn(t, wn(e, 1, Qo, !0), r, n) : []
                );
              });
            function Ks(t, e, r) {
              var n = null == t ? 0 : t.length;
              if (!n) return -1;
              var i = null == r ? 0 : va(r);
              return i < 0 && (i = wr(n + i, 0)), Ve(t, hs(e, 3), i);
            }
            function Gs(t, e, n) {
              var i = null == t ? 0 : t.length;
              if (!i) return -1;
              var s = i - 1;
              return (
                n !== r &&
                  ((s = va(n)), (s = n < 0 ? wr(i + s, 0) : _r(s, i - 1))),
                Ve(t, hs(e, 3), s, !0)
              );
            }
            function Bs(t) {
              return (null == t ? 0 : t.length) ? wn(t, 1) : [];
            }
            function Fs(t) {
              return t && t.length ? t[0] : r;
            }
            var Ws = Zn(function (t) {
                var e = De(t, wi);
                return e.length && e[0] === t[0] ? jn(e) : [];
              }),
              Qs = Zn(function (t) {
                var e = Ys(t),
                  n = De(t, wi);
                return (
                  e === Ys(n) ? (e = r) : n.pop(),
                  n.length && n[0] === t[0] ? jn(n, hs(e, 2)) : []
                );
              }),
              Js = Zn(function (t) {
                var e = Ys(t),
                  n = De(t, wi);
                return (
                  (e = "function" == typeof e ? e : r) && n.pop(),
                  n.length && n[0] === t[0] ? jn(n, r, e) : []
                );
              });
            function Ys(t) {
              var e = null == t ? 0 : t.length;
              return e ? t[e - 1] : r;
            }
            var Zs = Zn(Xs);
            function Xs(t, e) {
              return t && t.length && e && e.length ? Wn(t, e) : t;
            }
            var to = is(function (t, e) {
              var r = null == t ? 0 : t.length,
                n = cn(t, e);
              return (
                Qn(
                  t,
                  De(e, function (t) {
                    return _s(t, r) ? +t : t;
                  }).sort(Ri)
                ),
                n
              );
            });
            function eo(t) {
              return null == t ? t : Pr.call(t);
            }
            var ro = Zn(function (t) {
                return pi(wn(t, 1, Qo, !0));
              }),
              no = Zn(function (t) {
                var e = Ys(t);
                return Qo(e) && (e = r), pi(wn(t, 1, Qo, !0), hs(e, 2));
              }),
              io = Zn(function (t) {
                var e = Ys(t);
                return (
                  (e = "function" == typeof e ? e : r),
                  pi(wn(t, 1, Qo, !0), r, e)
                );
              });
            function so(t) {
              if (!t || !t.length) return [];
              var e = 0;
              return (
                (t = Ne(t, function (t) {
                  if (Qo(t)) return (e = wr(t.length, e)), !0;
                })),
                Ze(e, function (e) {
                  return De(t, We(e));
                })
              );
            }
            function oo(t, e) {
              if (!t || !t.length) return [];
              var n = so(t);
              return null == e
                ? n
                : De(n, function (t) {
                    return Re(e, r, t);
                  });
            }
            var ao = Zn(function (t, e) {
                return Qo(t) ? fn(t, e) : [];
              }),
              co = Zn(function (t) {
                return yi(Ne(t, Qo));
              }),
              uo = Zn(function (t) {
                var e = Ys(t);
                return Qo(e) && (e = r), yi(Ne(t, Qo), hs(e, 2));
              }),
              ho = Zn(function (t) {
                var e = Ys(t);
                return (
                  (e = "function" == typeof e ? e : r), yi(Ne(t, Qo), r, e)
                );
              }),
              lo = Zn(so);
            var po = Zn(function (t) {
              var e = t.length,
                n = e > 1 ? t[e - 1] : r;
              return (n = "function" == typeof n ? (t.pop(), n) : r), oo(t, n);
            });
            function fo(t) {
              var e = Ur(t);
              return (e.__chain__ = !0), e;
            }
            function go(t, e) {
              return e(t);
            }
            var vo = is(function (t) {
              var e = t.length,
                n = e ? t[0] : 0,
                i = this.__wrapped__,
                s = function (e) {
                  return cn(e, t);
                };
              return !(e > 1 || this.__actions__.length) &&
                i instanceof Gr &&
                _s(n)
                ? ((i = i.slice(n, +n + (e ? 1 : 0))).__actions__.push({
                    func: go,
                    args: [s],
                    thisArg: r,
                  }),
                  new Kr(i, this.__chain__).thru(function (t) {
                    return e && !t.length && t.push(r), t;
                  }))
                : this.thru(s);
            });
            var yo = Ni(function (t, e, r) {
              zt.call(t, r) ? ++t[r] : an(t, r, 1);
            });
            var mo = $i(Ks),
              wo = $i(Gs);
            function _o(t, e) {
              return (Bo(t) ? Ce : dn)(t, hs(e, 3));
            }
            function bo(t, e) {
              return (Bo(t) ? je : gn)(t, hs(e, 3));
            }
            var Eo = Ni(function (t, e, r) {
              zt.call(t, r) ? t[r].push(e) : an(t, r, [e]);
            });
            var Io = Zn(function (t, e, r) {
                var n = -1,
                  i = "function" == typeof e,
                  s = Wo(t) ? at(t.length) : [];
                return (
                  dn(t, function (t) {
                    s[++n] = i ? Re(e, t, r) : Tn(t, e, r);
                  }),
                  s
                );
              }),
              Po = Ni(function (t, e, r) {
                an(t, r, e);
              });
            function So(t, e) {
              return (Bo(t) ? De : Un)(t, hs(e, 3));
            }
            var Oo = Ni(
              function (t, e, r) {
                t[r ? 0 : 1].push(e);
              },
              function () {
                return [[], []];
              }
            );
            var xo = Zn(function (t, e) {
                if (null == t) return [];
                var r = e.length;
                return (
                  r > 1 && bs(t, e[0], e[1])
                    ? (e = [])
                    : r > 2 && bs(e[0], e[1], e[2]) && (e = [e[0]]),
                  Bn(t, wn(e, 1), [])
                );
              }),
              Ro =
                de ||
                function () {
                  return ve.Date.now();
                };
            function Ao(t, e, n) {
              return (
                (e = n ? r : e),
                (e = t && null == e ? t.length : e),
                Xi(t, u, r, r, r, r, e)
              );
            }
            function Co(t, e) {
              var i;
              if ("function" != typeof e) throw new jt(n);
              return (
                (t = va(t)),
                function () {
                  return (
                    --t > 0 && (i = e.apply(this, arguments)),
                    t <= 1 && (e = r),
                    i
                  );
                }
              );
            }
            var jo = Zn(function (t, e, r) {
                var n = 1;
                if (r.length) {
                  var i = lr(r, us(jo));
                  n |= a;
                }
                return Xi(t, n, e, r, i);
              }),
              To = Zn(function (t, e, r) {
                var n = 3;
                if (r.length) {
                  var i = lr(r, us(To));
                  n |= a;
                }
                return Xi(e, n, t, r, i);
              });
            function No(t, e, i) {
              var s,
                o,
                a,
                c,
                u,
                h,
                l = 0,
                p = !1,
                f = !1,
                d = !0;
              if ("function" != typeof t) throw new jt(n);
              function g(e) {
                var n = s,
                  i = o;
                return (s = o = r), (l = e), (c = t.apply(i, n));
              }
              function v(t) {
                var n = t - h;
                return h === r || n >= e || n < 0 || (f && t - l >= a);
              }
              function y() {
                var t = Ro();
                if (v(t)) return m(t);
                u = Ts(
                  y,
                  (function (t) {
                    var r = e - (t - h);
                    return f ? _r(r, a - (t - l)) : r;
                  })(t)
                );
              }
              function m(t) {
                return (u = r), d && s ? g(t) : ((s = o = r), c);
              }
              function w() {
                var t = Ro(),
                  n = v(t);
                if (((s = arguments), (o = this), (h = t), n)) {
                  if (u === r)
                    return (function (t) {
                      return (l = t), (u = Ts(y, e)), p ? g(t) : c;
                    })(h);
                  if (f) return Pi(u), (u = Ts(y, e)), g(h);
                }
                return u === r && (u = Ts(y, e)), c;
              }
              return (
                (e = ma(e) || 0),
                ra(i) &&
                  ((p = !!i.leading),
                  (a = (f = "maxWait" in i) ? wr(ma(i.maxWait) || 0, e) : a),
                  (d = "trailing" in i ? !!i.trailing : d)),
                (w.cancel = function () {
                  u !== r && Pi(u), (l = 0), (s = h = o = u = r);
                }),
                (w.flush = function () {
                  return u === r ? c : m(Ro());
                }),
                w
              );
            }
            var Lo = Zn(function (t, e) {
                return pn(t, 1, e);
              }),
              qo = Zn(function (t, e, r) {
                return pn(t, ma(e) || 0, r);
              });
            function Do(t, e) {
              if (
                "function" != typeof t ||
                (null != e && "function" != typeof e)
              )
                throw new jt(n);
              var r = function () {
                var n = arguments,
                  i = e ? e.apply(this, n) : n[0],
                  s = r.cache;
                if (s.has(i)) return s.get(i);
                var o = t.apply(this, n);
                return (r.cache = s.set(i, o) || s), o;
              };
              return (r.cache = new (Do.Cache || Wr)()), r;
            }
            function zo(t) {
              if ("function" != typeof t) throw new jt(n);
              return function () {
                var e = arguments;
                switch (e.length) {
                  case 0:
                    return !t.call(this);
                  case 1:
                    return !t.call(this, e[0]);
                  case 2:
                    return !t.call(this, e[0], e[1]);
                  case 3:
                    return !t.call(this, e[0], e[1], e[2]);
                }
                return !t.apply(this, e);
              };
            }
            Do.Cache = Wr;
            var Mo = Ei(function (t, e) {
                var r = (e =
                  1 == e.length && Bo(e[0])
                    ? De(e[0], tr(hs()))
                    : De(wn(e, 1), tr(hs()))).length;
                return Zn(function (n) {
                  for (var i = -1, s = _r(n.length, r); ++i < s; )
                    n[i] = e[i].call(this, n[i]);
                  return Re(t, this, n);
                });
              }),
              ko = Zn(function (t, e) {
                var n = lr(e, us(ko));
                return Xi(t, a, r, e, n);
              }),
              $o = Zn(function (t, e) {
                var n = lr(e, us($o));
                return Xi(t, c, r, e, n);
              }),
              Uo = is(function (t, e) {
                return Xi(t, h, r, r, r, e);
              });
            function Ho(t, e) {
              return t === e || (t !== t && e !== e);
            }
            var Vo = Wi(Rn),
              Ko = Wi(function (t, e) {
                return t >= e;
              }),
              Go = Nn(
                (function () {
                  return arguments;
                })()
              )
                ? Nn
                : function (t) {
                    return (
                      na(t) && zt.call(t, "callee") && !Yt.call(t, "callee")
                    );
                  },
              Bo = at.isArray,
              Fo = Ee
                ? tr(Ee)
                : function (t) {
                    return na(t) && xn(t) == L;
                  };
            function Wo(t) {
              return null != t && ea(t.length) && !Xo(t);
            }
            function Qo(t) {
              return na(t) && Wo(t);
            }
            var Jo = be || mc,
              Yo = Ie
                ? tr(Ie)
                : function (t) {
                    return na(t) && xn(t) == b;
                  };
            function Zo(t) {
              if (!na(t)) return !1;
              var e = xn(t);
              return (
                e == E ||
                "[object DOMException]" == e ||
                ("string" == typeof t.message &&
                  "string" == typeof t.name &&
                  !oa(t))
              );
            }
            function Xo(t) {
              if (!ra(t)) return !1;
              var e = xn(t);
              return (
                e == I ||
                e == P ||
                "[object AsyncFunction]" == e ||
                "[object Proxy]" == e
              );
            }
            function ta(t) {
              return "number" == typeof t && t == va(t);
            }
            function ea(t) {
              return "number" == typeof t && t > -1 && t % 1 == 0 && t <= p;
            }
            function ra(t) {
              var e = typeof t;
              return null != t && ("object" == e || "function" == e);
            }
            function na(t) {
              return null != t && "object" == typeof t;
            }
            var ia = Pe
              ? tr(Pe)
              : function (t) {
                  return na(t) && vs(t) == S;
                };
            function sa(t) {
              return "number" == typeof t || (na(t) && xn(t) == O);
            }
            function oa(t) {
              if (!na(t) || xn(t) != x) return !1;
              var e = Wt(t);
              if (null === e) return !0;
              var r = zt.call(e, "constructor") && e.constructor;
              return (
                "function" == typeof r && r instanceof r && Dt.call(r) == Ut
              );
            }
            var aa = Se
              ? tr(Se)
              : function (t) {
                  return na(t) && xn(t) == A;
                };
            var ca = Oe
              ? tr(Oe)
              : function (t) {
                  return na(t) && vs(t) == C;
                };
            function ua(t) {
              return "string" == typeof t || (!Bo(t) && na(t) && xn(t) == j);
            }
            function ha(t) {
              return "symbol" == typeof t || (na(t) && xn(t) == T);
            }
            var la = xe
              ? tr(xe)
              : function (t) {
                  return na(t) && ea(t.length) && !!ue[xn(t)];
                };
            var pa = Wi($n),
              fa = Wi(function (t, e) {
                return t <= e;
              });
            function da(t) {
              if (!t) return [];
              if (Wo(t)) return ua(t) ? dr(t) : ji(t);
              if (te && t[te])
                return (function (t) {
                  for (var e, r = []; !(e = t.next()).done; ) r.push(e.value);
                  return r;
                })(t[te]());
              var e = vs(t);
              return (e == S ? ur : e == C ? pr : Ha)(t);
            }
            function ga(t) {
              return t
                ? (t = ma(t)) === l || t === -l
                  ? 17976931348623157e292 * (t < 0 ? -1 : 1)
                  : t === t
                  ? t
                  : 0
                : 0 === t
                ? t
                : 0;
            }
            function va(t) {
              var e = ga(t),
                r = e % 1;
              return e === e ? (r ? e - r : e) : 0;
            }
            function ya(t) {
              return t ? un(va(t), 0, d) : 0;
            }
            function ma(t) {
              if ("number" == typeof t) return t;
              if (ha(t)) return f;
              if (ra(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = ra(e) ? e + "" : e;
              }
              if ("string" != typeof t) return 0 === t ? t : +t;
              t = Xe(t);
              var r = yt.test(t);
              return r || wt.test(t)
                ? fe(t.slice(2), r ? 2 : 8)
                : vt.test(t)
                ? f
                : +t;
            }
            function wa(t) {
              return Ti(t, La(t));
            }
            function _a(t) {
              return null == t ? "" : li(t);
            }
            var ba = Li(function (t, e) {
                if (Ss(e) || Wo(e)) Ti(e, Na(e), t);
                else for (var r in e) zt.call(e, r) && rn(t, r, e[r]);
              }),
              Ea = Li(function (t, e) {
                Ti(e, La(e), t);
              }),
              Ia = Li(function (t, e, r, n) {
                Ti(e, La(e), t, n);
              }),
              Pa = Li(function (t, e, r, n) {
                Ti(e, Na(e), t, n);
              }),
              Sa = is(cn);
            var Oa = Zn(function (t, e) {
                t = Rt(t);
                var n = -1,
                  i = e.length,
                  s = i > 2 ? e[2] : r;
                for (s && bs(e[0], e[1], s) && (i = 1); ++n < i; )
                  for (
                    var o = e[n], a = La(o), c = -1, u = a.length;
                    ++c < u;

                  ) {
                    var h = a[c],
                      l = t[h];
                    (l === r || (Ho(l, Lt[h]) && !zt.call(t, h))) &&
                      (t[h] = o[h]);
                  }
                return t;
              }),
              xa = Zn(function (t) {
                return t.push(r, es), Re(Da, r, t);
              });
            function Ra(t, e, n) {
              var i = null == t ? r : Sn(t, e);
              return i === r ? n : i;
            }
            function Aa(t, e) {
              return null != t && ys(t, e, Cn);
            }
            var Ca = Vi(function (t, e, r) {
                null != e &&
                  "function" != typeof e.toString &&
                  (e = $t.call(e)),
                  (t[e] = r);
              }, rc(sc)),
              ja = Vi(function (t, e, r) {
                null != e &&
                  "function" != typeof e.toString &&
                  (e = $t.call(e)),
                  zt.call(t, e) ? t[e].push(r) : (t[e] = [r]);
              }, hs),
              Ta = Zn(Tn);
            function Na(t) {
              return Wo(t) ? Yr(t) : Mn(t);
            }
            function La(t) {
              return Wo(t) ? Yr(t, !0) : kn(t);
            }
            var qa = Li(function (t, e, r) {
                Kn(t, e, r);
              }),
              Da = Li(function (t, e, r, n) {
                Kn(t, e, r, n);
              }),
              za = is(function (t, e) {
                var r = {};
                if (null == t) return r;
                var n = !1;
                (e = De(e, function (e) {
                  return (e = bi(e, t)), n || (n = e.length > 1), e;
                })),
                  Ti(t, os(t), r),
                  n && (r = hn(r, 7, rs));
                for (var i = e.length; i--; ) fi(r, e[i]);
                return r;
              });
            var Ma = is(function (t, e) {
              return null == t
                ? {}
                : (function (t, e) {
                    return Fn(t, e, function (e, r) {
                      return Aa(t, r);
                    });
                  })(t, e);
            });
            function ka(t, e) {
              if (null == t) return {};
              var r = De(os(t), function (t) {
                return [t];
              });
              return (
                (e = hs(e)),
                Fn(t, r, function (t, r) {
                  return e(t, r[0]);
                })
              );
            }
            var $a = Zi(Na),
              Ua = Zi(La);
            function Ha(t) {
              return null == t ? [] : er(t, Na(t));
            }
            var Va = Mi(function (t, e, r) {
              return (e = e.toLowerCase()), t + (r ? Ka(e) : e);
            });
            function Ka(t) {
              return Za(_a(t).toLowerCase());
            }
            function Ga(t) {
              return (t = _a(t)) && t.replace(bt, sr).replace(re, "");
            }
            var Ba = Mi(function (t, e, r) {
                return t + (r ? "-" : "") + e.toLowerCase();
              }),
              Fa = Mi(function (t, e, r) {
                return t + (r ? " " : "") + e.toLowerCase();
              }),
              Wa = zi("toLowerCase");
            var Qa = Mi(function (t, e, r) {
              return t + (r ? "_" : "") + e.toLowerCase();
            });
            var Ja = Mi(function (t, e, r) {
              return t + (r ? " " : "") + Za(e);
            });
            var Ya = Mi(function (t, e, r) {
                return t + (r ? " " : "") + e.toUpperCase();
              }),
              Za = zi("toUpperCase");
            function Xa(t, e, n) {
              return (
                (t = _a(t)),
                (e = n ? r : e) === r
                  ? (function (t) {
                      return oe.test(t);
                    })(t)
                    ? (function (t) {
                        return t.match(ie) || [];
                      })(t)
                    : (function (t) {
                        return t.match(lt) || [];
                      })(t)
                  : t.match(e) || []
              );
            }
            var tc = Zn(function (t, e) {
                try {
                  return Re(t, r, e);
                } catch (Qt) {
                  return Zo(Qt) ? Qt : new St(Qt);
                }
              }),
              ec = is(function (t, e) {
                return (
                  Ce(e, function (e) {
                    (e = Ms(e)), an(t, e, jo(t[e], t));
                  }),
                  t
                );
              });
            function rc(t) {
              return function () {
                return t;
              };
            }
            var nc = Ui(),
              ic = Ui(!0);
            function sc(t) {
              return t;
            }
            function oc(t) {
              return zn("function" == typeof t ? t : hn(t, 1));
            }
            var ac = Zn(function (t, e) {
                return function (r) {
                  return Tn(r, t, e);
                };
              }),
              cc = Zn(function (t, e) {
                return function (r) {
                  return Tn(t, r, e);
                };
              });
            function uc(t, e, r) {
              var n = Na(e),
                i = Pn(e, n);
              null == r &&
                (!ra(e) || (!i.length && n.length)) &&
                ((r = e), (e = t), (t = this), (i = Pn(e, Na(e))));
              var s = !(ra(r) && "chain" in r) || !!r.chain,
                o = Xo(t);
              return (
                Ce(i, function (r) {
                  var n = e[r];
                  (t[r] = n),
                    o &&
                      (t.prototype[r] = function () {
                        var e = this.__chain__;
                        if (s || e) {
                          var r = t(this.__wrapped__);
                          return (
                            (r.__actions__ = ji(this.__actions__)).push({
                              func: n,
                              args: arguments,
                              thisArg: t,
                            }),
                            (r.__chain__ = e),
                            r
                          );
                        }
                        return n.apply(t, ze([this.value()], arguments));
                      });
                }),
                t
              );
            }
            function hc() {}
            var lc = Gi(De),
              pc = Gi(Te),
              fc = Gi($e);
            function dc(t) {
              return Es(t)
                ? We(Ms(t))
                : (function (t) {
                    return function (e) {
                      return Sn(e, t);
                    };
                  })(t);
            }
            var gc = Fi(),
              vc = Fi(!0);
            function yc() {
              return [];
            }
            function mc() {
              return !1;
            }
            var wc = Ki(function (t, e) {
                return t + e;
              }, 0),
              _c = Ji("ceil"),
              bc = Ki(function (t, e) {
                return t / e;
              }, 1),
              Ec = Ji("floor");
            var Ic = Ki(function (t, e) {
                return t * e;
              }, 1),
              Pc = Ji("round"),
              Sc = Ki(function (t, e) {
                return t - e;
              }, 0);
            return (
              (Ur.after = function (t, e) {
                if ("function" != typeof e) throw new jt(n);
                return (
                  (t = va(t)),
                  function () {
                    if (--t < 1) return e.apply(this, arguments);
                  }
                );
              }),
              (Ur.ary = Ao),
              (Ur.assign = ba),
              (Ur.assignIn = Ea),
              (Ur.assignInWith = Ia),
              (Ur.assignWith = Pa),
              (Ur.at = Sa),
              (Ur.before = Co),
              (Ur.bind = jo),
              (Ur.bindAll = ec),
              (Ur.bindKey = To),
              (Ur.castArray = function () {
                if (!arguments.length) return [];
                var t = arguments[0];
                return Bo(t) ? t : [t];
              }),
              (Ur.chain = fo),
              (Ur.chunk = function (t, e, n) {
                e = (n ? bs(t, e, n) : e === r) ? 1 : wr(va(e), 0);
                var i = null == t ? 0 : t.length;
                if (!i || e < 1) return [];
                for (var s = 0, o = 0, a = at(ye(i / e)); s < i; )
                  a[o++] = si(t, s, (s += e));
                return a;
              }),
              (Ur.compact = function (t) {
                for (
                  var e = -1, r = null == t ? 0 : t.length, n = 0, i = [];
                  ++e < r;

                ) {
                  var s = t[e];
                  s && (i[n++] = s);
                }
                return i;
              }),
              (Ur.concat = function () {
                var t = arguments.length;
                if (!t) return [];
                for (var e = at(t - 1), r = arguments[0], n = t; n--; )
                  e[n - 1] = arguments[n];
                return ze(Bo(r) ? ji(r) : [r], wn(e, 1));
              }),
              (Ur.cond = function (t) {
                var e = null == t ? 0 : t.length,
                  r = hs();
                return (
                  (t = e
                    ? De(t, function (t) {
                        if ("function" != typeof t[1]) throw new jt(n);
                        return [r(t[0]), t[1]];
                      })
                    : []),
                  Zn(function (r) {
                    for (var n = -1; ++n < e; ) {
                      var i = t[n];
                      if (Re(i[0], this, r)) return Re(i[1], this, r);
                    }
                  })
                );
              }),
              (Ur.conforms = function (t) {
                return (function (t) {
                  var e = Na(t);
                  return function (r) {
                    return ln(r, t, e);
                  };
                })(hn(t, 1));
              }),
              (Ur.constant = rc),
              (Ur.countBy = yo),
              (Ur.create = function (t, e) {
                var r = Hr(t);
                return null == e ? r : on(r, e);
              }),
              (Ur.curry = function t(e, n, i) {
                var s = Xi(e, 8, r, r, r, r, r, (n = i ? r : n));
                return (s.placeholder = t.placeholder), s;
              }),
              (Ur.curryRight = function t(e, n, i) {
                var s = Xi(e, o, r, r, r, r, r, (n = i ? r : n));
                return (s.placeholder = t.placeholder), s;
              }),
              (Ur.debounce = No),
              (Ur.defaults = Oa),
              (Ur.defaultsDeep = xa),
              (Ur.defer = Lo),
              (Ur.delay = qo),
              (Ur.difference = Us),
              (Ur.differenceBy = Hs),
              (Ur.differenceWith = Vs),
              (Ur.drop = function (t, e, n) {
                var i = null == t ? 0 : t.length;
                return i
                  ? si(t, (e = n || e === r ? 1 : va(e)) < 0 ? 0 : e, i)
                  : [];
              }),
              (Ur.dropRight = function (t, e, n) {
                var i = null == t ? 0 : t.length;
                return i
                  ? si(
                      t,
                      0,
                      (e = i - (e = n || e === r ? 1 : va(e))) < 0 ? 0 : e
                    )
                  : [];
              }),
              (Ur.dropRightWhile = function (t, e) {
                return t && t.length ? gi(t, hs(e, 3), !0, !0) : [];
              }),
              (Ur.dropWhile = function (t, e) {
                return t && t.length ? gi(t, hs(e, 3), !0) : [];
              }),
              (Ur.fill = function (t, e, n, i) {
                var s = null == t ? 0 : t.length;
                return s
                  ? (n &&
                      "number" != typeof n &&
                      bs(t, e, n) &&
                      ((n = 0), (i = s)),
                    (function (t, e, n, i) {
                      var s = t.length;
                      for (
                        (n = va(n)) < 0 && (n = -n > s ? 0 : s + n),
                          (i = i === r || i > s ? s : va(i)) < 0 && (i += s),
                          i = n > i ? 0 : ya(i);
                        n < i;

                      )
                        t[n++] = e;
                      return t;
                    })(t, e, n, i))
                  : [];
              }),
              (Ur.filter = function (t, e) {
                return (Bo(t) ? Ne : mn)(t, hs(e, 3));
              }),
              (Ur.flatMap = function (t, e) {
                return wn(So(t, e), 1);
              }),
              (Ur.flatMapDeep = function (t, e) {
                return wn(So(t, e), l);
              }),
              (Ur.flatMapDepth = function (t, e, n) {
                return (n = n === r ? 1 : va(n)), wn(So(t, e), n);
              }),
              (Ur.flatten = Bs),
              (Ur.flattenDeep = function (t) {
                return (null == t ? 0 : t.length) ? wn(t, l) : [];
              }),
              (Ur.flattenDepth = function (t, e) {
                return (null == t ? 0 : t.length)
                  ? wn(t, (e = e === r ? 1 : va(e)))
                  : [];
              }),
              (Ur.flip = function (t) {
                return Xi(t, 512);
              }),
              (Ur.flow = nc),
              (Ur.flowRight = ic),
              (Ur.fromPairs = function (t) {
                for (
                  var e = -1, r = null == t ? 0 : t.length, n = {};
                  ++e < r;

                ) {
                  var i = t[e];
                  n[i[0]] = i[1];
                }
                return n;
              }),
              (Ur.functions = function (t) {
                return null == t ? [] : Pn(t, Na(t));
              }),
              (Ur.functionsIn = function (t) {
                return null == t ? [] : Pn(t, La(t));
              }),
              (Ur.groupBy = Eo),
              (Ur.initial = function (t) {
                return (null == t ? 0 : t.length) ? si(t, 0, -1) : [];
              }),
              (Ur.intersection = Ws),
              (Ur.intersectionBy = Qs),
              (Ur.intersectionWith = Js),
              (Ur.invert = Ca),
              (Ur.invertBy = ja),
              (Ur.invokeMap = Io),
              (Ur.iteratee = oc),
              (Ur.keyBy = Po),
              (Ur.keys = Na),
              (Ur.keysIn = La),
              (Ur.map = So),
              (Ur.mapKeys = function (t, e) {
                var r = {};
                return (
                  (e = hs(e, 3)),
                  En(t, function (t, n, i) {
                    an(r, e(t, n, i), t);
                  }),
                  r
                );
              }),
              (Ur.mapValues = function (t, e) {
                var r = {};
                return (
                  (e = hs(e, 3)),
                  En(t, function (t, n, i) {
                    an(r, n, e(t, n, i));
                  }),
                  r
                );
              }),
              (Ur.matches = function (t) {
                return Hn(hn(t, 1));
              }),
              (Ur.matchesProperty = function (t, e) {
                return Vn(t, hn(e, 1));
              }),
              (Ur.memoize = Do),
              (Ur.merge = qa),
              (Ur.mergeWith = Da),
              (Ur.method = ac),
              (Ur.methodOf = cc),
              (Ur.mixin = uc),
              (Ur.negate = zo),
              (Ur.nthArg = function (t) {
                return (
                  (t = va(t)),
                  Zn(function (e) {
                    return Gn(e, t);
                  })
                );
              }),
              (Ur.omit = za),
              (Ur.omitBy = function (t, e) {
                return ka(t, zo(hs(e)));
              }),
              (Ur.once = function (t) {
                return Co(2, t);
              }),
              (Ur.orderBy = function (t, e, n, i) {
                return null == t
                  ? []
                  : (Bo(e) || (e = null == e ? [] : [e]),
                    Bo((n = i ? r : n)) || (n = null == n ? [] : [n]),
                    Bn(t, e, n));
              }),
              (Ur.over = lc),
              (Ur.overArgs = Mo),
              (Ur.overEvery = pc),
              (Ur.overSome = fc),
              (Ur.partial = ko),
              (Ur.partialRight = $o),
              (Ur.partition = Oo),
              (Ur.pick = Ma),
              (Ur.pickBy = ka),
              (Ur.property = dc),
              (Ur.propertyOf = function (t) {
                return function (e) {
                  return null == t ? r : Sn(t, e);
                };
              }),
              (Ur.pull = Zs),
              (Ur.pullAll = Xs),
              (Ur.pullAllBy = function (t, e, r) {
                return t && t.length && e && e.length ? Wn(t, e, hs(r, 2)) : t;
              }),
              (Ur.pullAllWith = function (t, e, n) {
                return t && t.length && e && e.length ? Wn(t, e, r, n) : t;
              }),
              (Ur.pullAt = to),
              (Ur.range = gc),
              (Ur.rangeRight = vc),
              (Ur.rearg = Uo),
              (Ur.reject = function (t, e) {
                return (Bo(t) ? Ne : mn)(t, zo(hs(e, 3)));
              }),
              (Ur.remove = function (t, e) {
                var r = [];
                if (!t || !t.length) return r;
                var n = -1,
                  i = [],
                  s = t.length;
                for (e = hs(e, 3); ++n < s; ) {
                  var o = t[n];
                  e(o, n, t) && (r.push(o), i.push(n));
                }
                return Qn(t, i), r;
              }),
              (Ur.rest = function (t, e) {
                if ("function" != typeof t) throw new jt(n);
                return Zn(t, (e = e === r ? e : va(e)));
              }),
              (Ur.reverse = eo),
              (Ur.sampleSize = function (t, e, n) {
                return (
                  (e = (n ? bs(t, e, n) : e === r) ? 1 : va(e)),
                  (Bo(t) ? Xr : ti)(t, e)
                );
              }),
              (Ur.set = function (t, e, r) {
                return null == t ? t : ei(t, e, r);
              }),
              (Ur.setWith = function (t, e, n, i) {
                return (
                  (i = "function" == typeof i ? i : r),
                  null == t ? t : ei(t, e, n, i)
                );
              }),
              (Ur.shuffle = function (t) {
                return (Bo(t) ? tn : ii)(t);
              }),
              (Ur.slice = function (t, e, n) {
                var i = null == t ? 0 : t.length;
                return i
                  ? (n && "number" != typeof n && bs(t, e, n)
                      ? ((e = 0), (n = i))
                      : ((e = null == e ? 0 : va(e)),
                        (n = n === r ? i : va(n))),
                    si(t, e, n))
                  : [];
              }),
              (Ur.sortBy = xo),
              (Ur.sortedUniq = function (t) {
                return t && t.length ? ui(t) : [];
              }),
              (Ur.sortedUniqBy = function (t, e) {
                return t && t.length ? ui(t, hs(e, 2)) : [];
              }),
              (Ur.split = function (t, e, n) {
                return (
                  n && "number" != typeof n && bs(t, e, n) && (e = n = r),
                  (n = n === r ? d : n >>> 0)
                    ? (t = _a(t)) &&
                      ("string" == typeof e || (null != e && !aa(e))) &&
                      !(e = li(e)) &&
                      cr(t)
                      ? Ii(dr(t), 0, n)
                      : t.split(e, n)
                    : []
                );
              }),
              (Ur.spread = function (t, e) {
                if ("function" != typeof t) throw new jt(n);
                return (
                  (e = null == e ? 0 : wr(va(e), 0)),
                  Zn(function (r) {
                    var n = r[e],
                      i = Ii(r, 0, e);
                    return n && ze(i, n), Re(t, this, i);
                  })
                );
              }),
              (Ur.tail = function (t) {
                var e = null == t ? 0 : t.length;
                return e ? si(t, 1, e) : [];
              }),
              (Ur.take = function (t, e, n) {
                return t && t.length
                  ? si(t, 0, (e = n || e === r ? 1 : va(e)) < 0 ? 0 : e)
                  : [];
              }),
              (Ur.takeRight = function (t, e, n) {
                var i = null == t ? 0 : t.length;
                return i
                  ? si(
                      t,
                      (e = i - (e = n || e === r ? 1 : va(e))) < 0 ? 0 : e,
                      i
                    )
                  : [];
              }),
              (Ur.takeRightWhile = function (t, e) {
                return t && t.length ? gi(t, hs(e, 3), !1, !0) : [];
              }),
              (Ur.takeWhile = function (t, e) {
                return t && t.length ? gi(t, hs(e, 3)) : [];
              }),
              (Ur.tap = function (t, e) {
                return e(t), t;
              }),
              (Ur.throttle = function (t, e, r) {
                var i = !0,
                  s = !0;
                if ("function" != typeof t) throw new jt(n);
                return (
                  ra(r) &&
                    ((i = "leading" in r ? !!r.leading : i),
                    (s = "trailing" in r ? !!r.trailing : s)),
                  No(t, e, { leading: i, maxWait: e, trailing: s })
                );
              }),
              (Ur.thru = go),
              (Ur.toArray = da),
              (Ur.toPairs = $a),
              (Ur.toPairsIn = Ua),
              (Ur.toPath = function (t) {
                return Bo(t) ? De(t, Ms) : ha(t) ? [t] : ji(zs(_a(t)));
              }),
              (Ur.toPlainObject = wa),
              (Ur.transform = function (t, e, r) {
                var n = Bo(t),
                  i = n || Jo(t) || la(t);
                if (((e = hs(e, 4)), null == r)) {
                  var s = t && t.constructor;
                  r = i ? (n ? new s() : []) : ra(t) && Xo(s) ? Hr(Wt(t)) : {};
                }
                return (
                  (i ? Ce : En)(t, function (t, n, i) {
                    return e(r, t, n, i);
                  }),
                  r
                );
              }),
              (Ur.unary = function (t) {
                return Ao(t, 1);
              }),
              (Ur.union = ro),
              (Ur.unionBy = no),
              (Ur.unionWith = io),
              (Ur.uniq = function (t) {
                return t && t.length ? pi(t) : [];
              }),
              (Ur.uniqBy = function (t, e) {
                return t && t.length ? pi(t, hs(e, 2)) : [];
              }),
              (Ur.uniqWith = function (t, e) {
                return (
                  (e = "function" == typeof e ? e : r),
                  t && t.length ? pi(t, r, e) : []
                );
              }),
              (Ur.unset = function (t, e) {
                return null == t || fi(t, e);
              }),
              (Ur.unzip = so),
              (Ur.unzipWith = oo),
              (Ur.update = function (t, e, r) {
                return null == t ? t : di(t, e, _i(r));
              }),
              (Ur.updateWith = function (t, e, n, i) {
                return (
                  (i = "function" == typeof i ? i : r),
                  null == t ? t : di(t, e, _i(n), i)
                );
              }),
              (Ur.values = Ha),
              (Ur.valuesIn = function (t) {
                return null == t ? [] : er(t, La(t));
              }),
              (Ur.without = ao),
              (Ur.words = Xa),
              (Ur.wrap = function (t, e) {
                return ko(_i(e), t);
              }),
              (Ur.xor = co),
              (Ur.xorBy = uo),
              (Ur.xorWith = ho),
              (Ur.zip = lo),
              (Ur.zipObject = function (t, e) {
                return mi(t || [], e || [], rn);
              }),
              (Ur.zipObjectDeep = function (t, e) {
                return mi(t || [], e || [], ei);
              }),
              (Ur.zipWith = po),
              (Ur.entries = $a),
              (Ur.entriesIn = Ua),
              (Ur.extend = Ea),
              (Ur.extendWith = Ia),
              uc(Ur, Ur),
              (Ur.add = wc),
              (Ur.attempt = tc),
              (Ur.camelCase = Va),
              (Ur.capitalize = Ka),
              (Ur.ceil = _c),
              (Ur.clamp = function (t, e, n) {
                return (
                  n === r && ((n = e), (e = r)),
                  n !== r && (n = (n = ma(n)) === n ? n : 0),
                  e !== r && (e = (e = ma(e)) === e ? e : 0),
                  un(ma(t), e, n)
                );
              }),
              (Ur.clone = function (t) {
                return hn(t, 4);
              }),
              (Ur.cloneDeep = function (t) {
                return hn(t, 5);
              }),
              (Ur.cloneDeepWith = function (t, e) {
                return hn(t, 5, (e = "function" == typeof e ? e : r));
              }),
              (Ur.cloneWith = function (t, e) {
                return hn(t, 4, (e = "function" == typeof e ? e : r));
              }),
              (Ur.conformsTo = function (t, e) {
                return null == e || ln(t, e, Na(e));
              }),
              (Ur.deburr = Ga),
              (Ur.defaultTo = function (t, e) {
                return null == t || t !== t ? e : t;
              }),
              (Ur.divide = bc),
              (Ur.endsWith = function (t, e, n) {
                (t = _a(t)), (e = li(e));
                var i = t.length,
                  s = (n = n === r ? i : un(va(n), 0, i));
                return (n -= e.length) >= 0 && t.slice(n, s) == e;
              }),
              (Ur.eq = Ho),
              (Ur.escape = function (t) {
                return (t = _a(t)) && Y.test(t) ? t.replace(Q, or) : t;
              }),
              (Ur.escapeRegExp = function (t) {
                return (t = _a(t)) && st.test(t) ? t.replace(it, "\\$&") : t;
              }),
              (Ur.every = function (t, e, n) {
                var i = Bo(t) ? Te : vn;
                return n && bs(t, e, n) && (e = r), i(t, hs(e, 3));
              }),
              (Ur.find = mo),
              (Ur.findIndex = Ks),
              (Ur.findKey = function (t, e) {
                return He(t, hs(e, 3), En);
              }),
              (Ur.findLast = wo),
              (Ur.findLastIndex = Gs),
              (Ur.findLastKey = function (t, e) {
                return He(t, hs(e, 3), In);
              }),
              (Ur.floor = Ec),
              (Ur.forEach = _o),
              (Ur.forEachRight = bo),
              (Ur.forIn = function (t, e) {
                return null == t ? t : _n(t, hs(e, 3), La);
              }),
              (Ur.forInRight = function (t, e) {
                return null == t ? t : bn(t, hs(e, 3), La);
              }),
              (Ur.forOwn = function (t, e) {
                return t && En(t, hs(e, 3));
              }),
              (Ur.forOwnRight = function (t, e) {
                return t && In(t, hs(e, 3));
              }),
              (Ur.get = Ra),
              (Ur.gt = Vo),
              (Ur.gte = Ko),
              (Ur.has = function (t, e) {
                return null != t && ys(t, e, An);
              }),
              (Ur.hasIn = Aa),
              (Ur.head = Fs),
              (Ur.identity = sc),
              (Ur.includes = function (t, e, r, n) {
                (t = Wo(t) ? t : Ha(t)), (r = r && !n ? va(r) : 0);
                var i = t.length;
                return (
                  r < 0 && (r = wr(i + r, 0)),
                  ua(t)
                    ? r <= i && t.indexOf(e, r) > -1
                    : !!i && Ke(t, e, r) > -1
                );
              }),
              (Ur.indexOf = function (t, e, r) {
                var n = null == t ? 0 : t.length;
                if (!n) return -1;
                var i = null == r ? 0 : va(r);
                return i < 0 && (i = wr(n + i, 0)), Ke(t, e, i);
              }),
              (Ur.inRange = function (t, e, n) {
                return (
                  (e = ga(e)),
                  n === r ? ((n = e), (e = 0)) : (n = ga(n)),
                  (function (t, e, r) {
                    return t >= _r(e, r) && t < wr(e, r);
                  })((t = ma(t)), e, n)
                );
              }),
              (Ur.invoke = Ta),
              (Ur.isArguments = Go),
              (Ur.isArray = Bo),
              (Ur.isArrayBuffer = Fo),
              (Ur.isArrayLike = Wo),
              (Ur.isArrayLikeObject = Qo),
              (Ur.isBoolean = function (t) {
                return !0 === t || !1 === t || (na(t) && xn(t) == _);
              }),
              (Ur.isBuffer = Jo),
              (Ur.isDate = Yo),
              (Ur.isElement = function (t) {
                return na(t) && 1 === t.nodeType && !oa(t);
              }),
              (Ur.isEmpty = function (t) {
                if (null == t) return !0;
                if (
                  Wo(t) &&
                  (Bo(t) ||
                    "string" == typeof t ||
                    "function" == typeof t.splice ||
                    Jo(t) ||
                    la(t) ||
                    Go(t))
                )
                  return !t.length;
                var e = vs(t);
                if (e == S || e == C) return !t.size;
                if (Ss(t)) return !Mn(t).length;
                for (var r in t) if (zt.call(t, r)) return !1;
                return !0;
              }),
              (Ur.isEqual = function (t, e) {
                return Ln(t, e);
              }),
              (Ur.isEqualWith = function (t, e, n) {
                var i = (n = "function" == typeof n ? n : r) ? n(t, e) : r;
                return i === r ? Ln(t, e, r, n) : !!i;
              }),
              (Ur.isError = Zo),
              (Ur.isFinite = function (t) {
                return "number" == typeof t && Ue(t);
              }),
              (Ur.isFunction = Xo),
              (Ur.isInteger = ta),
              (Ur.isLength = ea),
              (Ur.isMap = ia),
              (Ur.isMatch = function (t, e) {
                return t === e || qn(t, e, ps(e));
              }),
              (Ur.isMatchWith = function (t, e, n) {
                return (n = "function" == typeof n ? n : r), qn(t, e, ps(e), n);
              }),
              (Ur.isNaN = function (t) {
                return sa(t) && t != +t;
              }),
              (Ur.isNative = function (t) {
                if (Ps(t))
                  throw new St(
                    "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                  );
                return Dn(t);
              }),
              (Ur.isNil = function (t) {
                return null == t;
              }),
              (Ur.isNull = function (t) {
                return null === t;
              }),
              (Ur.isNumber = sa),
              (Ur.isObject = ra),
              (Ur.isObjectLike = na),
              (Ur.isPlainObject = oa),
              (Ur.isRegExp = aa),
              (Ur.isSafeInteger = function (t) {
                return ta(t) && t >= -p && t <= p;
              }),
              (Ur.isSet = ca),
              (Ur.isString = ua),
              (Ur.isSymbol = ha),
              (Ur.isTypedArray = la),
              (Ur.isUndefined = function (t) {
                return t === r;
              }),
              (Ur.isWeakMap = function (t) {
                return na(t) && vs(t) == N;
              }),
              (Ur.isWeakSet = function (t) {
                return na(t) && "[object WeakSet]" == xn(t);
              }),
              (Ur.join = function (t, e) {
                return null == t ? "" : Qe.call(t, e);
              }),
              (Ur.kebabCase = Ba),
              (Ur.last = Ys),
              (Ur.lastIndexOf = function (t, e, n) {
                var i = null == t ? 0 : t.length;
                if (!i) return -1;
                var s = i;
                return (
                  n !== r &&
                    (s = (s = va(n)) < 0 ? wr(i + s, 0) : _r(s, i - 1)),
                  e === e
                    ? (function (t, e, r) {
                        for (var n = r + 1; n--; ) if (t[n] === e) return n;
                        return n;
                      })(t, e, s)
                    : Ve(t, Be, s, !0)
                );
              }),
              (Ur.lowerCase = Fa),
              (Ur.lowerFirst = Wa),
              (Ur.lt = pa),
              (Ur.lte = fa),
              (Ur.max = function (t) {
                return t && t.length ? yn(t, sc, Rn) : r;
              }),
              (Ur.maxBy = function (t, e) {
                return t && t.length ? yn(t, hs(e, 2), Rn) : r;
              }),
              (Ur.mean = function (t) {
                return Fe(t, sc);
              }),
              (Ur.meanBy = function (t, e) {
                return Fe(t, hs(e, 2));
              }),
              (Ur.min = function (t) {
                return t && t.length ? yn(t, sc, $n) : r;
              }),
              (Ur.minBy = function (t, e) {
                return t && t.length ? yn(t, hs(e, 2), $n) : r;
              }),
              (Ur.stubArray = yc),
              (Ur.stubFalse = mc),
              (Ur.stubObject = function () {
                return {};
              }),
              (Ur.stubString = function () {
                return "";
              }),
              (Ur.stubTrue = function () {
                return !0;
              }),
              (Ur.multiply = Ic),
              (Ur.nth = function (t, e) {
                return t && t.length ? Gn(t, va(e)) : r;
              }),
              (Ur.noConflict = function () {
                return ve._ === this && (ve._ = Ht), this;
              }),
              (Ur.noop = hc),
              (Ur.now = Ro),
              (Ur.pad = function (t, e, r) {
                t = _a(t);
                var n = (e = va(e)) ? fr(t) : 0;
                if (!e || n >= e) return t;
                var i = (e - n) / 2;
                return Bi(me(i), r) + t + Bi(ye(i), r);
              }),
              (Ur.padEnd = function (t, e, r) {
                t = _a(t);
                var n = (e = va(e)) ? fr(t) : 0;
                return e && n < e ? t + Bi(e - n, r) : t;
              }),
              (Ur.padStart = function (t, e, r) {
                t = _a(t);
                var n = (e = va(e)) ? fr(t) : 0;
                return e && n < e ? Bi(e - n, r) + t : t;
              }),
              (Ur.parseInt = function (t, e, r) {
                return (
                  r || null == e ? (e = 0) : e && (e = +e),
                  Er(_a(t).replace(ot, ""), e || 0)
                );
              }),
              (Ur.random = function (t, e, n) {
                if (
                  (n && "boolean" != typeof n && bs(t, e, n) && (e = n = r),
                  n === r &&
                    ("boolean" == typeof e
                      ? ((n = e), (e = r))
                      : "boolean" == typeof t && ((n = t), (t = r))),
                  t === r && e === r
                    ? ((t = 0), (e = 1))
                    : ((t = ga(t)), e === r ? ((e = t), (t = 0)) : (e = ga(e))),
                  t > e)
                ) {
                  var i = t;
                  (t = e), (e = i);
                }
                if (n || t % 1 || e % 1) {
                  var s = Ir();
                  return _r(
                    t + s * (e - t + pe("1e-" + ((s + "").length - 1))),
                    e
                  );
                }
                return Jn(t, e);
              }),
              (Ur.reduce = function (t, e, r) {
                var n = Bo(t) ? Me : Je,
                  i = arguments.length < 3;
                return n(t, hs(e, 4), r, i, dn);
              }),
              (Ur.reduceRight = function (t, e, r) {
                var n = Bo(t) ? ke : Je,
                  i = arguments.length < 3;
                return n(t, hs(e, 4), r, i, gn);
              }),
              (Ur.repeat = function (t, e, n) {
                return (
                  (e = (n ? bs(t, e, n) : e === r) ? 1 : va(e)), Yn(_a(t), e)
                );
              }),
              (Ur.replace = function () {
                var t = arguments,
                  e = _a(t[0]);
                return t.length < 3 ? e : e.replace(t[1], t[2]);
              }),
              (Ur.result = function (t, e, n) {
                var i = -1,
                  s = (e = bi(e, t)).length;
                for (s || ((s = 1), (t = r)); ++i < s; ) {
                  var o = null == t ? r : t[Ms(e[i])];
                  o === r && ((i = s), (o = n)), (t = Xo(o) ? o.call(t) : o);
                }
                return t;
              }),
              (Ur.round = Pc),
              (Ur.runInContext = t),
              (Ur.sample = function (t) {
                return (Bo(t) ? Zr : Xn)(t);
              }),
              (Ur.size = function (t) {
                if (null == t) return 0;
                if (Wo(t)) return ua(t) ? fr(t) : t.length;
                var e = vs(t);
                return e == S || e == C ? t.size : Mn(t).length;
              }),
              (Ur.snakeCase = Qa),
              (Ur.some = function (t, e, n) {
                var i = Bo(t) ? $e : oi;
                return n && bs(t, e, n) && (e = r), i(t, hs(e, 3));
              }),
              (Ur.sortedIndex = function (t, e) {
                return ai(t, e);
              }),
              (Ur.sortedIndexBy = function (t, e, r) {
                return ci(t, e, hs(r, 2));
              }),
              (Ur.sortedIndexOf = function (t, e) {
                var r = null == t ? 0 : t.length;
                if (r) {
                  var n = ai(t, e);
                  if (n < r && Ho(t[n], e)) return n;
                }
                return -1;
              }),
              (Ur.sortedLastIndex = function (t, e) {
                return ai(t, e, !0);
              }),
              (Ur.sortedLastIndexBy = function (t, e, r) {
                return ci(t, e, hs(r, 2), !0);
              }),
              (Ur.sortedLastIndexOf = function (t, e) {
                if (null == t ? 0 : t.length) {
                  var r = ai(t, e, !0) - 1;
                  if (Ho(t[r], e)) return r;
                }
                return -1;
              }),
              (Ur.startCase = Ja),
              (Ur.startsWith = function (t, e, r) {
                return (
                  (t = _a(t)),
                  (r = null == r ? 0 : un(va(r), 0, t.length)),
                  (e = li(e)),
                  t.slice(r, r + e.length) == e
                );
              }),
              (Ur.subtract = Sc),
              (Ur.sum = function (t) {
                return t && t.length ? Ye(t, sc) : 0;
              }),
              (Ur.sumBy = function (t, e) {
                return t && t.length ? Ye(t, hs(e, 2)) : 0;
              }),
              (Ur.template = function (t, e, n) {
                var i = Ur.templateSettings;
                n && bs(t, e, n) && (e = r),
                  (t = _a(t)),
                  (e = Ia({}, e, i, ts));
                var s,
                  o,
                  a = Ia({}, e.imports, i.imports, ts),
                  c = Na(a),
                  u = er(a, c),
                  h = 0,
                  l = e.interpolate || Et,
                  p = "__p += '",
                  f = At(
                    (e.escape || Et).source +
                      "|" +
                      l.source +
                      "|" +
                      (l === tt ? dt : Et).source +
                      "|" +
                      (e.evaluate || Et).source +
                      "|$",
                    "g"
                  ),
                  d =
                    "//# sourceURL=" +
                    (zt.call(e, "sourceURL")
                      ? (e.sourceURL + "").replace(/\s/g, " ")
                      : "lodash.templateSources[" + ++ce + "]") +
                    "\n";
                t.replace(f, function (e, r, n, i, a, c) {
                  return (
                    n || (n = i),
                    (p += t.slice(h, c).replace(It, ar)),
                    r && ((s = !0), (p += "' +\n__e(" + r + ") +\n'")),
                    a && ((o = !0), (p += "';\n" + a + ";\n__p += '")),
                    n &&
                      (p +=
                        "' +\n((__t = (" + n + ")) == null ? '' : __t) +\n'"),
                    (h = c + e.length),
                    e
                  );
                }),
                  (p += "';\n");
                var g = zt.call(e, "variable") && e.variable;
                if (g) {
                  if (pt.test(g))
                    throw new St(
                      "Invalid `variable` option passed into `_.template`"
                    );
                } else p = "with (obj) {\n" + p + "\n}\n";
                (p = (o ? p.replace(G, "") : p)
                  .replace(B, "$1")
                  .replace(F, "$1;")),
                  (p =
                    "function(" +
                    (g || "obj") +
                    ") {\n" +
                    (g ? "" : "obj || (obj = {});\n") +
                    "var __t, __p = ''" +
                    (s ? ", __e = _.escape" : "") +
                    (o
                      ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                      : ";\n") +
                    p +
                    "return __p\n}");
                var v = tc(function () {
                  return Ot(c, d + "return " + p).apply(r, u);
                });
                if (((v.source = p), Zo(v))) throw v;
                return v;
              }),
              (Ur.times = function (t, e) {
                if ((t = va(t)) < 1 || t > p) return [];
                var r = d,
                  n = _r(t, d);
                (e = hs(e)), (t -= d);
                for (var i = Ze(n, e); ++r < t; ) e(r);
                return i;
              }),
              (Ur.toFinite = ga),
              (Ur.toInteger = va),
              (Ur.toLength = ya),
              (Ur.toLower = function (t) {
                return _a(t).toLowerCase();
              }),
              (Ur.toNumber = ma),
              (Ur.toSafeInteger = function (t) {
                return t ? un(va(t), -p, p) : 0 === t ? t : 0;
              }),
              (Ur.toString = _a),
              (Ur.toUpper = function (t) {
                return _a(t).toUpperCase();
              }),
              (Ur.trim = function (t, e, n) {
                if ((t = _a(t)) && (n || e === r)) return Xe(t);
                if (!t || !(e = li(e))) return t;
                var i = dr(t),
                  s = dr(e);
                return Ii(i, nr(i, s), ir(i, s) + 1).join("");
              }),
              (Ur.trimEnd = function (t, e, n) {
                if ((t = _a(t)) && (n || e === r)) return t.slice(0, gr(t) + 1);
                if (!t || !(e = li(e))) return t;
                var i = dr(t);
                return Ii(i, 0, ir(i, dr(e)) + 1).join("");
              }),
              (Ur.trimStart = function (t, e, n) {
                if ((t = _a(t)) && (n || e === r)) return t.replace(ot, "");
                if (!t || !(e = li(e))) return t;
                var i = dr(t);
                return Ii(i, nr(i, dr(e))).join("");
              }),
              (Ur.truncate = function (t, e) {
                var n = 30,
                  i = "...";
                if (ra(e)) {
                  var s = "separator" in e ? e.separator : s;
                  (n = "length" in e ? va(e.length) : n),
                    (i = "omission" in e ? li(e.omission) : i);
                }
                var o = (t = _a(t)).length;
                if (cr(t)) {
                  var a = dr(t);
                  o = a.length;
                }
                if (n >= o) return t;
                var c = n - fr(i);
                if (c < 1) return i;
                var u = a ? Ii(a, 0, c).join("") : t.slice(0, c);
                if (s === r) return u + i;
                if ((a && (c += u.length - c), aa(s))) {
                  if (t.slice(c).search(s)) {
                    var h,
                      l = u;
                    for (
                      s.global || (s = At(s.source, _a(gt.exec(s)) + "g")),
                        s.lastIndex = 0;
                      (h = s.exec(l));

                    )
                      var p = h.index;
                    u = u.slice(0, p === r ? c : p);
                  }
                } else if (t.indexOf(li(s), c) != c) {
                  var f = u.lastIndexOf(s);
                  f > -1 && (u = u.slice(0, f));
                }
                return u + i;
              }),
              (Ur.unescape = function (t) {
                return (t = _a(t)) && J.test(t) ? t.replace(W, vr) : t;
              }),
              (Ur.uniqueId = function (t) {
                var e = ++Mt;
                return _a(t) + e;
              }),
              (Ur.upperCase = Ya),
              (Ur.upperFirst = Za),
              (Ur.each = _o),
              (Ur.eachRight = bo),
              (Ur.first = Fs),
              uc(
                Ur,
                (function () {
                  var t = {};
                  return (
                    En(Ur, function (e, r) {
                      zt.call(Ur.prototype, r) || (t[r] = e);
                    }),
                    t
                  );
                })(),
                { chain: !1 }
              ),
              (Ur.VERSION = "4.17.21"),
              Ce(
                [
                  "bind",
                  "bindKey",
                  "curry",
                  "curryRight",
                  "partial",
                  "partialRight",
                ],
                function (t) {
                  Ur[t].placeholder = Ur;
                }
              ),
              Ce(["drop", "take"], function (t, e) {
                (Gr.prototype[t] = function (n) {
                  n = n === r ? 1 : wr(va(n), 0);
                  var i = this.__filtered__ && !e ? new Gr(this) : this.clone();
                  return (
                    i.__filtered__
                      ? (i.__takeCount__ = _r(n, i.__takeCount__))
                      : i.__views__.push({
                          size: _r(n, d),
                          type: t + (i.__dir__ < 0 ? "Right" : ""),
                        }),
                    i
                  );
                }),
                  (Gr.prototype[t + "Right"] = function (e) {
                    return this.reverse()[t](e).reverse();
                  });
              }),
              Ce(["filter", "map", "takeWhile"], function (t, e) {
                var r = e + 1,
                  n = 1 == r || 3 == r;
                Gr.prototype[t] = function (t) {
                  var e = this.clone();
                  return (
                    e.__iteratees__.push({ iteratee: hs(t, 3), type: r }),
                    (e.__filtered__ = e.__filtered__ || n),
                    e
                  );
                };
              }),
              Ce(["head", "last"], function (t, e) {
                var r = "take" + (e ? "Right" : "");
                Gr.prototype[t] = function () {
                  return this[r](1).value()[0];
                };
              }),
              Ce(["initial", "tail"], function (t, e) {
                var r = "drop" + (e ? "" : "Right");
                Gr.prototype[t] = function () {
                  return this.__filtered__ ? new Gr(this) : this[r](1);
                };
              }),
              (Gr.prototype.compact = function () {
                return this.filter(sc);
              }),
              (Gr.prototype.find = function (t) {
                return this.filter(t).head();
              }),
              (Gr.prototype.findLast = function (t) {
                return this.reverse().find(t);
              }),
              (Gr.prototype.invokeMap = Zn(function (t, e) {
                return "function" == typeof t
                  ? new Gr(this)
                  : this.map(function (r) {
                      return Tn(r, t, e);
                    });
              })),
              (Gr.prototype.reject = function (t) {
                return this.filter(zo(hs(t)));
              }),
              (Gr.prototype.slice = function (t, e) {
                t = va(t);
                var n = this;
                return n.__filtered__ && (t > 0 || e < 0)
                  ? new Gr(n)
                  : (t < 0 ? (n = n.takeRight(-t)) : t && (n = n.drop(t)),
                    e !== r &&
                      (n = (e = va(e)) < 0 ? n.dropRight(-e) : n.take(e - t)),
                    n);
              }),
              (Gr.prototype.takeRightWhile = function (t) {
                return this.reverse().takeWhile(t).reverse();
              }),
              (Gr.prototype.toArray = function () {
                return this.take(d);
              }),
              En(Gr.prototype, function (t, e) {
                var n = /^(?:filter|find|map|reject)|While$/.test(e),
                  i = /^(?:head|last)$/.test(e),
                  s = Ur[i ? "take" + ("last" == e ? "Right" : "") : e],
                  o = i || /^find/.test(e);
                s &&
                  (Ur.prototype[e] = function () {
                    var e = this.__wrapped__,
                      a = i ? [1] : arguments,
                      c = e instanceof Gr,
                      u = a[0],
                      h = c || Bo(e),
                      l = function (t) {
                        var e = s.apply(Ur, ze([t], a));
                        return i && p ? e[0] : e;
                      };
                    h &&
                      n &&
                      "function" == typeof u &&
                      1 != u.length &&
                      (c = h = !1);
                    var p = this.__chain__,
                      f = !!this.__actions__.length,
                      d = o && !p,
                      g = c && !f;
                    if (!o && h) {
                      e = g ? e : new Gr(this);
                      var v = t.apply(e, a);
                      return (
                        v.__actions__.push({ func: go, args: [l], thisArg: r }),
                        new Kr(v, p)
                      );
                    }
                    return d && g
                      ? t.apply(this, a)
                      : ((v = this.thru(l)),
                        d ? (i ? v.value()[0] : v.value()) : v);
                  });
              }),
              Ce(
                ["pop", "push", "shift", "sort", "splice", "unshift"],
                function (t) {
                  var e = Tt[t],
                    r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                    n = /^(?:pop|shift)$/.test(t);
                  Ur.prototype[t] = function () {
                    var t = arguments;
                    if (n && !this.__chain__) {
                      var i = this.value();
                      return e.apply(Bo(i) ? i : [], t);
                    }
                    return this[r](function (r) {
                      return e.apply(Bo(r) ? r : [], t);
                    });
                  };
                }
              ),
              En(Gr.prototype, function (t, e) {
                var r = Ur[e];
                if (r) {
                  var n = r.name + "";
                  zt.call(Tr, n) || (Tr[n] = []),
                    Tr[n].push({ name: e, func: r });
                }
              }),
              (Tr[Hi(r, 2).name] = [{ name: "wrapper", func: r }]),
              (Gr.prototype.clone = function () {
                var t = new Gr(this.__wrapped__);
                return (
                  (t.__actions__ = ji(this.__actions__)),
                  (t.__dir__ = this.__dir__),
                  (t.__filtered__ = this.__filtered__),
                  (t.__iteratees__ = ji(this.__iteratees__)),
                  (t.__takeCount__ = this.__takeCount__),
                  (t.__views__ = ji(this.__views__)),
                  t
                );
              }),
              (Gr.prototype.reverse = function () {
                if (this.__filtered__) {
                  var t = new Gr(this);
                  (t.__dir__ = -1), (t.__filtered__ = !0);
                } else (t = this.clone()).__dir__ *= -1;
                return t;
              }),
              (Gr.prototype.value = function () {
                var t = this.__wrapped__.value(),
                  e = this.__dir__,
                  r = Bo(t),
                  n = e < 0,
                  i = r ? t.length : 0,
                  s = (function (t, e, r) {
                    for (var n = -1, i = r.length; ++n < i; ) {
                      var s = r[n],
                        o = s.size;
                      switch (s.type) {
                        case "drop":
                          t += o;
                          break;
                        case "dropRight":
                          e -= o;
                          break;
                        case "take":
                          e = _r(e, t + o);
                          break;
                        case "takeRight":
                          t = wr(t, e - o);
                      }
                    }
                    return { start: t, end: e };
                  })(0, i, this.__views__),
                  o = s.start,
                  a = s.end,
                  c = a - o,
                  u = n ? a : o - 1,
                  h = this.__iteratees__,
                  l = h.length,
                  p = 0,
                  f = _r(c, this.__takeCount__);
                if (!r || (!n && i == c && f == c))
                  return vi(t, this.__actions__);
                var d = [];
                t: for (; c-- && p < f; ) {
                  for (var g = -1, v = t[(u += e)]; ++g < l; ) {
                    var y = h[g],
                      m = y.iteratee,
                      w = y.type,
                      _ = m(v);
                    if (2 == w) v = _;
                    else if (!_) {
                      if (1 == w) continue t;
                      break t;
                    }
                  }
                  d[p++] = v;
                }
                return d;
              }),
              (Ur.prototype.at = vo),
              (Ur.prototype.chain = function () {
                return fo(this);
              }),
              (Ur.prototype.commit = function () {
                return new Kr(this.value(), this.__chain__);
              }),
              (Ur.prototype.next = function () {
                this.__values__ === r && (this.__values__ = da(this.value()));
                var t = this.__index__ >= this.__values__.length;
                return {
                  done: t,
                  value: t ? r : this.__values__[this.__index__++],
                };
              }),
              (Ur.prototype.plant = function (t) {
                for (var e, n = this; n instanceof Vr; ) {
                  var i = $s(n);
                  (i.__index__ = 0),
                    (i.__values__ = r),
                    e ? (s.__wrapped__ = i) : (e = i);
                  var s = i;
                  n = n.__wrapped__;
                }
                return (s.__wrapped__ = t), e;
              }),
              (Ur.prototype.reverse = function () {
                var t = this.__wrapped__;
                if (t instanceof Gr) {
                  var e = t;
                  return (
                    this.__actions__.length && (e = new Gr(this)),
                    (e = e.reverse()).__actions__.push({
                      func: go,
                      args: [eo],
                      thisArg: r,
                    }),
                    new Kr(e, this.__chain__)
                  );
                }
                return this.thru(eo);
              }),
              (Ur.prototype.toJSON =
                Ur.prototype.valueOf =
                Ur.prototype.value =
                  function () {
                    return vi(this.__wrapped__, this.__actions__);
                  }),
              (Ur.prototype.first = Ur.prototype.head),
              te &&
                (Ur.prototype[te] = function () {
                  return this;
                }),
              Ur
            );
          })();
          me ? (((me.exports = yr)._ = yr), (ye._ = yr)) : (ve._ = yr);
        }.call(us));
      })(hs, hs.exports);
      var ls = Object.defineProperty,
        ps = Object.defineProperties,
        fs = Object.getOwnPropertyDescriptors,
        ds = Object.getOwnPropertySymbols,
        gs = Object.prototype.hasOwnProperty,
        vs = Object.prototype.propertyIsEnumerable,
        ys = (t, e, r) =>
          e in t
            ? ls(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        ms = (t, e) => {
          for (var r in e || (e = {})) gs.call(e, r) && ys(t, r, e[r]);
          if (ds) for (var r of ds(e)) vs.call(e, r) && ys(t, r, e[r]);
          return t;
        },
        ws = (t, e) => ps(t, fs(e));
      function _s(t, e, r) {
        var n;
        const i = (0, s._Y)(t);
        return (
          (null == (n = e.rpcMap) ? void 0 : n[i.reference]) ||
          `https://rpc.walletconnect.com/v1/?chainId=${i.namespace}:${i.reference}&projectId=${r}`
        );
      }
      function bs(t) {
        return t.includes(":") ? t.split(":")[1] : t;
      }
      function Es(t) {
        return t.map((t) => `${t.split(":")[0]}:${t.split(":")[1]}`);
      }
      function Is(t) {
        var e, r, n, i;
        const o = {};
        if (!(0, s.aF)(t)) return o;
        for (const [a, c] of Object.entries(t)) {
          const t = (0, s.nW)(a) ? [a] : c.chains,
            u = c.methods || [],
            h = c.events || [],
            l = c.rpcMap || {},
            p = (0, s.ko)(a);
          o[p] = ws(ms(ms({}, o[p]), c), {
            chains: (0, s.TR)(t, null == (e = o[p]) ? void 0 : e.chains),
            methods: (0, s.TR)(u, null == (r = o[p]) ? void 0 : r.methods),
            events: (0, s.TR)(h, null == (n = o[p]) ? void 0 : n.events),
            rpcMap: ms(ms({}, l), null == (i = o[p]) ? void 0 : i.rpcMap),
          });
        }
        return o;
      }
      function Ps(t) {
        return t.includes(":") ? t.split(":")[2] : t;
      }
      function Ss(t) {
        const e = {};
        for (const [r, n] of Object.entries(t)) {
          const t = n.methods || [],
            i = n.events || [],
            o = n.accounts || [],
            a = (0, s.nW)(r) ? [r] : n.chains ? n.chains : Es(n.accounts);
          e[r] = { chains: a, methods: t, events: i, accounts: o };
        }
        return e;
      }
      function Os(t) {
        return "number" == typeof t
          ? t
          : t.includes("0x")
          ? parseInt(t, 16)
          : t.includes(":")
          ? Number(t.split(":")[1])
          : Number(t);
      }
      const xs = {},
        Rs = (t) => xs[t],
        As = (t, e) => {
          xs[t] = e;
        };
      class Cs {
        constructor(t) {
          (this.name = "polkadot"),
            (this.namespace = t.namespace),
            (this.events = Rs("events")),
            (this.client = Rs("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(t) {
          this.namespace = Object.assign(this.namespace, t);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const t = this.namespace.chains[0];
          if (!t) throw new Error("ChainId not found");
          return t.split(":")[1];
        }
        request(t) {
          return this.namespace.methods.includes(t.request.method)
            ? this.client.request(t)
            : this.getHttpProvider().request(t.request);
        }
        setDefaultChain(t, e) {
          this.httpProviders[t] || this.setHttpProvider(t, e),
            (this.chainId = t),
            this.events.emit(cs, `${this.name}:${t}`);
        }
        getAccounts() {
          const t = this.namespace.accounts;
          return (
            (t &&
              t
                .filter((t) => t.split(":")[1] === this.chainId.toString())
                .map((t) => t.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          const t = {};
          return (
            this.namespace.chains.forEach((e) => {
              var r;
              const n = bs(e);
              t[n] = this.createHttpProvider(
                n,
                null == (r = this.namespace.rpcMap) ? void 0 : r[e]
              );
            }),
            t
          );
        }
        getHttpProvider() {
          const t = `${this.name}:${this.chainId}`,
            e = this.httpProviders[t];
          if (typeof e > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
          return e;
        }
        setHttpProvider(t, e) {
          const r = this.createHttpProvider(t, e);
          r && (this.httpProviders[t] = r);
        }
        createHttpProvider(t, e) {
          const r = e || _s(t, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
          return new ss(new is(r, Rs("disableProviderPing")));
        }
      }
      class js {
        constructor(t) {
          (this.name = "eip155"),
            (this.namespace = t.namespace),
            (this.events = Rs("events")),
            (this.client = Rs("client")),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = parseInt(this.getDefaultChain()));
        }
        async request(t) {
          switch (t.request.method) {
            case "eth_requestAccounts":
            case "eth_accounts":
              return this.getAccounts();
            case "wallet_switchEthereumChain":
              return await this.handleSwitchChain(t);
            case "eth_chainId":
              return parseInt(this.getDefaultChain());
          }
          return this.namespace.methods.includes(t.request.method)
            ? await this.client.request(t)
            : this.getHttpProvider().request(t.request);
        }
        updateNamespace(t) {
          this.namespace = Object.assign(this.namespace, t);
        }
        setDefaultChain(t, e) {
          this.httpProviders[t] || this.setHttpProvider(parseInt(t), e),
            (this.chainId = parseInt(t)),
            this.events.emit(cs, `${this.name}:${t}`);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const t = this.namespace.chains[0];
          if (!t) throw new Error("ChainId not found");
          return t.split(":")[1];
        }
        createHttpProvider(t, e) {
          const r =
            e ||
            _s(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
          return new ss(new is(r, Rs("disableProviderPing")));
        }
        setHttpProvider(t, e) {
          const r = this.createHttpProvider(t, e);
          r && (this.httpProviders[t] = r);
        }
        createHttpProviders() {
          const t = {};
          return (
            this.namespace.chains.forEach((e) => {
              var r;
              const n = parseInt(bs(e));
              t[n] = this.createHttpProvider(
                n,
                null == (r = this.namespace.rpcMap) ? void 0 : r[e]
              );
            }),
            t
          );
        }
        getAccounts() {
          const t = this.namespace.accounts;
          return t
            ? [
                ...new Set(
                  t
                    .filter((t) => t.split(":")[1] === this.chainId.toString())
                    .map((t) => t.split(":")[2])
                ),
              ]
            : [];
        }
        getHttpProvider() {
          const t = this.chainId,
            e = this.httpProviders[t];
          if (typeof e > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
          return e;
        }
        async handleSwitchChain(t) {
          var e, r;
          let n = t.request.params
            ? null == (e = t.request.params[0])
              ? void 0
              : e.chainId
            : "0x0";
          n = n.startsWith("0x") ? n : `0x${n}`;
          const i = parseInt(n, 16);
          if (this.isChainApproved(i)) this.setDefaultChain(`${i}`);
          else {
            if (!this.namespace.methods.includes("wallet_switchEthereumChain"))
              throw new Error(
                `Failed to switch to chain 'eip155:${i}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
              );
            await this.client.request({
              topic: t.topic,
              request: { method: t.request.method, params: [{ chainId: n }] },
              chainId: null == (r = this.namespace.chains) ? void 0 : r[0],
            }),
              this.setDefaultChain(`${i}`);
          }
          return null;
        }
        isChainApproved(t) {
          return this.namespace.chains.includes(`${this.name}:${t}`);
        }
      }
      class Ts {
        constructor(t) {
          (this.name = "solana"),
            (this.namespace = t.namespace),
            (this.events = Rs("events")),
            (this.client = Rs("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(t) {
          this.namespace = Object.assign(this.namespace, t);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(t) {
          return this.namespace.methods.includes(t.request.method)
            ? this.client.request(t)
            : this.getHttpProvider().request(t.request);
        }
        setDefaultChain(t, e) {
          this.httpProviders[t] || this.setHttpProvider(t, e),
            (this.chainId = t),
            this.events.emit(cs, `${this.name}:${t}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const t = this.namespace.chains[0];
          if (!t) throw new Error("ChainId not found");
          return t.split(":")[1];
        }
        getAccounts() {
          const t = this.namespace.accounts;
          return t
            ? [
                ...new Set(
                  t
                    .filter((t) => t.split(":")[1] === this.chainId.toString())
                    .map((t) => t.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const t = {};
          return (
            this.namespace.chains.forEach((e) => {
              var r;
              const n = bs(e);
              t[n] = this.createHttpProvider(
                n,
                null == (r = this.namespace.rpcMap) ? void 0 : r[e]
              );
            }),
            t
          );
        }
        getHttpProvider() {
          const t = `${this.name}:${this.chainId}`,
            e = this.httpProviders[t];
          if (typeof e > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
          return e;
        }
        setHttpProvider(t, e) {
          const r = this.createHttpProvider(t, e);
          r && (this.httpProviders[t] = r);
        }
        createHttpProvider(t, e) {
          const r = e || _s(t, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
          return new ss(new is(r, Rs("disableProviderPing")));
        }
      }
      class Ns {
        constructor(t) {
          (this.name = "cosmos"),
            (this.namespace = t.namespace),
            (this.events = Rs("events")),
            (this.client = Rs("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(t) {
          this.namespace = Object.assign(this.namespace, t);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const t = this.namespace.chains[0];
          if (!t) throw new Error("ChainId not found");
          return t.split(":")[1];
        }
        request(t) {
          return this.namespace.methods.includes(t.request.method)
            ? this.client.request(t)
            : this.getHttpProvider().request(t.request);
        }
        setDefaultChain(t, e) {
          this.httpProviders[t] || this.setHttpProvider(t, e),
            (this.chainId = t),
            this.events.emit(cs, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          const t = this.namespace.accounts;
          return t
            ? [
                ...new Set(
                  t
                    .filter((t) => t.split(":")[1] === this.chainId.toString())
                    .map((t) => t.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const t = {};
          return (
            this.namespace.chains.forEach((e) => {
              var r;
              const n = bs(e);
              t[n] = this.createHttpProvider(
                n,
                null == (r = this.namespace.rpcMap) ? void 0 : r[e]
              );
            }),
            t
          );
        }
        getHttpProvider() {
          const t = `${this.name}:${this.chainId}`,
            e = this.httpProviders[t];
          if (typeof e > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
          return e;
        }
        setHttpProvider(t, e) {
          const r = this.createHttpProvider(t, e);
          r && (this.httpProviders[t] = r);
        }
        createHttpProvider(t, e) {
          const r = e || _s(t, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
          return new ss(new is(r, Rs("disableProviderPing")));
        }
      }
      class Ls {
        constructor(t) {
          (this.name = "cip34"),
            (this.namespace = t.namespace),
            (this.events = Rs("events")),
            (this.client = Rs("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(t) {
          this.namespace = Object.assign(this.namespace, t);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const t = this.namespace.chains[0];
          if (!t) throw new Error("ChainId not found");
          return t.split(":")[1];
        }
        request(t) {
          return this.namespace.methods.includes(t.request.method)
            ? this.client.request(t)
            : this.getHttpProvider().request(t.request);
        }
        setDefaultChain(t, e) {
          this.httpProviders[t] || this.setHttpProvider(t, e),
            (this.chainId = t),
            this.events.emit(cs, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          const t = this.namespace.accounts;
          return t
            ? [
                ...new Set(
                  t
                    .filter((t) => t.split(":")[1] === this.chainId.toString())
                    .map((t) => t.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const t = {};
          return (
            this.namespace.chains.forEach((e) => {
              const r = this.getCardanoRPCUrl(e),
                n = bs(e);
              t[n] = this.createHttpProvider(n, r);
            }),
            t
          );
        }
        getHttpProvider() {
          const t = `${this.name}:${this.chainId}`,
            e = this.httpProviders[t];
          if (typeof e > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
          return e;
        }
        getCardanoRPCUrl(t) {
          const e = this.namespace.rpcMap;
          if (e) return e[t];
        }
        setHttpProvider(t, e) {
          const r = this.createHttpProvider(t, e);
          r && (this.httpProviders[t] = r);
        }
        createHttpProvider(t, e) {
          const r = e || this.getCardanoRPCUrl(t);
          if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
          return new ss(new is(r, Rs("disableProviderPing")));
        }
      }
      class qs {
        constructor(t) {
          (this.name = "elrond"),
            (this.namespace = t.namespace),
            (this.events = Rs("events")),
            (this.client = Rs("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(t) {
          this.namespace = Object.assign(this.namespace, t);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(t) {
          return this.namespace.methods.includes(t.request.method)
            ? this.client.request(t)
            : this.getHttpProvider().request(t.request);
        }
        setDefaultChain(t, e) {
          this.httpProviders[t] || this.setHttpProvider(t, e),
            (this.chainId = t),
            this.events.emit(cs, `${this.name}:${t}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const t = this.namespace.chains[0];
          if (!t) throw new Error("ChainId not found");
          return t.split(":")[1];
        }
        getAccounts() {
          const t = this.namespace.accounts;
          return t
            ? [
                ...new Set(
                  t
                    .filter((t) => t.split(":")[1] === this.chainId.toString())
                    .map((t) => t.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const t = {};
          return (
            this.namespace.chains.forEach((e) => {
              var r;
              const n = bs(e);
              t[n] = this.createHttpProvider(
                n,
                null == (r = this.namespace.rpcMap) ? void 0 : r[e]
              );
            }),
            t
          );
        }
        getHttpProvider() {
          const t = `${this.name}:${this.chainId}`,
            e = this.httpProviders[t];
          if (typeof e > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
          return e;
        }
        setHttpProvider(t, e) {
          const r = this.createHttpProvider(t, e);
          r && (this.httpProviders[t] = r);
        }
        createHttpProvider(t, e) {
          const r = e || _s(t, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
          return new ss(new is(r, Rs("disableProviderPing")));
        }
      }
      class Ds {
        constructor(t) {
          (this.name = "multiversx"),
            (this.namespace = t.namespace),
            (this.events = Rs("events")),
            (this.client = Rs("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(t) {
          this.namespace = Object.assign(this.namespace, t);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(t) {
          return this.namespace.methods.includes(t.request.method)
            ? this.client.request(t)
            : this.getHttpProvider().request(t.request);
        }
        setDefaultChain(t, e) {
          this.httpProviders[t] || this.setHttpProvider(t, e),
            (this.chainId = t),
            this.events.emit(cs, `${this.name}:${t}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const t = this.namespace.chains[0];
          if (!t) throw new Error("ChainId not found");
          return t.split(":")[1];
        }
        getAccounts() {
          const t = this.namespace.accounts;
          return t
            ? [
                ...new Set(
                  t
                    .filter((t) => t.split(":")[1] === this.chainId.toString())
                    .map((t) => t.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const t = {};
          return (
            this.namespace.chains.forEach((e) => {
              var r;
              const n = bs(e);
              t[n] = this.createHttpProvider(
                n,
                null == (r = this.namespace.rpcMap) ? void 0 : r[e]
              );
            }),
            t
          );
        }
        getHttpProvider() {
          const t = `${this.name}:${this.chainId}`,
            e = this.httpProviders[t];
          if (typeof e > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
          return e;
        }
        setHttpProvider(t, e) {
          const r = this.createHttpProvider(t, e);
          r && (this.httpProviders[t] = r);
        }
        createHttpProvider(t, e) {
          const r = e || _s(t, this.namespace, this.client.core.projectId);
          if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
          return new ss(new is(r, Rs("disableProviderPing")));
        }
      }
      class zs {
        constructor(t) {
          (this.name = "near"),
            (this.namespace = t.namespace),
            (this.events = Rs("events")),
            (this.client = Rs("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(t) {
          this.namespace = Object.assign(this.namespace, t);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const t = this.namespace.chains[0];
          if (!t) throw new Error("ChainId not found");
          return t.split(":")[1];
        }
        request(t) {
          return this.namespace.methods.includes(t.request.method)
            ? this.client.request(t)
            : this.getHttpProvider().request(t.request);
        }
        setDefaultChain(t, e) {
          if (((this.chainId = t), !this.httpProviders[t])) {
            const r = e || _s(`${this.name}:${t}`, this.namespace);
            if (!r) throw new Error(`No RPC url provided for chainId: ${t}`);
            this.setHttpProvider(t, r);
          }
          this.events.emit(cs, `${this.name}:${this.chainId}`);
        }
        getAccounts() {
          const t = this.namespace.accounts;
          return (
            (t &&
              t
                .filter((t) => t.split(":")[1] === this.chainId.toString())
                .map((t) => t.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          const t = {};
          return (
            this.namespace.chains.forEach((e) => {
              var r;
              t[e] = this.createHttpProvider(
                e,
                null == (r = this.namespace.rpcMap) ? void 0 : r[e]
              );
            }),
            t
          );
        }
        getHttpProvider() {
          const t = `${this.name}:${this.chainId}`,
            e = this.httpProviders[t];
          if (typeof e > "u")
            throw new Error(`JSON-RPC provider for ${t} not found`);
          return e;
        }
        setHttpProvider(t, e) {
          const r = this.createHttpProvider(t, e);
          r && (this.httpProviders[t] = r);
        }
        createHttpProvider(t, e) {
          const r = e || _s(t, this.namespace);
          return typeof r > "u"
            ? void 0
            : new ss(new is(r, Rs("disableProviderPing")));
        }
      }
      var Ms = Object.defineProperty,
        ks = Object.defineProperties,
        $s = Object.getOwnPropertyDescriptors,
        Us = Object.getOwnPropertySymbols,
        Hs = Object.prototype.hasOwnProperty,
        Vs = Object.prototype.propertyIsEnumerable,
        Ks = (t, e, r) =>
          e in t
            ? Ms(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        Gs = (t, e) => {
          for (var r in e || (e = {})) Hs.call(e, r) && Ks(t, r, e[r]);
          if (Us) for (var r of Us(e)) Vs.call(e, r) && Ks(t, r, e[r]);
          return t;
        },
        Bs = (t, e) => ks(t, $s(e));
      class Fs {
        constructor(t) {
          (this.events = new (i())()),
            (this.rpcProviders = {}),
            (this.shouldAbortPairingAttempt = !1),
            (this.maxPairingAttempts = 10),
            (this.disableProviderPing = !1),
            (this.providerOpts = t),
            (this.logger =
              typeof (null === t || void 0 === t ? void 0 : t.logger) < "u" &&
              "string" !=
                typeof (null === t || void 0 === t ? void 0 : t.logger)
                ? t.logger
                : $()(
                    Z({
                      level:
                        (null === t || void 0 === t ? void 0 : t.logger) || os,
                    })
                  )),
            (this.disableProviderPing =
              (null === t || void 0 === t ? void 0 : t.disableProviderPing) ||
              !1);
        }
        static async init(t) {
          const e = new Fs(t);
          return await e.initialize(), e;
        }
        async request(t, e) {
          const [r, n] = this.validateChain(e);
          if (!this.session)
            throw new Error("Please call connect() before request()");
          return await this.getProvider(r).request({
            request: Gs({}, t),
            chainId: `${r}:${n}`,
            topic: this.session.topic,
          });
        }
        sendAsync(t, e, r) {
          const n = new Date().getTime();
          this.request(t, r)
            .then((t) => e(null, Bt(n, t)))
            .catch((t) => e(t, void 0));
        }
        async enable() {
          if (!this.client) throw new Error("Sign Client not initialized");
          return (
            this.session ||
              (await this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
              })),
            await this.requestAccounts()
          );
        }
        async disconnect() {
          var t;
          if (!this.session)
            throw new Error("Please call connect() before enable()");
          await this.client.disconnect({
            topic: null == (t = this.session) ? void 0 : t.topic,
            reason: (0, s.Hj)("USER_DISCONNECTED"),
          }),
            await this.cleanup();
        }
        async connect(t) {
          if (!this.client) throw new Error("Sign Client not initialized");
          if (
            (this.setNamespaces(t),
            await this.cleanupPendingPairings(),
            !t.skipPairing)
          )
            return await this.pair(t.pairingTopic);
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        get isWalletConnect() {
          return !0;
        }
        async pair(t) {
          this.shouldAbortPairingAttempt = !1;
          let e = 0;
          do {
            if (this.shouldAbortPairingAttempt)
              throw new Error("Pairing aborted");
            if (e >= this.maxPairingAttempts)
              throw new Error("Max auto pairing attempts reached");
            const { uri: r, approval: n } = await this.client.connect({
              pairingTopic: t,
              requiredNamespaces: this.namespaces,
              optionalNamespaces: this.optionalNamespaces,
              sessionProperties: this.sessionProperties,
            });
            r && ((this.uri = r), this.events.emit("display_uri", r)),
              await n()
                .then((t) => {
                  (this.session = t),
                    this.namespaces ||
                      ((this.namespaces = Ss(t.namespaces)),
                      this.persist("namespaces", this.namespaces));
                })
                .catch((t) => {
                  if (t.message !== Si) throw t;
                  e++;
                });
          } while (!this.session);
          return this.onConnect(), this.session;
        }
        setDefaultChain(t, e) {
          try {
            if (!this.session) return;
            const [r, n] = this.validateChain(t);
            this.getProvider(r).setDefaultChain(n, e);
          } catch (r) {
            if (!/Please call connect/.test(r.message)) throw r;
          }
        }
        async cleanupPendingPairings() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.logger.info("Cleaning up inactive pairings...");
          const e = this.client.pairing.getAll();
          if ((0, s.OP)(e)) {
            for (const r of e)
              t.deletePairings
                ? this.client.core.expirer.set(r.topic, 0)
                : await this.client.core.relayer.subscriber.unsubscribe(
                    r.topic
                  );
            this.logger.info(`Inactive pairings cleared: ${e.length}`);
          }
        }
        abortPairingAttempt() {
          this.shouldAbortPairingAttempt = !0;
        }
        async checkStorage() {
          if (
            ((this.namespaces = await this.getFromStore("namespaces")),
            (this.optionalNamespaces =
              (await this.getFromStore("optionalNamespaces")) || {}),
            this.client.session.length)
          ) {
            const t = this.client.session.keys.length - 1;
            (this.session = this.client.session.get(
              this.client.session.keys[t]
            )),
              this.createProviders();
          }
        }
        async initialize() {
          this.logger.trace("Initialized"),
            await this.createClient(),
            await this.checkStorage(),
            this.registerEventListeners();
        }
        async createClient() {
          (this.client =
            this.providerOpts.client ||
            (await Gi.init({
              logger: this.providerOpts.logger || os,
              relayUrl:
                this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
              projectId: this.providerOpts.projectId,
              metadata: this.providerOpts.metadata,
              storageOptions: this.providerOpts.storageOptions,
              storage: this.providerOpts.storage,
              name: this.providerOpts.name,
            }))),
            this.logger.trace("SignClient Initialized");
        }
        createProviders() {
          if (!this.client) throw new Error("Sign Client not initialized");
          if (!this.session)
            throw new Error(
              "Session not initialized. Please call connect() before enable()"
            );
          const t = [
            ...new Set(
              Object.keys(this.session.namespaces).map((t) => (0, s.ko)(t))
            ),
          ];
          As("client", this.client),
            As("events", this.events),
            As("disableProviderPing", this.disableProviderPing),
            t.forEach((t) => {
              if (!this.session) return;
              const e = (function (t, e) {
                  const r = Object.keys(e.namespaces).filter((e) =>
                    e.includes(t)
                  );
                  if (!r.length) return [];
                  const n = [];
                  return (
                    r.forEach((t) => {
                      const r = e.namespaces[t].accounts;
                      n.push(...r);
                    }),
                    n
                  );
                })(t, this.session),
                r = Es(e),
                n = (function () {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  const e = Is(
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {}
                    ),
                    r = Is(t);
                  return hs.exports.merge(e, r);
                })(this.namespaces, this.optionalNamespaces),
                i = Bs(Gs({}, n[t]), { accounts: e, chains: r });
              switch (t) {
                case "eip155":
                  this.rpcProviders[t] = new js({ namespace: i });
                  break;
                case "solana":
                  this.rpcProviders[t] = new Ts({ namespace: i });
                  break;
                case "cosmos":
                  this.rpcProviders[t] = new Ns({ namespace: i });
                  break;
                case "polkadot":
                  this.rpcProviders[t] = new Cs({ namespace: i });
                  break;
                case "cip34":
                  this.rpcProviders[t] = new Ls({ namespace: i });
                  break;
                case "elrond":
                  this.rpcProviders[t] = new qs({ namespace: i });
                  break;
                case "multiversx":
                  this.rpcProviders[t] = new Ds({ namespace: i });
                  break;
                case "near":
                  this.rpcProviders[t] = new zs({ namespace: i });
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > "u")
            throw new Error("Sign Client is not initialized");
          this.client.on("session_ping", (t) => {
            this.events.emit("session_ping", t);
          }),
            this.client.on("session_event", (t) => {
              const { params: e } = t,
                { event: r } = e;
              if ("accountsChanged" === r.name) {
                const t = r.data;
                t &&
                  (0, s.OP)(t) &&
                  this.events.emit("accountsChanged", t.map(Ps));
              } else if ("chainChanged" === r.name) {
                const t = e.chainId,
                  r = e.event.data,
                  n = (0, s.ko)(t),
                  i = Os(t) !== Os(r) ? `${n}:${Os(r)}` : t;
                this.onChainChanged(i);
              } else this.events.emit(r.name, r.data);
              this.events.emit("session_event", t);
            }),
            this.client.on("session_update", (t) => {
              let { topic: e, params: r } = t;
              var n;
              const { namespaces: i } = r,
                s = null == (n = this.client) ? void 0 : n.session.get(e);
              (this.session = Bs(Gs({}, s), { namespaces: i })),
                this.onSessionUpdate(),
                this.events.emit("session_update", { topic: e, params: r });
            }),
            this.client.on("session_delete", async (t) => {
              await this.cleanup(),
                this.events.emit("session_delete", t),
                this.events.emit(
                  "disconnect",
                  Bs(Gs({}, (0, s.Hj)("USER_DISCONNECTED")), { data: t.topic })
                );
            }),
            this.on(cs, (t) => {
              this.onChainChanged(t, !0);
            });
        }
        getProvider(t) {
          if (!this.rpcProviders[t])
            throw new Error(`Provider not found: ${t}`);
          return this.rpcProviders[t];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((t) => {
            var e;
            this.getProvider(t).updateNamespace(
              null == (e = this.session) ? void 0 : e.namespaces[t]
            );
          });
        }
        setNamespaces(t) {
          const {
            namespaces: e,
            optionalNamespaces: r,
            sessionProperties: n,
          } = t;
          e && Object.keys(e).length && (this.namespaces = e),
            r && Object.keys(r).length && (this.optionalNamespaces = r),
            (this.sessionProperties = n),
            this.persist("namespaces", e),
            this.persist("optionalNamespaces", r);
        }
        validateChain(t) {
          const [e, r] = (null === t || void 0 === t
            ? void 0
            : t.split(":")) || ["", ""];
          if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [e, r];
          if (
            e &&
            !Object.keys(this.namespaces || {})
              .map((t) => (0, s.ko)(t))
              .includes(e)
          )
            throw new Error(
              `Namespace '${e}' is not configured. Please call connect() first with namespace config.`
            );
          if (e && r) return [e, r];
          const n = (0, s.ko)(Object.keys(this.namespaces)[0]);
          return [n, this.rpcProviders[n].getDefaultChain()];
        }
        async requestAccounts() {
          const [t] = this.validateChain();
          return await this.getProvider(t).requestAccounts();
        }
        onChainChanged(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          var r;
          if (!this.namespaces) return;
          const [n, i] = this.validateChain(t);
          e || this.getProvider(n).setDefaultChain(i),
            ((null != (r = this.namespaces[n])
              ? r
              : this.namespaces[`${n}:${i}`]
            ).defaultChain = i),
            this.persist("namespaces", this.namespaces),
            this.events.emit("chainChanged", i);
        }
        onConnect() {
          this.createProviders(),
            this.events.emit("connect", { session: this.session });
        }
        async cleanup() {
          (this.session = void 0),
            (this.namespaces = void 0),
            (this.optionalNamespaces = void 0),
            (this.sessionProperties = void 0),
            this.persist("namespaces", void 0),
            this.persist("optionalNamespaces", void 0),
            this.persist("sessionProperties", void 0),
            await this.cleanupPendingPairings({ deletePairings: !0 });
        }
        persist(t, e) {
          this.client.core.storage.setItem(`${as}/${t}`, e);
        }
        async getFromStore(t) {
          return await this.client.core.storage.getItem(`${as}/${t}`);
        }
      }
      const Ws = Fs,
        Qs = ["eth_sendTransaction", "personal_sign"],
        Js = [
          "eth_accounts",
          "eth_requestAccounts",
          "eth_sendRawTransaction",
          "eth_sign",
          "eth_signTransaction",
          "eth_signTypedData",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "eth_sendTransaction",
          "personal_sign",
          "wallet_switchEthereumChain",
          "wallet_addEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
        ],
        Ys = ["chainChanged", "accountsChanged"],
        Zs = [
          "chainChanged",
          "accountsChanged",
          "message",
          "disconnect",
          "connect",
        ];
      var Xs = Object.defineProperty,
        to = Object.defineProperties,
        eo = Object.getOwnPropertyDescriptors,
        ro = Object.getOwnPropertySymbols,
        no = Object.prototype.hasOwnProperty,
        io = Object.prototype.propertyIsEnumerable,
        so = (t, e, r) =>
          e in t
            ? Xs(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        oo = (t, e) => {
          for (var r in e || (e = {})) no.call(e, r) && so(t, r, e[r]);
          if (ro) for (var r of ro(e)) io.call(e, r) && so(t, r, e[r]);
          return t;
        },
        ao = (t, e) => to(t, eo(e));
      function co(t) {
        return Number(t[0].split(":")[1]);
      }
      function uo(t) {
        return `0x${t.toString(16)}`;
      }
      class ho {
        constructor() {
          (this.events = new n.EventEmitter()),
            (this.namespace = "eip155"),
            (this.accounts = []),
            (this.chainId = 1),
            (this.STORAGE_KEY = "wc@2:ethereum_provider:"),
            (this.on = (t, e) => (this.events.on(t, e), this)),
            (this.once = (t, e) => (this.events.once(t, e), this)),
            (this.removeListener = (t, e) => (
              this.events.removeListener(t, e), this
            )),
            (this.off = (t, e) => (this.events.off(t, e), this)),
            (this.parseAccount = (t) =>
              this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t),
            (this.signer = {}),
            (this.rpc = {});
        }
        static async init(t) {
          const e = new ho();
          return await e.initialize(t), e;
        }
        async request(t) {
          return await this.signer.request(t, this.formatChainId(this.chainId));
        }
        sendAsync(t, e) {
          this.signer.sendAsync(t, e, this.formatChainId(this.chainId));
        }
        get connected() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connected
          );
        }
        get connecting() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connecting
          );
        }
        async enable() {
          return (
            this.session || (await this.connect()),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async connect(t) {
          if (!this.signer.client)
            throw new Error("Provider not initialized. Call init() first");
          this.loadConnectOpts(t);
          const { required: e, optional: r } = (function (t) {
            const {
              chains: e,
              optionalChains: r,
              methods: n,
              optionalMethods: i,
              events: o,
              optionalEvents: a,
              rpcMap: c,
            } = t;
            if (!(0, s.OP)(e)) throw new Error("Invalid chains");
            const u = {
                chains: e,
                methods: n || Qs,
                events: o || Ys,
                rpcMap: oo({}, e.length ? { [co(e)]: c[co(e)] } : {}),
              },
              h =
                null === o || void 0 === o
                  ? void 0
                  : o.filter((t) => !Ys.includes(t)),
              l =
                null === n || void 0 === n
                  ? void 0
                  : n.filter((t) => !Qs.includes(t));
            if (
              !r &&
              !a &&
              !i &&
              (null == h || !h.length) &&
              (null == l || !l.length)
            )
              return { required: e.length ? u : void 0 };
            const p =
                ((null === h || void 0 === h ? void 0 : h.length) &&
                  (null === l || void 0 === l ? void 0 : l.length)) ||
                !r,
              f = {
                chains: [...new Set(p ? u.chains.concat(r || []) : r)],
                methods: [
                  ...new Set(u.methods.concat(null != i && i.length ? i : Js)),
                ],
                events: [
                  ...new Set(u.events.concat(null != a && a.length ? a : Zs)),
                ],
                rpcMap: c,
              };
            return {
              required: e.length ? u : void 0,
              optional: r.length ? f : void 0,
            };
          })(this.rpc);
          try {
            const n = await new Promise(async (n, i) => {
              var s;
              this.rpc.showQrModal &&
                (null == (s = this.modal) ||
                  s.subscribeModal((t) => {
                    !t.open &&
                      !this.signer.session &&
                      (this.signer.abortPairingAttempt(),
                      i(
                        new Error("Connection request reset. Please try again.")
                      ));
                  })),
                await this.signer
                  .connect(
                    ao(
                      oo(
                        { namespaces: oo({}, e && { [this.namespace]: e }) },
                        r && { optionalNamespaces: { [this.namespace]: r } }
                      ),
                      {
                        pairingTopic:
                          null === t || void 0 === t ? void 0 : t.pairingTopic,
                      }
                    )
                  )
                  .then((t) => {
                    n(t);
                  })
                  .catch((t) => {
                    i(new Error(t.message));
                  });
            });
            if (!n) return;
            const i = (0, s.Zz)(n.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : i),
              this.setAccounts(i),
              this.events.emit("connect", { chainId: uo(this.chainId) });
          } catch (H) {
            throw (this.signer.logger.error(H), H);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async disconnect() {
          this.session && (await this.signer.disconnect()), this.reset();
        }
        get isWalletConnect() {
          return !0;
        }
        get session() {
          return this.signer.session;
        }
        registerEventListeners() {
          this.signer.on("session_event", (t) => {
            const { params: e } = t,
              { event: r } = e;
            "accountsChanged" === r.name
              ? ((this.accounts = this.parseAccounts(r.data)),
                this.events.emit("accountsChanged", this.accounts))
              : "chainChanged" === r.name
              ? this.setChainId(this.formatChainId(r.data))
              : this.events.emit(r.name, r.data),
              this.events.emit("session_event", t);
          }),
            this.signer.on("chainChanged", (t) => {
              const e = parseInt(t);
              (this.chainId = e),
                this.events.emit("chainChanged", uo(this.chainId)),
                this.persist();
            }),
            this.signer.on("session_update", (t) => {
              this.events.emit("session_update", t);
            }),
            this.signer.on("session_delete", (t) => {
              this.reset(),
                this.events.emit("session_delete", t),
                this.events.emit(
                  "disconnect",
                  ao(oo({}, (0, s.Hj)("USER_DISCONNECTED")), {
                    data: t.topic,
                    name: "USER_DISCONNECTED",
                  })
                );
            }),
            this.signer.on("display_uri", (t) => {
              var e, r;
              this.rpc.showQrModal &&
                (null == (e = this.modal) || e.closeModal(),
                null == (r = this.modal) || r.openModal({ uri: t })),
                this.events.emit("display_uri", t);
            });
        }
        switchEthereumChain(t) {
          this.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: t.toString(16) }],
          });
        }
        isCompatibleChainId(t) {
          return "string" == typeof t && t.startsWith(`${this.namespace}:`);
        }
        formatChainId(t) {
          return `${this.namespace}:${t}`;
        }
        parseChainId(t) {
          return Number(t.split(":")[1]);
        }
        setChainIds(t) {
          const e = t
            .filter((t) => this.isCompatibleChainId(t))
            .map((t) => this.parseChainId(t));
          e.length &&
            ((this.chainId = e[0]),
            this.events.emit("chainChanged", uo(this.chainId)),
            this.persist());
        }
        setChainId(t) {
          if (this.isCompatibleChainId(t)) {
            const e = this.parseChainId(t);
            (this.chainId = e), this.switchEthereumChain(e);
          }
        }
        parseAccountId(t) {
          const [e, r, n] = t.split(":");
          return { chainId: `${e}:${r}`, address: n };
        }
        setAccounts(t) {
          (this.accounts = t
            .filter(
              (t) =>
                this.parseChainId(this.parseAccountId(t).chainId) ===
                this.chainId
            )
            .map((t) => this.parseAccountId(t).address)),
            this.events.emit("accountsChanged", this.accounts);
        }
        getRpcConfig(t) {
          var e, r;
          const n =
              null != (e = null === t || void 0 === t ? void 0 : t.chains)
                ? e
                : [],
            i =
              null !=
              (r = null === t || void 0 === t ? void 0 : t.optionalChains)
                ? r
                : [],
            s = n.concat(i);
          if (!s.length)
            throw new Error(
              "No chains specified in either `chains` or `optionalChains`"
            );
          const o = n.length
              ? (null === t || void 0 === t ? void 0 : t.methods) || Qs
              : [],
            a = n.length
              ? (null === t || void 0 === t ? void 0 : t.events) || Ys
              : [],
            c = (null === t || void 0 === t ? void 0 : t.optionalMethods) || [],
            u = (null === t || void 0 === t ? void 0 : t.optionalEvents) || [],
            h =
              (null === t || void 0 === t ? void 0 : t.rpcMap) ||
              this.buildRpcMap(s, t.projectId),
            l =
              (null === t || void 0 === t ? void 0 : t.qrModalOptions) ||
              void 0;
          return {
            chains:
              null === n || void 0 === n
                ? void 0
                : n.map((t) => this.formatChainId(t)),
            optionalChains: i.map((t) => this.formatChainId(t)),
            methods: o,
            events: a,
            optionalMethods: c,
            optionalEvents: u,
            rpcMap: h,
            showQrModal: !(null == t || !t.showQrModal),
            qrModalOptions: l,
            projectId: t.projectId,
            metadata: t.metadata,
          };
        }
        buildRpcMap(t, e) {
          const r = {};
          return (
            t.forEach((t) => {
              r[t] = this.getRpcUrl(t, e);
            }),
            r
          );
        }
        async initialize(t) {
          if (
            ((this.rpc = this.getRpcConfig(t)),
            (this.chainId = this.rpc.chains.length
              ? co(this.rpc.chains)
              : co(this.rpc.optionalChains)),
            (this.signer = await Ws.init({
              projectId: this.rpc.projectId,
              metadata: this.rpc.metadata,
              disableProviderPing: t.disableProviderPing,
              relayUrl: t.relayUrl,
              storageOptions: t.storageOptions,
            })),
            this.registerEventListeners(),
            await this.loadPersistedSession(),
            this.rpc.showQrModal)
          ) {
            let t;
            try {
              const { WalletConnectModal: e } = await r
                .e(348)
                .then(r.bind(r, 64348));
              t = e;
            } catch {
              throw new Error(
                "To use QR modal, please install @walletconnect/modal package"
              );
            }
            if (t)
              try {
                this.modal = new t(
                  oo({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions)
                );
              } catch (J) {
                throw (
                  (this.signer.logger.error(J),
                  new Error("Could not generate WalletConnectModal Instance"))
                );
              }
          }
        }
        loadConnectOpts(t) {
          if (!t) return;
          const { chains: e, optionalChains: r, rpcMap: n } = t;
          e &&
            (0, s.OP)(e) &&
            ((this.rpc.chains = e.map((t) => this.formatChainId(t))),
            e.forEach((t) => {
              this.rpc.rpcMap[t] =
                (null === n || void 0 === n ? void 0 : n[t]) ||
                this.getRpcUrl(t);
            })),
            r &&
              (0, s.OP)(r) &&
              ((this.rpc.optionalChains = []),
              (this.rpc.optionalChains =
                null === r || void 0 === r
                  ? void 0
                  : r.map((t) => this.formatChainId(t))),
              r.forEach((t) => {
                this.rpc.rpcMap[t] =
                  (null === n || void 0 === n ? void 0 : n[t]) ||
                  this.getRpcUrl(t);
              }));
        }
        getRpcUrl(t, e) {
          var r;
          return (
            (null == (r = this.rpc.rpcMap) ? void 0 : r[t]) ||
            `https://rpc.walletconnect.com/v1/?chainId=eip155:${t}&projectId=${
              e || this.rpc.projectId
            }`
          );
        }
        async loadPersistedSession() {
          if (!this.session) return;
          const t = await this.signer.client.core.storage.getItem(
              `${this.STORAGE_KEY}/chainId`
            ),
            e = this.session.namespaces[`${this.namespace}:${t}`]
              ? this.session.namespaces[`${this.namespace}:${t}`]
              : this.session.namespaces[this.namespace];
          this.setChainIds(
            t
              ? [this.formatChainId(t)]
              : null === e || void 0 === e
              ? void 0
              : e.accounts
          ),
            this.setAccounts(null === e || void 0 === e ? void 0 : e.accounts);
        }
        reset() {
          (this.chainId = 1), (this.accounts = []);
        }
        persist() {
          this.session &&
            this.signer.client.core.storage.setItem(
              `${this.STORAGE_KEY}/chainId`,
              this.chainId
            );
        }
        parseAccounts(t) {
          return "string" == typeof t || t instanceof String
            ? [this.parseAccount(t)]
            : t.map((t) => this.parseAccount(t));
        }
      }
      const lo = ho;
    },
    16454: (t, e, r) => {
      "use strict";
      r.d(e, { H: () => n });
      class n {}
    },
    29487: (t, e, r) => {
      "use strict";
      r.r(e), r.d(e, { IEvents: () => n.H });
      var n = r(16454);
    },
    73081: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.HEARTBEAT_EVENTS = e.HEARTBEAT_INTERVAL = void 0);
      const n = r(50878);
      (e.HEARTBEAT_INTERVAL = n.FIVE_SECONDS),
        (e.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" });
    },
    20169: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      r(76559).__exportStar(r(73081), e);
    },
    29283: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.HeartBeat = void 0);
      const n = r(76559),
        i = r(28981),
        s = r(50878),
        o = r(80909),
        a = r(20169);
      class c extends o.IHeartBeat {
        constructor(t) {
          super(t),
            (this.events = new i.EventEmitter()),
            (this.interval = a.HEARTBEAT_INTERVAL),
            (this.interval =
              (null === t || void 0 === t ? void 0 : t.interval) ||
              a.HEARTBEAT_INTERVAL);
        }
        static init(t) {
          return n.__awaiter(this, void 0, void 0, function* () {
            const e = new c(t);
            return yield e.init(), e;
          });
        }
        init() {
          return n.__awaiter(this, void 0, void 0, function* () {
            yield this.initialize();
          });
        }
        stop() {
          clearInterval(this.intervalRef);
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        initialize() {
          return n.__awaiter(this, void 0, void 0, function* () {
            this.intervalRef = setInterval(
              () => this.pulse(),
              s.toMiliseconds(this.interval)
            );
          });
        }
        pulse() {
          this.events.emit(a.HEARTBEAT_EVENTS.pulse);
        }
      }
      e.HeartBeat = c;
    },
    80391: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      const n = r(76559);
      n.__exportStar(r(29283), e),
        n.__exportStar(r(80909), e),
        n.__exportStar(r(20169), e);
    },
    18517: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.IHeartBeat = void 0);
      const n = r(29487);
      class i extends n.IEvents {
        constructor(t) {
          super();
        }
      }
      e.IHeartBeat = i;
    },
    80909: (t, e, r) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      r(76559).__exportStar(r(18517), e);
    },
    76559: (t, e, r) => {
      "use strict";
      r.r(e),
        r.d(e, {
          __assign: () => s,
          __asyncDelegator: () => _,
          __asyncGenerator: () => w,
          __asyncValues: () => b,
          __await: () => m,
          __awaiter: () => h,
          __classPrivateFieldGet: () => S,
          __classPrivateFieldSet: () => O,
          __createBinding: () => p,
          __decorate: () => a,
          __exportStar: () => f,
          __extends: () => i,
          __generator: () => l,
          __importDefault: () => P,
          __importStar: () => I,
          __makeTemplateObject: () => E,
          __metadata: () => u,
          __param: () => c,
          __read: () => g,
          __rest: () => o,
          __spread: () => v,
          __spreadArrays: () => y,
          __values: () => d,
        });
      var n = function (t, e) {
        return (
          (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            }),
          n(t, e)
        );
      };
      function i(t, e) {
        function r() {
          this.constructor = t;
        }
        n(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      }
      var s = function () {
        return (
          (s =
            Object.assign ||
            function (t) {
              for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in (e = arguments[r]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }),
          s.apply(this, arguments)
        );
      };
      function o(t, e) {
        var r = {};
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) &&
            e.indexOf(n) < 0 &&
            (r[n] = t[n]);
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(t); i < n.length; i++)
            e.indexOf(n[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, n[i]) &&
              (r[n[i]] = t[n[i]]);
        }
        return r;
      }
      function a(t, e, r, n) {
        var i,
          s = arguments.length,
          o =
            s < 3
              ? e
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(e, r))
              : n;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          o = Reflect.decorate(t, e, r, n);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (i = t[a]) &&
              (o = (s < 3 ? i(o) : s > 3 ? i(e, r, o) : i(e, r)) || o);
        return s > 3 && o && Object.defineProperty(e, r, o), o;
      }
      function c(t, e) {
        return function (r, n) {
          e(r, n, t);
        };
      }
      function u(t, e) {
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.metadata
        )
          return Reflect.metadata(t, e);
      }
      function h(t, e, r, n) {
        return new (r || (r = Promise))(function (i, s) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (e) {
              s(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              s(e);
            }
          }
          function c(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })).then(o, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      }
      function l(t, e) {
        var r,
          n,
          i,
          s,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (s = { next: a(0), throw: a(1), return: a(2) }),
          "function" === typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(s) {
          return function (a) {
            return (function (s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & s[0]
                          ? n.return
                          : s[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, s[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return o.label++, { value: s[1], done: !1 };
                    case 5:
                      o.label++, (n = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                        (6 === s[0] || 2 === s[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        o.label = s[1];
                        break;
                      }
                      if (6 === s[0] && o.label < i[1]) {
                        (o.label = i[1]), (i = s);
                        break;
                      }
                      if (i && o.label < i[2]) {
                        (o.label = i[2]), o.ops.push(s);
                        break;
                      }
                      i[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  s = e.call(t, o);
                } catch (a) {
                  (s = [6, a]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, a]);
          };
        }
      }
      function p(t, e, r, n) {
        void 0 === n && (n = r), (t[n] = e[r]);
      }
      function f(t, e) {
        for (var r in t)
          "default" === r || e.hasOwnProperty(r) || (e[r] = t[r]);
      }
      function d(t) {
        var e = "function" === typeof Symbol && Symbol.iterator,
          r = e && t[e],
          n = 0;
        if (r) return r.call(t);
        if (t && "number" === typeof t.length)
          return {
            next: function () {
              return (
                t && n >= t.length && (t = void 0),
                { value: t && t[n++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function g(t, e) {
        var r = "function" === typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var n,
          i,
          s = r.call(t),
          o = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(n = s.next()).done; )
            o.push(n.value);
        } catch (a) {
          i = { error: a };
        } finally {
          try {
            n && !n.done && (r = s.return) && r.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
        return o;
      }
      function v() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t = t.concat(g(arguments[e]));
        return t;
      }
      function y() {
        for (var t = 0, e = 0, r = arguments.length; e < r; e++)
          t += arguments[e].length;
        var n = Array(t),
          i = 0;
        for (e = 0; e < r; e++)
          for (var s = arguments[e], o = 0, a = s.length; o < a; o++, i++)
            n[i] = s[o];
        return n;
      }
      function m(t) {
        return this instanceof m ? ((this.v = t), this) : new m(t);
      }
      function w(t, e, r) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var n,
          i = r.apply(t, e || []),
          s = [];
        return (
          (n = {}),
          o("next"),
          o("throw"),
          o("return"),
          (n[Symbol.asyncIterator] = function () {
            return this;
          }),
          n
        );
        function o(t) {
          i[t] &&
            (n[t] = function (e) {
              return new Promise(function (r, n) {
                s.push([t, e, r, n]) > 1 || a(t, e);
              });
            });
        }
        function a(t, e) {
          try {
            (r = i[t](e)).value instanceof m
              ? Promise.resolve(r.value.v).then(c, u)
              : h(s[0][2], r);
          } catch (n) {
            h(s[0][3], n);
          }
          var r;
        }
        function c(t) {
          a("next", t);
        }
        function u(t) {
          a("throw", t);
        }
        function h(t, e) {
          t(e), s.shift(), s.length && a(s[0][0], s[0][1]);
        }
      }
      function _(t) {
        var e, r;
        return (
          (e = {}),
          n("next"),
          n("throw", function (t) {
            throw t;
          }),
          n("return"),
          (e[Symbol.iterator] = function () {
            return this;
          }),
          e
        );
        function n(n, i) {
          e[n] = t[n]
            ? function (e) {
                return (r = !r)
                  ? { value: m(t[n](e)), done: "return" === n }
                  : i
                  ? i(e)
                  : e;
              }
            : i;
        }
      }
      function b(t) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var e,
          r = t[Symbol.asyncIterator];
        return r
          ? r.call(t)
          : ((t = d(t)),
            (e = {}),
            n("next"),
            n("throw"),
            n("return"),
            (e[Symbol.asyncIterator] = function () {
              return this;
            }),
            e);
        function n(r) {
          e[r] =
            t[r] &&
            function (e) {
              return new Promise(function (n, i) {
                (function (t, e, r, n) {
                  Promise.resolve(n).then(function (e) {
                    t({ value: e, done: r });
                  }, e);
                })(n, i, (e = t[r](e)).done, e.value);
              });
            };
        }
      }
      function E(t, e) {
        return (
          Object.defineProperty
            ? Object.defineProperty(t, "raw", { value: e })
            : (t.raw = e),
          t
        );
      }
      function I(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return (e.default = t), e;
      }
      function P(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function S(t, e) {
        if (!e.has(t))
          throw new TypeError("attempted to get private field on non-instance");
        return e.get(t);
      }
      function O(t, e, r) {
        if (!e.has(t))
          throw new TypeError("attempted to set private field on non-instance");
        return e.set(t, r), r;
      }
    },
    28023: () => {},
    96487: function (t, e) {
      var r = "undefined" !== typeof self ? self : this,
        n = (function () {
          function t() {
            (this.fetch = !1), (this.DOMException = r.DOMException);
          }
          return (t.prototype = r), new t();
        })();
      !(function (t) {
        !(function (e) {
          var r = "URLSearchParams" in t,
            n = "Symbol" in t && "iterator" in Symbol,
            i =
              "FileReader" in t &&
              "Blob" in t &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (t) {
                  return !1;
                }
              })(),
            s = "FormData" in t,
            o = "ArrayBuffer" in t;
          if (o)
            var a = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]",
              ],
              c =
                ArrayBuffer.isView ||
                function (t) {
                  return t && a.indexOf(Object.prototype.toString.call(t)) > -1;
                };
          function u(t) {
            if (
              ("string" !== typeof t && (t = String(t)),
              /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))
            )
              throw new TypeError("Invalid character in header field name");
            return t.toLowerCase();
          }
          function h(t) {
            return "string" !== typeof t && (t = String(t)), t;
          }
          function l(t) {
            var e = {
              next: function () {
                var e = t.shift();
                return { done: void 0 === e, value: e };
              },
            };
            return (
              n &&
                (e[Symbol.iterator] = function () {
                  return e;
                }),
              e
            );
          }
          function p(t) {
            (this.map = {}),
              t instanceof p
                ? t.forEach(function (t, e) {
                    this.append(e, t);
                  }, this)
                : Array.isArray(t)
                ? t.forEach(function (t) {
                    this.append(t[0], t[1]);
                  }, this)
                : t &&
                  Object.getOwnPropertyNames(t).forEach(function (e) {
                    this.append(e, t[e]);
                  }, this);
          }
          function f(t) {
            if (t.bodyUsed)
              return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0;
          }
          function d(t) {
            return new Promise(function (e, r) {
              (t.onload = function () {
                e(t.result);
              }),
                (t.onerror = function () {
                  r(t.error);
                });
            });
          }
          function g(t) {
            var e = new FileReader(),
              r = d(e);
            return e.readAsArrayBuffer(t), r;
          }
          function v(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer;
          }
          function y() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (t) {
                var e;
                (this._bodyInit = t),
                  t
                    ? "string" === typeof t
                      ? (this._bodyText = t)
                      : i && Blob.prototype.isPrototypeOf(t)
                      ? (this._bodyBlob = t)
                      : s && FormData.prototype.isPrototypeOf(t)
                      ? (this._bodyFormData = t)
                      : r && URLSearchParams.prototype.isPrototypeOf(t)
                      ? (this._bodyText = t.toString())
                      : o && i && (e = t) && DataView.prototype.isPrototypeOf(e)
                      ? ((this._bodyArrayBuffer = v(t.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : o && (ArrayBuffer.prototype.isPrototypeOf(t) || c(t))
                      ? (this._bodyArrayBuffer = v(t))
                      : (this._bodyText = t = Object.prototype.toString.call(t))
                    : (this._bodyText = ""),
                  this.headers.get("content-type") ||
                    ("string" === typeof t
                      ? this.headers.set(
                          "content-type",
                          "text/plain;charset=UTF-8"
                        )
                      : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set("content-type", this._bodyBlob.type)
                      : r &&
                        URLSearchParams.prototype.isPrototypeOf(t) &&
                        this.headers.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8"
                        ));
              }),
              i &&
                ((this.blob = function () {
                  var t = f(this);
                  if (t) return t;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                  return Promise.resolve(new Blob([this._bodyText]));
                }),
                (this.arrayBuffer = function () {
                  return this._bodyArrayBuffer
                    ? f(this) || Promise.resolve(this._bodyArrayBuffer)
                    : this.blob().then(g);
                })),
              (this.text = function () {
                var t = f(this);
                if (t) return t;
                if (this._bodyBlob)
                  return (function (t) {
                    var e = new FileReader(),
                      r = d(e);
                    return e.readAsText(t), r;
                  })(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (t) {
                      for (
                        var e = new Uint8Array(t),
                          r = new Array(e.length),
                          n = 0;
                        n < e.length;
                        n++
                      )
                        r[n] = String.fromCharCode(e[n]);
                      return r.join("");
                    })(this._bodyArrayBuffer)
                  );
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              }),
              s &&
                (this.formData = function () {
                  return this.text().then(_);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (p.prototype.append = function (t, e) {
            (t = u(t)), (e = h(e));
            var r = this.map[t];
            this.map[t] = r ? r + ", " + e : e;
          }),
            (p.prototype.delete = function (t) {
              delete this.map[u(t)];
            }),
            (p.prototype.get = function (t) {
              return (t = u(t)), this.has(t) ? this.map[t] : null;
            }),
            (p.prototype.has = function (t) {
              return this.map.hasOwnProperty(u(t));
            }),
            (p.prototype.set = function (t, e) {
              this.map[u(t)] = h(e);
            }),
            (p.prototype.forEach = function (t, e) {
              for (var r in this.map)
                this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
            }),
            (p.prototype.keys = function () {
              var t = [];
              return (
                this.forEach(function (e, r) {
                  t.push(r);
                }),
                l(t)
              );
            }),
            (p.prototype.values = function () {
              var t = [];
              return (
                this.forEach(function (e) {
                  t.push(e);
                }),
                l(t)
              );
            }),
            (p.prototype.entries = function () {
              var t = [];
              return (
                this.forEach(function (e, r) {
                  t.push([r, e]);
                }),
                l(t)
              );
            }),
            n && (p.prototype[Symbol.iterator] = p.prototype.entries);
          var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function w(t, e) {
            var r = (e = e || {}).body;
            if (t instanceof w) {
              if (t.bodyUsed) throw new TypeError("Already read");
              (this.url = t.url),
                (this.credentials = t.credentials),
                e.headers || (this.headers = new p(t.headers)),
                (this.method = t.method),
                (this.mode = t.mode),
                (this.signal = t.signal),
                r ||
                  null == t._bodyInit ||
                  ((r = t._bodyInit), (t.bodyUsed = !0));
            } else this.url = String(t);
            if (
              ((this.credentials =
                e.credentials || this.credentials || "same-origin"),
              (!e.headers && this.headers) || (this.headers = new p(e.headers)),
              (this.method = (function (t) {
                var e = t.toUpperCase();
                return m.indexOf(e) > -1 ? e : t;
              })(e.method || this.method || "GET")),
              (this.mode = e.mode || this.mode || null),
              (this.signal = e.signal || this.signal),
              (this.referrer = null),
              ("GET" === this.method || "HEAD" === this.method) && r)
            )
              throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(r);
          }
          function _(t) {
            var e = new FormData();
            return (
              t
                .trim()
                .split("&")
                .forEach(function (t) {
                  if (t) {
                    var r = t.split("="),
                      n = r.shift().replace(/\+/g, " "),
                      i = r.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(n), decodeURIComponent(i));
                  }
                }),
              e
            );
          }
          function b(t) {
            var e = new p();
            return (
              t
                .replace(/\r?\n[\t ]+/g, " ")
                .split(/\r?\n/)
                .forEach(function (t) {
                  var r = t.split(":"),
                    n = r.shift().trim();
                  if (n) {
                    var i = r.join(":").trim();
                    e.append(n, i);
                  }
                }),
              e
            );
          }
          function E(t, e) {
            e || (e = {}),
              (this.type = "default"),
              (this.status = void 0 === e.status ? 200 : e.status),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText = "statusText" in e ? e.statusText : "OK"),
              (this.headers = new p(e.headers)),
              (this.url = e.url || ""),
              this._initBody(t);
          }
          (w.prototype.clone = function () {
            return new w(this, { body: this._bodyInit });
          }),
            y.call(w.prototype),
            y.call(E.prototype),
            (E.prototype.clone = function () {
              return new E(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new p(this.headers),
                url: this.url,
              });
            }),
            (E.error = function () {
              var t = new E(null, { status: 0, statusText: "" });
              return (t.type = "error"), t;
            });
          var I = [301, 302, 303, 307, 308];
          (E.redirect = function (t, e) {
            if (-1 === I.indexOf(e))
              throw new RangeError("Invalid status code");
            return new E(null, { status: e, headers: { location: t } });
          }),
            (e.DOMException = t.DOMException);
          try {
            new e.DOMException();
          } catch (S) {
            (e.DOMException = function (t, e) {
              (this.message = t), (this.name = e);
              var r = Error(t);
              this.stack = r.stack;
            }),
              (e.DOMException.prototype = Object.create(Error.prototype)),
              (e.DOMException.prototype.constructor = e.DOMException);
          }
          function P(t, r) {
            return new Promise(function (n, s) {
              var o = new w(t, r);
              if (o.signal && o.signal.aborted)
                return s(new e.DOMException("Aborted", "AbortError"));
              var a = new XMLHttpRequest();
              function c() {
                a.abort();
              }
              (a.onload = function () {
                var t = {
                  status: a.status,
                  statusText: a.statusText,
                  headers: b(a.getAllResponseHeaders() || ""),
                };
                t.url =
                  "responseURL" in a
                    ? a.responseURL
                    : t.headers.get("X-Request-URL");
                var e = "response" in a ? a.response : a.responseText;
                n(new E(e, t));
              }),
                (a.onerror = function () {
                  s(new TypeError("Network request failed"));
                }),
                (a.ontimeout = function () {
                  s(new TypeError("Network request failed"));
                }),
                (a.onabort = function () {
                  s(new e.DOMException("Aborted", "AbortError"));
                }),
                a.open(o.method, o.url, !0),
                "include" === o.credentials
                  ? (a.withCredentials = !0)
                  : "omit" === o.credentials && (a.withCredentials = !1),
                "responseType" in a && i && (a.responseType = "blob"),
                o.headers.forEach(function (t, e) {
                  a.setRequestHeader(e, t);
                }),
                o.signal &&
                  (o.signal.addEventListener("abort", c),
                  (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      o.signal.removeEventListener("abort", c);
                  })),
                a.send("undefined" === typeof o._bodyInit ? null : o._bodyInit);
            });
          }
          (P.polyfill = !0),
            t.fetch ||
              ((t.fetch = P),
              (t.Headers = p),
              (t.Request = w),
              (t.Response = E)),
            (e.Headers = p),
            (e.Request = w),
            (e.Response = E),
            (e.fetch = P),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })({});
      })(n),
        (n.fetch.ponyfill = !0),
        delete n.fetch.polyfill;
      var i = n;
      ((e = i.fetch).default = i.fetch),
        (e.fetch = i.fetch),
        (e.Headers = i.Headers),
        (e.Request = i.Request),
        (e.Response = i.Response),
        (t.exports = e);
    },
    28981: (t) => {
      "use strict";
      var e,
        r = "object" === typeof Reflect ? Reflect : null,
        n =
          r && "function" === typeof r.apply
            ? r.apply
            : function (t, e, r) {
                return Function.prototype.apply.call(t, e, r);
              };
      e =
        r && "function" === typeof r.ownKeys
          ? r.ownKeys
          : Object.getOwnPropertySymbols
          ? function (t) {
              return Object.getOwnPropertyNames(t).concat(
                Object.getOwnPropertySymbols(t)
              );
            }
          : function (t) {
              return Object.getOwnPropertyNames(t);
            };
      var i =
        Number.isNaN ||
        function (t) {
          return t !== t;
        };
      function s() {
        s.init.call(this);
      }
      (t.exports = s),
        (t.exports.once = function (t, e) {
          return new Promise(function (r, n) {
            function i(r) {
              t.removeListener(e, s), n(r);
            }
            function s() {
              "function" === typeof t.removeListener &&
                t.removeListener("error", i),
                r([].slice.call(arguments));
            }
            g(t, e, s, { once: !0 }),
              "error" !== e &&
                (function (t, e, r) {
                  "function" === typeof t.on && g(t, "error", e, r);
                })(t, i, { once: !0 });
          });
        }),
        (s.EventEmitter = s),
        (s.prototype._events = void 0),
        (s.prototype._eventsCount = 0),
        (s.prototype._maxListeners = void 0);
      var o = 10;
      function a(t) {
        if ("function" !== typeof t)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof t
          );
      }
      function c(t) {
        return void 0 === t._maxListeners
          ? s.defaultMaxListeners
          : t._maxListeners;
      }
      function u(t, e, r, n) {
        var i, s, o, u;
        if (
          (a(r),
          void 0 === (s = t._events)
            ? ((s = t._events = Object.create(null)), (t._eventsCount = 0))
            : (void 0 !== s.newListener &&
                (t.emit("newListener", e, r.listener ? r.listener : r),
                (s = t._events)),
              (o = s[e])),
          void 0 === o)
        )
          (o = s[e] = r), ++t._eventsCount;
        else if (
          ("function" === typeof o
            ? (o = s[e] = n ? [r, o] : [o, r])
            : n
            ? o.unshift(r)
            : o.push(r),
          (i = c(t)) > 0 && o.length > i && !o.warned)
        ) {
          o.warned = !0;
          var h = new Error(
            "Possible EventEmitter memory leak detected. " +
              o.length +
              " " +
              String(e) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (h.name = "MaxListenersExceededWarning"),
            (h.emitter = t),
            (h.type = e),
            (h.count = o.length),
            (u = h),
            console && console.warn && console.warn(u);
        }
        return t;
      }
      function h() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function l(t, e, r) {
        var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r },
          i = h.bind(n);
        return (i.listener = r), (n.wrapFn = i), i;
      }
      function p(t, e, r) {
        var n = t._events;
        if (void 0 === n) return [];
        var i = n[e];
        return void 0 === i
          ? []
          : "function" === typeof i
          ? r
            ? [i.listener || i]
            : [i]
          : r
          ? (function (t) {
              for (var e = new Array(t.length), r = 0; r < e.length; ++r)
                e[r] = t[r].listener || t[r];
              return e;
            })(i)
          : d(i, i.length);
      }
      function f(t) {
        var e = this._events;
        if (void 0 !== e) {
          var r = e[t];
          if ("function" === typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function d(t, e) {
        for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
        return r;
      }
      function g(t, e, r, n) {
        if ("function" === typeof t.on) n.once ? t.once(e, r) : t.on(e, r);
        else {
          if ("function" !== typeof t.addEventListener)
            throw new TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' +
                typeof t
            );
          t.addEventListener(e, function i(s) {
            n.once && t.removeEventListener(e, i), r(s);
          });
        }
      }
      Object.defineProperty(s, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return o;
        },
        set: function (t) {
          if ("number" !== typeof t || t < 0 || i(t))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                t +
                "."
            );
          o = t;
        },
      }),
        (s.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (s.prototype.setMaxListeners = function (t) {
          if ("number" !== typeof t || t < 0 || i(t))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                t +
                "."
            );
          return (this._maxListeners = t), this;
        }),
        (s.prototype.getMaxListeners = function () {
          return c(this);
        }),
        (s.prototype.emit = function (t) {
          for (var e = [], r = 1; r < arguments.length; r++)
            e.push(arguments[r]);
          var i = "error" === t,
            s = this._events;
          if (void 0 !== s) i = i && void 0 === s.error;
          else if (!i) return !1;
          if (i) {
            var o;
            if ((e.length > 0 && (o = e[0]), o instanceof Error)) throw o;
            var a = new Error(
              "Unhandled error." + (o ? " (" + o.message + ")" : "")
            );
            throw ((a.context = o), a);
          }
          var c = s[t];
          if (void 0 === c) return !1;
          if ("function" === typeof c) n(c, this, e);
          else {
            var u = c.length,
              h = d(c, u);
            for (r = 0; r < u; ++r) n(h[r], this, e);
          }
          return !0;
        }),
        (s.prototype.addListener = function (t, e) {
          return u(this, t, e, !1);
        }),
        (s.prototype.on = s.prototype.addListener),
        (s.prototype.prependListener = function (t, e) {
          return u(this, t, e, !0);
        }),
        (s.prototype.once = function (t, e) {
          return a(e), this.on(t, l(this, t, e)), this;
        }),
        (s.prototype.prependOnceListener = function (t, e) {
          return a(e), this.prependListener(t, l(this, t, e)), this;
        }),
        (s.prototype.removeListener = function (t, e) {
          var r, n, i, s, o;
          if ((a(e), void 0 === (n = this._events))) return this;
          if (void 0 === (r = n[t])) return this;
          if (r === e || r.listener === e)
            0 === --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete n[t],
                n.removeListener &&
                  this.emit("removeListener", t, r.listener || e));
          else if ("function" !== typeof r) {
            for (i = -1, s = r.length - 1; s >= 0; s--)
              if (r[s] === e || r[s].listener === e) {
                (o = r[s].listener), (i = s);
                break;
              }
            if (i < 0) return this;
            0 === i
              ? r.shift()
              : (function (t, e) {
                  for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                  t.pop();
                })(r, i),
              1 === r.length && (n[t] = r[0]),
              void 0 !== n.removeListener &&
                this.emit("removeListener", t, o || e);
          }
          return this;
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.removeAllListeners = function (t) {
          var e, r, n;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== r[t] &&
                  (0 === --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete r[t]),
              this
            );
          if (0 === arguments.length) {
            var i,
              s = Object.keys(r);
            for (n = 0; n < s.length; ++n)
              "removeListener" !== (i = s[n]) && this.removeAllListeners(i);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" === typeof (e = r[t])) this.removeListener(t, e);
          else if (void 0 !== e)
            for (n = e.length - 1; n >= 0; n--) this.removeListener(t, e[n]);
          return this;
        }),
        (s.prototype.listeners = function (t) {
          return p(this, t, !0);
        }),
        (s.prototype.rawListeners = function (t) {
          return p(this, t, !1);
        }),
        (s.listenerCount = function (t, e) {
          return "function" === typeof t.listenerCount
            ? t.listenerCount(e)
            : f.call(t, e);
        }),
        (s.prototype.listenerCount = f),
        (s.prototype.eventNames = function () {
          return this._eventsCount > 0 ? e(this._events) : [];
        });
    },
    62838: (t, e, r) => {
      t.exports = self.fetch || (self.fetch = r(44244).default || r(44244));
    },
    51812: (t, e, r) => {
      t = r.nmd(t);
      var n = "__lodash_hash_undefined__",
        i = 9007199254740991,
        s = "[object Arguments]",
        o = "[object Array]",
        a = "[object Boolean]",
        c = "[object Date]",
        u = "[object Error]",
        h = "[object Function]",
        l = "[object Map]",
        p = "[object Number]",
        f = "[object Object]",
        d = "[object Promise]",
        g = "[object RegExp]",
        v = "[object Set]",
        y = "[object String]",
        m = "[object Symbol]",
        w = "[object WeakMap]",
        _ = "[object ArrayBuffer]",
        b = "[object DataView]",
        E = /^\[object .+?Constructor\]$/,
        I = /^(?:0|[1-9]\d*)$/,
        P = {};
      (P["[object Float32Array]"] =
        P["[object Float64Array]"] =
        P["[object Int8Array]"] =
        P["[object Int16Array]"] =
        P["[object Int32Array]"] =
        P["[object Uint8Array]"] =
        P["[object Uint8ClampedArray]"] =
        P["[object Uint16Array]"] =
        P["[object Uint32Array]"] =
          !0),
        (P[s] =
          P[o] =
          P[_] =
          P[a] =
          P[b] =
          P[c] =
          P[u] =
          P[h] =
          P[l] =
          P[p] =
          P[f] =
          P[g] =
          P[v] =
          P[y] =
          P[w] =
            !1);
      var S = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
        O = "object" == typeof self && self && self.Object === Object && self,
        x = S || O || Function("return this")(),
        R = e && !e.nodeType && e,
        A = R && t && !t.nodeType && t,
        C = A && A.exports === R,
        j = C && S.process,
        T = (function () {
          try {
            return j && j.binding && j.binding("util");
          } catch (t) {}
        })(),
        N = T && T.isTypedArray;
      function L(t, e) {
        for (var r = -1, n = null == t ? 0 : t.length; ++r < n; )
          if (e(t[r], r, t)) return !0;
        return !1;
      }
      function q(t) {
        var e = -1,
          r = Array(t.size);
        return (
          t.forEach(function (t, n) {
            r[++e] = [n, t];
          }),
          r
        );
      }
      function D(t) {
        var e = -1,
          r = Array(t.size);
        return (
          t.forEach(function (t) {
            r[++e] = t;
          }),
          r
        );
      }
      var z,
        M,
        k = Array.prototype,
        $ = Function.prototype,
        U = Object.prototype,
        H = x["__core-js_shared__"],
        V = $.toString,
        K = U.hasOwnProperty,
        G = (function () {
          var t = /[^.]+$/.exec((H && H.keys && H.keys.IE_PROTO) || "");
          return t ? "Symbol(src)_1." + t : "";
        })(),
        B = U.toString,
        F = RegExp(
          "^" +
            V.call(K)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        ),
        W = C ? x.Buffer : void 0,
        Q = x.Symbol,
        J = x.Uint8Array,
        Y = U.propertyIsEnumerable,
        Z = k.splice,
        X = Q ? Q.toStringTag : void 0,
        tt = Object.getOwnPropertySymbols,
        et = W ? W.isBuffer : void 0,
        rt =
          ((z = Object.keys),
          (M = Object),
          function (t) {
            return z(M(t));
          }),
        nt = jt(x, "DataView"),
        it = jt(x, "Map"),
        st = jt(x, "Promise"),
        ot = jt(x, "Set"),
        at = jt(x, "WeakMap"),
        ct = jt(Object, "create"),
        ut = qt(nt),
        ht = qt(it),
        lt = qt(st),
        pt = qt(ot),
        ft = qt(at),
        dt = Q ? Q.prototype : void 0,
        gt = dt ? dt.valueOf : void 0;
      function vt(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      function yt(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      function mt(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var n = t[e];
          this.set(n[0], n[1]);
        }
      }
      function wt(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.__data__ = new mt(); ++e < r; ) this.add(t[e]);
      }
      function _t(t) {
        var e = (this.__data__ = new yt(t));
        this.size = e.size;
      }
      function bt(t, e) {
        var r = Mt(t),
          n = !r && zt(t),
          i = !r && !n && kt(t),
          s = !r && !n && !i && Kt(t),
          o = r || n || i || s,
          a = o
            ? (function (t, e) {
                for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
                return n;
              })(t.length, String)
            : [],
          c = a.length;
        for (var u in t)
          (!e && !K.call(t, u)) ||
            (o &&
              ("length" == u ||
                (i && ("offset" == u || "parent" == u)) ||
                (s &&
                  ("buffer" == u || "byteLength" == u || "byteOffset" == u)) ||
                Lt(u, c))) ||
            a.push(u);
        return a;
      }
      function Et(t, e) {
        for (var r = t.length; r--; ) if (Dt(t[r][0], e)) return r;
        return -1;
      }
      function It(t) {
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : X && X in Object(t)
          ? (function (t) {
              var e = K.call(t, X),
                r = t[X];
              try {
                t[X] = void 0;
                var n = !0;
              } catch (s) {}
              var i = B.call(t);
              n && (e ? (t[X] = r) : delete t[X]);
              return i;
            })(t)
          : (function (t) {
              return B.call(t);
            })(t);
      }
      function Pt(t) {
        return Vt(t) && It(t) == s;
      }
      function St(t, e, r, n, i) {
        return (
          t === e ||
          (null == t || null == e || (!Vt(t) && !Vt(e))
            ? t !== t && e !== e
            : (function (t, e, r, n, i, h) {
                var d = Mt(t),
                  w = Mt(e),
                  E = d ? o : Nt(t),
                  I = w ? o : Nt(e),
                  P = (E = E == s ? f : E) == f,
                  S = (I = I == s ? f : I) == f,
                  O = E == I;
                if (O && kt(t)) {
                  if (!kt(e)) return !1;
                  (d = !0), (P = !1);
                }
                if (O && !P)
                  return (
                    h || (h = new _t()),
                    d || Kt(t)
                      ? Rt(t, e, r, n, i, h)
                      : (function (t, e, r, n, i, s, o) {
                          switch (r) {
                            case b:
                              if (
                                t.byteLength != e.byteLength ||
                                t.byteOffset != e.byteOffset
                              )
                                return !1;
                              (t = t.buffer), (e = e.buffer);
                            case _:
                              return !(
                                t.byteLength != e.byteLength ||
                                !s(new J(t), new J(e))
                              );
                            case a:
                            case c:
                            case p:
                              return Dt(+t, +e);
                            case u:
                              return t.name == e.name && t.message == e.message;
                            case g:
                            case y:
                              return t == e + "";
                            case l:
                              var h = q;
                            case v:
                              var f = 1 & n;
                              if ((h || (h = D), t.size != e.size && !f))
                                return !1;
                              var d = o.get(t);
                              if (d) return d == e;
                              (n |= 2), o.set(t, e);
                              var w = Rt(h(t), h(e), n, i, s, o);
                              return o.delete(t), w;
                            case m:
                              if (gt) return gt.call(t) == gt.call(e);
                          }
                          return !1;
                        })(t, e, E, r, n, i, h)
                  );
                if (!(1 & r)) {
                  var x = P && K.call(t, "__wrapped__"),
                    R = S && K.call(e, "__wrapped__");
                  if (x || R) {
                    var A = x ? t.value() : t,
                      C = R ? e.value() : e;
                    return h || (h = new _t()), i(A, C, r, n, h);
                  }
                }
                if (!O) return !1;
                return (
                  h || (h = new _t()),
                  (function (t, e, r, n, i, s) {
                    var o = 1 & r,
                      a = At(t),
                      c = a.length,
                      u = At(e),
                      h = u.length;
                    if (c != h && !o) return !1;
                    var l = c;
                    for (; l--; ) {
                      var p = a[l];
                      if (!(o ? p in e : K.call(e, p))) return !1;
                    }
                    var f = s.get(t);
                    if (f && s.get(e)) return f == e;
                    var d = !0;
                    s.set(t, e), s.set(e, t);
                    var g = o;
                    for (; ++l < c; ) {
                      var v = t[(p = a[l])],
                        y = e[p];
                      if (n)
                        var m = o ? n(y, v, p, e, t, s) : n(v, y, p, t, e, s);
                      if (!(void 0 === m ? v === y || i(v, y, r, n, s) : m)) {
                        d = !1;
                        break;
                      }
                      g || (g = "constructor" == p);
                    }
                    if (d && !g) {
                      var w = t.constructor,
                        _ = e.constructor;
                      w == _ ||
                        !("constructor" in t) ||
                        !("constructor" in e) ||
                        ("function" == typeof w &&
                          w instanceof w &&
                          "function" == typeof _ &&
                          _ instanceof _) ||
                        (d = !1);
                    }
                    return s.delete(t), s.delete(e), d;
                  })(t, e, r, n, i, h)
                );
              })(t, e, r, n, St, i))
        );
      }
      function Ot(t) {
        return (
          !(
            !Ht(t) ||
            (function (t) {
              return !!G && G in t;
            })(t)
          ) && ($t(t) ? F : E).test(qt(t))
        );
      }
      function xt(t) {
        if (
          !(function (t) {
            var e = t && t.constructor,
              r = ("function" == typeof e && e.prototype) || U;
            return t === r;
          })(t)
        )
          return rt(t);
        var e = [];
        for (var r in Object(t))
          K.call(t, r) && "constructor" != r && e.push(r);
        return e;
      }
      function Rt(t, e, r, n, i, s) {
        var o = 1 & r,
          a = t.length,
          c = e.length;
        if (a != c && !(o && c > a)) return !1;
        var u = s.get(t);
        if (u && s.get(e)) return u == e;
        var h = -1,
          l = !0,
          p = 2 & r ? new wt() : void 0;
        for (s.set(t, e), s.set(e, t); ++h < a; ) {
          var f = t[h],
            d = e[h];
          if (n) var g = o ? n(d, f, h, e, t, s) : n(f, d, h, t, e, s);
          if (void 0 !== g) {
            if (g) continue;
            l = !1;
            break;
          }
          if (p) {
            if (
              !L(e, function (t, e) {
                if (((o = e), !p.has(o) && (f === t || i(f, t, r, n, s))))
                  return p.push(e);
                var o;
              })
            ) {
              l = !1;
              break;
            }
          } else if (f !== d && !i(f, d, r, n, s)) {
            l = !1;
            break;
          }
        }
        return s.delete(t), s.delete(e), l;
      }
      function At(t) {
        return (function (t, e, r) {
          var n = e(t);
          return Mt(t)
            ? n
            : (function (t, e) {
                for (var r = -1, n = e.length, i = t.length; ++r < n; )
                  t[i + r] = e[r];
                return t;
              })(n, r(t));
        })(t, Gt, Tt);
      }
      function Ct(t, e) {
        var r = t.__data__;
        return (function (t) {
          var e = typeof t;
          return "string" == e ||
            "number" == e ||
            "symbol" == e ||
            "boolean" == e
            ? "__proto__" !== t
            : null === t;
        })(e)
          ? r["string" == typeof e ? "string" : "hash"]
          : r.map;
      }
      function jt(t, e) {
        var r = (function (t, e) {
          return null == t ? void 0 : t[e];
        })(t, e);
        return Ot(r) ? r : void 0;
      }
      (vt.prototype.clear = function () {
        (this.__data__ = ct ? ct(null) : {}), (this.size = 0);
      }),
        (vt.prototype.delete = function (t) {
          var e = this.has(t) && delete this.__data__[t];
          return (this.size -= e ? 1 : 0), e;
        }),
        (vt.prototype.get = function (t) {
          var e = this.__data__;
          if (ct) {
            var r = e[t];
            return r === n ? void 0 : r;
          }
          return K.call(e, t) ? e[t] : void 0;
        }),
        (vt.prototype.has = function (t) {
          var e = this.__data__;
          return ct ? void 0 !== e[t] : K.call(e, t);
        }),
        (vt.prototype.set = function (t, e) {
          var r = this.__data__;
          return (
            (this.size += this.has(t) ? 0 : 1),
            (r[t] = ct && void 0 === e ? n : e),
            this
          );
        }),
        (yt.prototype.clear = function () {
          (this.__data__ = []), (this.size = 0);
        }),
        (yt.prototype.delete = function (t) {
          var e = this.__data__,
            r = Et(e, t);
          return (
            !(r < 0) &&
            (r == e.length - 1 ? e.pop() : Z.call(e, r, 1), --this.size, !0)
          );
        }),
        (yt.prototype.get = function (t) {
          var e = this.__data__,
            r = Et(e, t);
          return r < 0 ? void 0 : e[r][1];
        }),
        (yt.prototype.has = function (t) {
          return Et(this.__data__, t) > -1;
        }),
        (yt.prototype.set = function (t, e) {
          var r = this.__data__,
            n = Et(r, t);
          return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this;
        }),
        (mt.prototype.clear = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new vt(),
              map: new (it || yt)(),
              string: new vt(),
            });
        }),
        (mt.prototype.delete = function (t) {
          var e = Ct(this, t).delete(t);
          return (this.size -= e ? 1 : 0), e;
        }),
        (mt.prototype.get = function (t) {
          return Ct(this, t).get(t);
        }),
        (mt.prototype.has = function (t) {
          return Ct(this, t).has(t);
        }),
        (mt.prototype.set = function (t, e) {
          var r = Ct(this, t),
            n = r.size;
          return r.set(t, e), (this.size += r.size == n ? 0 : 1), this;
        }),
        (wt.prototype.add = wt.prototype.push =
          function (t) {
            return this.__data__.set(t, n), this;
          }),
        (wt.prototype.has = function (t) {
          return this.__data__.has(t);
        }),
        (_t.prototype.clear = function () {
          (this.__data__ = new yt()), (this.size = 0);
        }),
        (_t.prototype.delete = function (t) {
          var e = this.__data__,
            r = e.delete(t);
          return (this.size = e.size), r;
        }),
        (_t.prototype.get = function (t) {
          return this.__data__.get(t);
        }),
        (_t.prototype.has = function (t) {
          return this.__data__.has(t);
        }),
        (_t.prototype.set = function (t, e) {
          var r = this.__data__;
          if (r instanceof yt) {
            var n = r.__data__;
            if (!it || n.length < 199)
              return n.push([t, e]), (this.size = ++r.size), this;
            r = this.__data__ = new mt(n);
          }
          return r.set(t, e), (this.size = r.size), this;
        });
      var Tt = tt
          ? function (t) {
              return null == t
                ? []
                : ((t = Object(t)),
                  (function (t, e) {
                    for (
                      var r = -1, n = null == t ? 0 : t.length, i = 0, s = [];
                      ++r < n;

                    ) {
                      var o = t[r];
                      e(o, r, t) && (s[i++] = o);
                    }
                    return s;
                  })(tt(t), function (e) {
                    return Y.call(t, e);
                  }));
            }
          : function () {
              return [];
            },
        Nt = It;
      function Lt(t, e) {
        return (
          !!(e = null == e ? i : e) &&
          ("number" == typeof t || I.test(t)) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        );
      }
      function qt(t) {
        if (null != t) {
          try {
            return V.call(t);
          } catch (e) {}
          try {
            return t + "";
          } catch (e) {}
        }
        return "";
      }
      function Dt(t, e) {
        return t === e || (t !== t && e !== e);
      }
      ((nt && Nt(new nt(new ArrayBuffer(1))) != b) ||
        (it && Nt(new it()) != l) ||
        (st && Nt(st.resolve()) != d) ||
        (ot && Nt(new ot()) != v) ||
        (at && Nt(new at()) != w)) &&
        (Nt = function (t) {
          var e = It(t),
            r = e == f ? t.constructor : void 0,
            n = r ? qt(r) : "";
          if (n)
            switch (n) {
              case ut:
                return b;
              case ht:
                return l;
              case lt:
                return d;
              case pt:
                return v;
              case ft:
                return w;
            }
          return e;
        });
      var zt = Pt(
          (function () {
            return arguments;
          })()
        )
          ? Pt
          : function (t) {
              return Vt(t) && K.call(t, "callee") && !Y.call(t, "callee");
            },
        Mt = Array.isArray;
      var kt =
        et ||
        function () {
          return !1;
        };
      function $t(t) {
        if (!Ht(t)) return !1;
        var e = It(t);
        return (
          e == h ||
          "[object GeneratorFunction]" == e ||
          "[object AsyncFunction]" == e ||
          "[object Proxy]" == e
        );
      }
      function Ut(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= i;
      }
      function Ht(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      }
      function Vt(t) {
        return null != t && "object" == typeof t;
      }
      var Kt = N
        ? (function (t) {
            return function (e) {
              return t(e);
            };
          })(N)
        : function (t) {
            return Vt(t) && Ut(t.length) && !!P[It(t)];
          };
      function Gt(t) {
        return null != (e = t) && Ut(e.length) && !$t(e) ? bt(t) : xt(t);
        var e;
      }
      t.exports = function (t, e) {
        return St(t, e);
      };
    },
    60079: (t) => {
      "use strict";
      function e(t) {
        try {
          return JSON.stringify(t);
        } catch (e) {
          return '"[Circular]"';
        }
      }
      t.exports = function (t, r, n) {
        var i = (n && n.stringify) || e;
        if ("object" === typeof t && null !== t) {
          var s = r.length + 1;
          if (1 === s) return t;
          var o = new Array(s);
          o[0] = i(t);
          for (var a = 1; a < s; a++) o[a] = i(r[a]);
          return o.join(" ");
        }
        if ("string" !== typeof t) return t;
        var c = r.length;
        if (0 === c) return t;
        for (
          var u = "", h = 0, l = -1, p = (t && t.length) || 0, f = 0;
          f < p;

        ) {
          if (37 === t.charCodeAt(f) && f + 1 < p) {
            switch (((l = l > -1 ? l : 0), t.charCodeAt(f + 1))) {
              case 100:
              case 102:
                if (h >= c) break;
                if (null == r[h]) break;
                l < f && (u += t.slice(l, f)),
                  (u += Number(r[h])),
                  (l = f + 2),
                  f++;
                break;
              case 105:
                if (h >= c) break;
                if (null == r[h]) break;
                l < f && (u += t.slice(l, f)),
                  (u += Math.floor(Number(r[h]))),
                  (l = f + 2),
                  f++;
                break;
              case 79:
              case 111:
              case 106:
                if (h >= c) break;
                if (void 0 === r[h]) break;
                l < f && (u += t.slice(l, f));
                var d = typeof r[h];
                if ("string" === d) {
                  (u += "'" + r[h] + "'"), (l = f + 2), f++;
                  break;
                }
                if ("function" === d) {
                  (u += r[h].name || "<anonymous>"), (l = f + 2), f++;
                  break;
                }
                (u += i(r[h])), (l = f + 2), f++;
                break;
              case 115:
                if (h >= c) break;
                l < f && (u += t.slice(l, f)),
                  (u += String(r[h])),
                  (l = f + 2),
                  f++;
                break;
              case 37:
                l < f && (u += t.slice(l, f)),
                  (u += "%"),
                  (l = f + 2),
                  f++,
                  h--;
            }
            ++h;
          }
          ++f;
        }
        if (-1 === l) return t;
        l < p && (u += t.slice(l));
        return u;
      };
    },
    44244: (t, e, r) => {
      "use strict";
      function n(t, e) {
        return (
          (e = e || {}),
          new Promise(function (r, n) {
            var i = new XMLHttpRequest(),
              s = [],
              o = [],
              a = {},
              c = function () {
                return {
                  ok: 2 == ((i.status / 100) | 0),
                  statusText: i.statusText,
                  status: i.status,
                  url: i.responseURL,
                  text: function () {
                    return Promise.resolve(i.responseText);
                  },
                  json: function () {
                    return Promise.resolve(i.responseText).then(JSON.parse);
                  },
                  blob: function () {
                    return Promise.resolve(new Blob([i.response]));
                  },
                  clone: c,
                  headers: {
                    keys: function () {
                      return s;
                    },
                    entries: function () {
                      return o;
                    },
                    get: function (t) {
                      return a[t.toLowerCase()];
                    },
                    has: function (t) {
                      return t.toLowerCase() in a;
                    },
                  },
                };
              };
            for (var u in (i.open(e.method || "get", t, !0),
            (i.onload = function () {
              i
                .getAllResponseHeaders()
                .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (t, e, r) {
                  s.push((e = e.toLowerCase())),
                    o.push([e, r]),
                    (a[e] = a[e] ? a[e] + "," + r : r);
                }),
                r(c());
            }),
            (i.onerror = n),
            (i.withCredentials = "include" == e.credentials),
            e.headers))
              i.setRequestHeader(u, e.headers[u]);
            i.send(e.body || null);
          })
        );
      }
      r.r(e), r.d(e, { default: () => n });
    },
    88345: (t) => {
      "use strict";
      t.exports = function () {
        throw new Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    },
    39758: (t, e, r) => {
      "use strict";
      const n = r(60079);
      t.exports = o;
      const i =
          (function () {
            function t(t) {
              return "undefined" !== typeof t && t;
            }
            try {
              return (
                "undefined" !== typeof globalThis ||
                  Object.defineProperty(Object.prototype, "globalThis", {
                    get: function () {
                      return (
                        delete Object.prototype.globalThis,
                        (this.globalThis = this)
                      );
                    },
                    configurable: !0,
                  }),
                globalThis
              );
            } catch (e) {
              return t(self) || t(window) || t(this) || {};
            }
          })().console || {},
        s = {
          mapHttpRequest: p,
          mapHttpResponse: p,
          wrapRequestSerializer: f,
          wrapResponseSerializer: f,
          wrapErrorSerializer: f,
          req: p,
          res: p,
          err: function (t) {
            const e = {
              type: t.constructor.name,
              msg: t.message,
              stack: t.stack,
            };
            for (const r in t) void 0 === e[r] && (e[r] = t[r]);
            return e;
          },
        };
      function o(t) {
        (t = t || {}).browser = t.browser || {};
        const e = t.browser.transmit;
        if (e && "function" !== typeof e.send)
          throw Error("pino: transmit option must have a send function");
        const r = t.browser.write || i;
        t.browser.write && (t.browser.asObject = !0);
        const n = t.serializers || {},
          s = (function (t, e) {
            if (Array.isArray(t))
              return t.filter(function (t) {
                return "!stdSerializers.err" !== t;
              });
            return !0 === t && Object.keys(e);
          })(t.browser.serialize, n);
        let p = t.browser.serialize;
        Array.isArray(t.browser.serialize) &&
          t.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
          (p = !1);
        "function" === typeof r &&
          (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r),
          !1 === t.enabled && (t.level = "silent");
        const f = t.level || "info",
          g = Object.create(r);
        g.log || (g.log = d),
          Object.defineProperty(g, "levelVal", {
            get: function () {
              return "silent" === this.level
                ? 1 / 0
                : this.levels.values[this.level];
            },
          }),
          Object.defineProperty(g, "level", {
            get: function () {
              return this._level;
            },
            set: function (t) {
              if ("silent" !== t && !this.levels.values[t])
                throw Error("unknown level " + t);
              (this._level = t),
                a(v, g, "error", "log"),
                a(v, g, "fatal", "error"),
                a(v, g, "warn", "error"),
                a(v, g, "info", "log"),
                a(v, g, "debug", "log"),
                a(v, g, "trace", "log");
            },
          });
        const v = {
          transmit: e,
          serialize: s,
          asObject: t.browser.asObject,
          levels: ["error", "fatal", "warn", "info", "debug", "trace"],
          timestamp: l(t),
        };
        return (
          (g.levels = o.levels),
          (g.level = f),
          (g.setMaxListeners =
            g.getMaxListeners =
            g.emit =
            g.addListener =
            g.on =
            g.prependListener =
            g.once =
            g.prependOnceListener =
            g.removeListener =
            g.removeAllListeners =
            g.listeners =
            g.listenerCount =
            g.eventNames =
            g.write =
            g.flush =
              d),
          (g.serializers = n),
          (g._serialize = s),
          (g._stdErrSerialize = p),
          (g.child = function (r, i) {
            if (!r) throw new Error("missing bindings for child Pino");
            (i = i || {}),
              s && r.serializers && (i.serializers = r.serializers);
            const o = i.serializers;
            if (s && o) {
              var a = Object.assign({}, n, o),
                l = !0 === t.browser.serialize ? Object.keys(a) : s;
              delete r.serializers, c([r], l, a, this._stdErrSerialize);
            }
            function p(t) {
              (this._childLevel = 1 + (0 | t._childLevel)),
                (this.error = u(t, r, "error")),
                (this.fatal = u(t, r, "fatal")),
                (this.warn = u(t, r, "warn")),
                (this.info = u(t, r, "info")),
                (this.debug = u(t, r, "debug")),
                (this.trace = u(t, r, "trace")),
                a && ((this.serializers = a), (this._serialize = l)),
                e && (this._logEvent = h([].concat(t._logEvent.bindings, r)));
            }
            return (p.prototype = this), new p(this);
          }),
          e && (g._logEvent = h()),
          g
        );
      }
      function a(t, e, r, s) {
        const a = Object.getPrototypeOf(e);
        (e[r] =
          e.levelVal > e.levels.values[r]
            ? d
            : a[r]
            ? a[r]
            : i[r] || i[s] || d),
          (function (t, e, r) {
            if (!t.transmit && e[r] === d) return;
            e[r] =
              ((s = e[r]),
              function () {
                const a = t.timestamp(),
                  u = new Array(arguments.length),
                  l =
                    Object.getPrototypeOf && Object.getPrototypeOf(this) === i
                      ? i
                      : this;
                for (var p = 0; p < u.length; p++) u[p] = arguments[p];
                if (
                  (t.serialize &&
                    !t.asObject &&
                    c(
                      u,
                      this._serialize,
                      this.serializers,
                      this._stdErrSerialize
                    ),
                  t.asObject
                    ? s.call(
                        l,
                        (function (t, e, r, i) {
                          t._serialize &&
                            c(
                              r,
                              t._serialize,
                              t.serializers,
                              t._stdErrSerialize
                            );
                          const s = r.slice();
                          let a = s[0];
                          const u = {};
                          i && (u.time = i), (u.level = o.levels.values[e]);
                          let h = 1 + (0 | t._childLevel);
                          if (
                            (h < 1 && (h = 1),
                            null !== a && "object" === typeof a)
                          ) {
                            for (; h-- && "object" === typeof s[0]; )
                              Object.assign(u, s.shift());
                            a = s.length ? n(s.shift(), s) : void 0;
                          } else "string" === typeof a && (a = n(s.shift(), s));
                          return void 0 !== a && (u.msg = a), u;
                        })(this, r, u, a)
                      )
                    : s.apply(l, u),
                  t.transmit)
                ) {
                  const n = t.transmit.level || e.level,
                    i = o.levels.values[n],
                    s = o.levels.values[r];
                  if (s < i) return;
                  !(function (t, e, r) {
                    const n = e.send,
                      i = e.ts,
                      s = e.methodLevel,
                      o = e.methodValue,
                      a = e.val,
                      u = t._logEvent.bindings;
                    c(
                      r,
                      t._serialize || Object.keys(t.serializers),
                      t.serializers,
                      void 0 === t._stdErrSerialize || t._stdErrSerialize
                    ),
                      (t._logEvent.ts = i),
                      (t._logEvent.messages = r.filter(function (t) {
                        return -1 === u.indexOf(t);
                      })),
                      (t._logEvent.level.label = s),
                      (t._logEvent.level.value = o),
                      n(s, t._logEvent, a),
                      (t._logEvent = h(u));
                  })(
                    this,
                    {
                      ts: a,
                      methodLevel: r,
                      methodValue: s,
                      transmitLevel: n,
                      transmitValue:
                        o.levels.values[t.transmit.level || e.level],
                      send: t.transmit.send,
                      val: e.levelVal,
                    },
                    u
                  );
                }
              });
            var s;
          })(t, e, r);
      }
      function c(t, e, r, n) {
        for (const i in t)
          if (n && t[i] instanceof Error) t[i] = o.stdSerializers.err(t[i]);
          else if ("object" === typeof t[i] && !Array.isArray(t[i]))
            for (const n in t[i])
              e && e.indexOf(n) > -1 && n in r && (t[i][n] = r[n](t[i][n]));
      }
      function u(t, e, r) {
        return function () {
          const n = new Array(1 + arguments.length);
          n[0] = e;
          for (var i = 1; i < n.length; i++) n[i] = arguments[i - 1];
          return t[r].apply(this, n);
        };
      }
      function h(t) {
        return {
          ts: 0,
          messages: [],
          bindings: t || [],
          level: { label: "", value: 0 },
        };
      }
      function l(t) {
        return "function" === typeof t.timestamp
          ? t.timestamp
          : !1 === t.timestamp
          ? g
          : v;
      }
      function p() {
        return {};
      }
      function f(t) {
        return t;
      }
      function d() {}
      function g() {
        return !1;
      }
      function v() {
        return Date.now();
      }
      (o.levels = {
        values: {
          fatal: 60,
          error: 50,
          warn: 40,
          info: 30,
          debug: 20,
          trace: 10,
        },
        labels: {
          10: "trace",
          20: "debug",
          30: "info",
          40: "warn",
          50: "error",
          60: "fatal",
        },
      }),
        (o.stdSerializers = s),
        (o.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime: g,
            epochTime: v,
            unixTime: function () {
              return Math.round(Date.now() / 1e3);
            },
            isoTime: function () {
              return new Date(Date.now()).toISOString();
            },
          }
        ));
    },
  },
]);
