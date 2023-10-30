(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app/src_components_Timer_tsx_2bf86c._.js", {

"[project]/src/components/Timer.tsx (ecmascript, app)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "Timer": ()=>Timer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, app)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, app)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
const Timer = ()=>{
    _s();
    const [seconds, setSeconds] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](0);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const interval = setInterval(()=>{
            setSeconds((s)=>s + 1);
        }, 1000);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
        className: "text-sm",
        children: [
            seconds,
            " seconds"
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/Timer.tsx>",
        lineNumber: 16,
        columnNumber: 10
    }, this);
};
_s(Timer, "mcG2hTHI4q8+uIAAnRxppoT2y1s=");
_c = Timer;
var _c;
__turbopack_refresh__.register(_c, "Timer");

})()),
}]);

//# sourceMappingURL=src_components_Timer_tsx_2bf86c._.js.map