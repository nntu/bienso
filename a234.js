"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1269], {
    41867: function (e, t, i) {
        var a = i(85893)
            , n = i(81647);
        const o = (0,
            i(67294).memo)((e => {
                let { total: t, current: i, pageSize: o, onChange: r, className: s } = e;
                return (0,
                    a.jsx)(n.Z, {
                        className: "app-pagination mb-2 ".concat(s),
                        total: t,
                        pageSize: o,
                        current: i,
                        onChange: r,
                        showSizeChanger: !1,
                        hideOnSinglePage: !0
                    })
            }
            ));
        t.Z = o
    },
    66748: function (e, t, i) {
        i.d(t, {
            Z: function () {
                return S
            }
        });
        var a = i(85893)
            , n = i(50888)
            , o = i(2453)
            , r = i(57953)
            , s = i(71577)
            , l = i(3075)
            , c = i(39126)
            , d = i(27484)
            , u = i.n(d)
            , m = i(62576)
            , p = i(67294)
            , x = (i(21901),
                i(95830));
        const v = (0,
            p.createContext)({
                endRooms: []
            });
        var h = i(44279)
            , f = i(70989)
            , g = i(18206)
            , b = i(64736)
            , _ = i(5152)
            , T = i.n(_)
            , j = i(25675)
            , y = i.n(j)
            , N = i(11163)
            , w = i(44479)
            , C = i(92476)
            , D = i(67421);
        T()((() => i.e(18).then(i.bind(i, 20018))), {
            loadableGenerated: {
                webpack: () => [20018]
            },
            ssr: !1
        });
        const I = "/icon/icon_box_with_check.webp";
        var S = e => {
            let { plate: t, className: i, isCustomerFollowView: d = !1 } = e;
            var _;
            const { t: T } = (0,
                D.$G)()
                , j = (0,
                    m.Z)()
                , { state: S, on: k, off: Z } = (0,
                    c.OT)()
                , [F, E] = (0,
                    p.useState)()
                , [M, R] = (0,
                    p.useState)(!1)
                , [P, B] = (0,
                    p.useState)(!1)
                , [G, L] = (0,
                    p.useState)(!1)
                , [Y, A] = (0,
                    p.useState)()
                , [O, H] = (0,
                    p.useState)("")
                , z = (0,
                    C.A)()
                , $ = (0,
                    w.F)()
                , { timestamp: q } = (0,
                    h.Z)();
            (0,
                p.useEffect)((() => {
                    j && (B((null === j || void 0 === j ? void 0 : j.account.profileStatus) === b.eB.profile_completed || (null === j || void 0 === j ? void 0 : j.account.profileStatus) === b.eB.approved),
                        L((null === j || void 0 === j ? void 0 : j.account.profileStatus) === b.eB.approved))
                }
                ), [j]),
                (0,
                    p.useEffect)((() => {
                        const e = !!(null === t || void 0 === t ? void 0 : t.registerToDate) && (q >= (null === t || void 0 === t ? void 0 : t.registerToDate) || (null === t || void 0 === t ? void 0 : t.status) > g.iL.REGISTERING)
                            , i = null != (null === t || void 0 === t ? void 0 : t.paymentStatus) && (null === t || void 0 === t ? void 0 : t.paymentStatus) >= 0;
                        R(e || i)
                    }
                    ), [t]),
                (0,
                    p.useEffect)((() => {
                        null != (null === t || void 0 === t ? void 0 : t.paymentStatus) && void 0 != (null === t || void 0 === t ? void 0 : t.paymentStatus) ? H((null === t || void 0 === t ? void 0 : t.paymentStatus) == l.R$.PENDING ? "plate_card.in_order_auction" : "plate_card.paid_auction") : H("plate_card.register_auction")
                    }
                    ), [t]);
            const V = (0,
                p.useCallback)((() => {
                    const e = !!t.auctionFromTime && q > t.auctionFromTime
                        , i = !!t.isStarted || e
                        , n = !!t.auctionToTime && q > t.auctionToTime
                        , o = !!t.isEnded || n;
                    var r, s, l, c, d;
                    return t && (null === t || void 0 === t ? void 0 : t.isCancel) ? {
                        text: null !== (r = T("plate_card.auction_cancel")) && void 0 !== r ? r : "",
                        type: "outlined",
                        hideRegisterButton: !0,
                        startTimeAuction: !o,
                        endTimeAuction: o,
                        cancelAuction: !0
                    } : i ? o ? {
                        text: null !== (s = T("plate_card.auction_end")) && void 0 !== s ? s : "",
                        type: "outlined",
                        hideRegisterButton: !0,
                        endTimeAuction: !0
                    } : t.registered ? {
                        text: null !== (l = T("plate_card.join_auction")) && void 0 !== l ? l : "",
                        type: "fill",
                        hideRegisterButton: !0,
                        startTimeAuction: !0
                    } : {
                        text: null !== (c = T("plate_card.auction_processing")) && void 0 !== c ? c : "",
                        type: "outlined",
                        disabled: !0,
                        hideRegisterButton: !0
                    } : t.registered && t.auctionFromTime ? {
                        countdown: {
                            tooltip: T("plate_card.time_till_start_auction"),
                            endTime: t.auctionFromTime / 1e3
                        },
                        type: "fill",
                        hideRegisterButton: !0
                    } : {
                        text: null !== (d = T("plate_card.add_to_list")) && void 0 !== d ? d : "",
                        type: "fill-green",
                        disabled: Boolean(t.inCart || t.registered),
                        icon: t.inCart || t.registered ? (0,
                            a.jsx)("img", {
                                src: I,
                                width: "25px",
                                height: "25px",
                                alt: ""
                            }) : (0,
                                a.jsx)("img", {
                                    src: "/icon/icon_box_white.webp",
                                    width: "25px",
                                    height: "25px",
                                    alt: ""
                                })
                    }
                }
                ), [t])
                , W = async () => {
                    try {
                        if (!j)
                            return void o.ZP.error(T("plate_card.action_login_required"));
                        if ((null === j || void 0 === j ? void 0 : j.account.profileStatus) === b.eB.rejected)
                            return o.ZP.destroy(),
                                o.ZP.warning(T("profile.reject_profile")),
                                void setTimeout((() => {
                                    X.push("/thong-tin/tai-khoan")
                                }
                                ), 1e3);
                        if (!G)
                            return o.ZP.destroy(),
                                void o.ZP.warning(T("profile.need_approve_profile"));
                        if (k(),
                            d && t.auctionFromTime && q >= t.auctionFromTime && t.auctionToTime && q <= t.auctionToTime || Y == g.iL.BIDDING || (null === F || void 0 === F ? void 0 : F.countdown) || Y == g.iL.BID_FINISHED)
                            t.registered && (e => {
                                const t = e.roomId || e.auctionRoomId;
                                if (t) {
                                    const i = !!e.auctionFromTime && q > e.auctionFromTime
                                        , a = !!e.isStarted || i
                                        , n = e.isCancel;
                                    if (!a || n)
                                        return;
                                    X.push("/dau-gia/phong-dau-gia/" + t)
                                } else
                                    o.ZP.destroy(),
                                        o.ZP.error(T("plate_card.not_found_auction_room"))
                            }
                            )(t);
                        else if (!t.registered && !t.inCart) {
                            var e;
                            if (await z.addToCart(t))
                                $.getSelectedLicensePlateCount(),
                                    t.inCart = !0,
                                    E({
                                        text: null !== (e = T("plate_card.add_to_list")) && void 0 !== e ? e : "",
                                        type: "fill-green",
                                        disabled: !0,
                                        icon: (0,
                                            a.jsx)(y(), {
                                                src: I,
                                                width: 25,
                                                height: 25,
                                                alt: ""
                                            })
                                    })
                        }
                        Z()
                    } catch (i) {
                        console.error("Add to cart failed", i),
                            o.ZP.error("C\xf3 l\u1ed7i x\u1ea3y ra, vui l\xf2ng th\u1eed l\u1ea1i sau"),
                            Z()
                    }
                }
                , X = (0,
                    N.useRouter)()
                , { state: K, on: J, off: Q } = (0,
                    c.OT)()
                , U = (0,
                    p.useCallback)((async () => {
                        if (!j)
                            return void o.ZP.error(T("plate_card.action_login_required"));
                        if (P || (o.ZP.destroy(),
                            o.ZP.warning(T("profile.need_approve_profile")),
                            setTimeout((() => {
                                X.push("/thong-tin/tai-khoan")
                            }
                            ), 1e3)),
                            t.registerToDate && +t.registerToDate < q)
                            return;
                        J();
                        const e = await z.createOrder(t);
                        Q(),
                            e && ((0,
                                x.hG)(null === j || void 0 === j ? void 0 : j.account.username, "payment", [t]),
                                X.push("/thanh-toan/" + e))
                    }
                    ), [t]);
            (0,
                p.useCallback)((() => {
                    if (X.pathname.includes("phong-dau-gia") && A(g.iL.BIDDING),
                        t.registered) {
                        const t = X.pathname.includes("phong-dau-gia") ? "plate_card.join_auction" : "plate_card.auction_process_waiting"
                            , i = X.pathname.includes("phong-dau-gia") ? "fill" : "outlined";
                        var e;
                        E({
                            text: null !== (e = T(t)) && void 0 !== e ? e : "",
                            type: i,
                            hideRegisterButton: !0,
                            startTimeAuction: !0
                        })
                    } else {
                        var i;
                        E({
                            text: null !== (i = T("plate_card.auction_processing")) && void 0 !== i ? i : "",
                            type: "outlined",
                            disabled: !0,
                            hideRegisterButton: !0
                        })
                    }
                }
                ), [t.registered]);
            (0,
                p.useEffect)((() => {
                    E(V())
                }
                ), [t]),
                (0,
                    p.useEffect)((() => {
                        A(t.status)
                    }
                    ), [t]);
            const { sessionIds: ee } = (0,
                f.Z)();
            (0,
                p.useEffect)((() => {
                    var e, i;
                    t.isEnded || t.isCancel || t && (null === t || void 0 === t ? void 0 : t.auctionToTime) && t.auctionToTime <= q || t.sessionId && ee.includes(t.sessionId.toString()) && (t.registered ? (A(g.iL.BIDDING),
                        E({
                            text: null !== (e = T("plate_card.join_auction")) && void 0 !== e ? e : "",
                            type: "fill",
                            hideRegisterButton: !0,
                            startTimeAuction: !0
                        })) : E({
                            text: null !== (i = T("plate_card.auction_processing")) && void 0 !== i ? i : "",
                            type: "outlined",
                            disabled: !0,
                            hideRegisterButton: !0
                        }))
                }
                ), [ee, t.sessionId, t.registered]);
            const { endRooms: te } = (0,
                p.useContext)(v);
            return (0,
                p.useEffect)((() => {
                    if (!te || 0 == te.length)
                        return;
                    const e = (0,
                        x.T2)();
                    if (!e || 0 == e.length)
                        return;
                    var i;
                    e.findIndex((e => e.roomId == t.auctionRoomId)) >= 0 && (A(g.iL.BID_FINISHED),
                        E({
                            text: null !== (i = T("plate_card.auction_end")) && void 0 !== i ? i : "",
                            type: "outlined",
                            hideRegisterButton: !0,
                            endTimeAuction: !0
                        }))
                }
                ), [te]),
                (0,
                    a.jsxs)(a.Fragment, {
                        children: [!!(null === F || void 0 === F ? void 0 : F.countdown) && X.pathname.includes("dang-ky-dau-gia") && (0,
                            a.jsxs)(a.Fragment, {
                                children: [(0,
                                    a.jsxs)("span", {
                                        className: "text-[var(--neutral-10)] block mb-1 text-center sm:text-sm text-xs",
                                        children: [T("plate_card.time_begin_auction"), ":", " ", u().unix(Number(null === F || void 0 === F || null === (_ = F.countdown) || void 0 === _ ? void 0 : _.endTime)).format("DD/MM/YYYY HH:mm")]
                                    }), (0,
                                        a.jsx)("span", {
                                            className: "text-[var(--neutral-30)] block mb-1 text-center text-xs",
                                            children: F.countdown.tooltip
                                        })]
                            }), !d && (null === F || void 0 === F ? void 0 : F.startTimeAuction) && (0,
                                a.jsx)("span", {
                                    className: "text-[var(--neutral-30)] block mb-1 text-center text-xs",
                                    children: T("plate_card.time_start_auction")
                                }), !d && (null === F || void 0 === F ? void 0 : F.endTimeAuction) && (0,
                                    a.jsx)("span", {
                                        className: "text-[var(--neutral-30)] block mb-1 text-center text-xs",
                                        children: T("plate_card.end_start_auction")
                                    }), (0,
                                        a.jsxs)("div", {
                                            className: "flex max-w-full gap-1 sm:gap-2 lg:gap-3 justify-center",
                                            children: [(0,
                                                a.jsxs)(r.Z, {
                                                    wrapperClassName: "common-btn-spinning group ".concat((null === F || void 0 === F ? void 0 : F.hideRegisterButton) ? "w-full" : ""),
                                                    indicator: (0,
                                                        a.jsx)(n.Z, {
                                                            style: {
                                                                fontSize: 24,
                                                                color: "var(--primary-color)"
                                                            }
                                                        }),
                                                    spinning: S,
                                                    children: [!d && (0,
                                                        a.jsx)("button", {
                                                            className: "bg-transparent w-full tab-focus-visible",
                                                            onClick: W,
                                                            disabled: (null === F || void 0 === F ? void 0 : F.disabled) || M && void 0 != Y && Y < g.iL.BIDDING,
                                                            children: (null === F || void 0 === F ? void 0 : F.countdown) ? (0,
                                                                a.jsx)("div", {
                                                                    className: "button-start-auction text-base disable-btn-default",
                                                                    children: (0,
                                                                        a.jsx)("span", {
                                                                            children: "Ch\u1edd \u0111\u1ea5u gi\xe1"
                                                                        })
                                                                }) : (0,
                                                                    a.jsx)(a.Fragment, {
                                                                        children: (null === F || void 0 === F ? void 0 : F.startTimeAuction) || (null === F || void 0 === F ? void 0 : F.endTimeAuction) ? (0,
                                                                            a.jsx)("div", {
                                                                                className: "button-start-auction ".concat((null === F || void 0 === F ? void 0 : F.endTimeAuction) || F.cancelAuction ? "disable-btn-default" : void 0 != Y && Y >= g.iL.BIDDING ? "primary-btn-default" : "disable-btn-default", " ").concat(t.registered ? "" : "text-xs"),
                                                                                children: (0,
                                                                                    a.jsx)("span", {
                                                                                        children: null === F || void 0 === F ? void 0 : F.text
                                                                                    })
                                                                            }) : (0,
                                                                                a.jsx)(a.Fragment, {
                                                                                    children: !1
                                                                                })
                                                                    })
                                                        }), d && (0,
                                                            a.jsxs)("button", {
                                                                className: "bg-transparent w-full tab-focus-visible",
                                                                onClick: W,
                                                                disabled: Boolean(t.auctionFromTime && q < t.auctionFromTime || t.auctionToTime && q >= t.auctionToTime),
                                                                children: [t.auctionFromTime && q < t.auctionFromTime && (0,
                                                                    a.jsx)("div", {
                                                                        className: "button-start-auction text-base disable-btn-default",
                                                                        children: (0,
                                                                            a.jsx)("span", {
                                                                                children: "Ch\u1edd \u0111\u1ea5u gi\xe1"
                                                                            })
                                                                    }), t.auctionFromTime && t.auctionToTime && q >= t.auctionFromTime && q < t.auctionToTime && (0,
                                                                        a.jsx)("div", {
                                                                            className: "button-start-auction text-base primary-btn-default",
                                                                            children: (0,
                                                                                a.jsx)("span", {
                                                                                    children: T("plate_card.join_auction")
                                                                                })
                                                                        }), t.auctionToTime && q >= t.auctionToTime && (0,
                                                                            a.jsx)("div", {
                                                                                className: "button-start-auction text-base disable-btn-default",
                                                                                children: (0,
                                                                                    a.jsx)("span", {
                                                                                        children: T("plate_card.end_start_auction")
                                                                                    })
                                                                            })]
                                                            })]
                                                }), !(null === F || void 0 === F ? void 0 : F.hideRegisterButton) && (0,
                                                    a.jsx)(r.Z, {
                                                        wrapperClassName: "common-btn-spinning flex-1 group",
                                                        indicator: (0,
                                                            a.jsx)(n.Z, {
                                                                style: {
                                                                    fontSize: 24,
                                                                    color: "yellow"
                                                                }
                                                            }),
                                                        spinning: K,
                                                        children: (0,
                                                            a.jsx)(s.ZP, {
                                                                className: "submit-btn text-xs py-2 px-3 w-full h-8 sm:h-9  ".concat(t.registered || M || t.registerToDate && +t.registerToDate < q ? "primary-btn-disable cursor-not-allowed" : "primary-btn-default"),
                                                                onClick: U,
                                                                disabled: !!t.registered || M,
                                                                children: (0,
                                                                    a.jsx)("span", {
                                                                        className: (t.registered || !P || M || t.registerToDate && +t.registerToDate < q ? "text-[var(--neutral-40)]" : "text-[var(--neutral-white)]") + " text-xs sm:text-sm",
                                                                        children: T(O)
                                                                    })
                                                            })
                                                    })]
                                        })]
                    })
        }
    },
    77392: function (e, t, i) {
        i.d(t, {
            Z: function () {
                return Y
            }
        });
        var a = i(85893)
            , n = i(34447)
            , o = i(49647)
            , r = i(24019)
            , s = i(75302)
            , l = i(2453)
            , c = i(81878)
            , d = i(66748)
            , u = i(71577)
            , m = i(62576)
            , p = i(64736)
            , x = i(11163)
            , v = i(84319)
            , h = i(92476)
            , f = i(67421);
        var g = e => {
            let { plate: t, btnControl: i } = e;
            const { t: n } = (0,
                f.$G)()
                , o = (0,
                    m.Z)()
                , r = (0,
                    h.A)()
                , s = (0,
                    x.useRouter)()
                , { showLoadingFullScreen: c, offLoadingFullScreen: d } = (0,
                    v.D)()
                , g = async e => {
                    if (!o)
                        return history.pushState({
                            ...history.state,
                            prevData: s.pathname
                        }, s.pathname),
                            void s.push("/dang-nhap");
                    if ((null === o || void 0 === o ? void 0 : o.account.profileStatus) === p.eB.rejected)
                        return l.ZP.destroy(),
                            void l.ZP.warning(n("profile.reject_profile"));
                    if ((null === o || void 0 === o ? void 0 : o.account.profileStatus) !== p.eB.profile_completed && (null === o || void 0 === o ? void 0 : o.account.profileStatus) !== p.eB.approved)
                        return l.ZP.destroy(),
                            l.ZP.warning(n("profile.need_complete_profile")),
                            void setTimeout((() => {
                                s.push("/thong-tin/tai-khoan")
                            }
                            ), 1e3);
                    if (e.inOrder)
                        return;
                    c();
                    const t = await r.createOrder(e);
                    d(),
                        t && (e.plateNumber.includes("10K") ? l.ZP.success("T\u1ea1o \u0111\u01a1n h\xe0ng th\xe0nh c\xf4ng.") : s.push("/thanh-toan/" + t))
                }
                ;
            return (0,
                a.jsx)(a.Fragment, {
                    children: (0,
                        a.jsx)(u.ZP, {
                            className: "submit-btn text-xs py-2 px-3 w-full h-8 sm:h-9  ".concat((null === i || void 0 === i ? void 0 : i.enable) ? "primary-btn-default" : "primary-btn-disable cursor-not-allowed"),
                            onClick: async () => {
                                if (o) {
                                    if (!t)
                                        return;
                                    if (!t.registered)
                                        return void g(t);
                                    t.registered && !t.statusOrder && t.orderId && s.push({
                                        pathname: "/thanh-toan/" + (null === t || void 0 === t ? void 0 : t.orderId)
                                    })
                                } else
                                    s.push("/dang-nhap")
                            }
                            ,
                            disabled: !(null === i || void 0 === i ? void 0 : i.enable),
                            children: (0,
                                a.jsx)("span", {
                                    className: ((null === i || void 0 === i ? void 0 : i.enable) ? "text-[var(--neutral-white)]" : "text-[var(--neutral-40)]") + " text-xs sm:text-sm",
                                    children: null === i || void 0 === i ? void 0 : i.text
                                })
                        })
                })
        }
            , b = i(64187)
            , _ = i(17093)
            , T = i(18650)
            , j = i(93589)
            , y = i(27484)
            , N = i.n(y)
            , w = i(44279)
            , C = i(67294)
            , D = i(63051);
        const { useBreakpoint: I } = s.ZP;
        var S = e => {
            let { plate: t, open: i, onCancel: n } = e;
            const { t: o } = (0,
                f.$G)()
                , { timestamp: r } = (0,
                    w.Z)()
                , [s, l] = (0,
                    C.useState)([])
                , c = (0,
                    j.c)({
                        sizeLg: 800
                    })
                , d = (I(),
                    [{
                        title: o("plate_card.license_plate"),
                        content: t.plateNumber
                    }, {
                        title: o("plate_card.register_from_date"),
                        content: t && (null === t || void 0 === t ? void 0 : t.registerFromDate) ? N()((0,
                            D.v)(t.registerFromDate)).format("HH:mm DD/MM/YYYY") : ""
                    }, {
                        title: o("plate_card.register_to_date"),
                        content: t && (null === t || void 0 === t ? void 0 : t.registerToDate) ? N()((0,
                            D.v)(t.registerToDate)).format("HH:mm DD/MM/YYYY") : ""
                    }, {
                        title: o("plate_card.auction_from_time"),
                        content: t && (null === t || void 0 === t ? void 0 : t.auctionFromTime) ? N()((0,
                            D.v)(t.auctionFromTime)).format("HH:mm DD/MM/YYYY") : ""
                    }, {
                        title: o("plate_card.auction_to_time"),
                        content: t && (null === t || void 0 === t ? void 0 : t.auctionToTime) ? N()((0,
                            D.v)(t.auctionToTime)).format("HH:mm DD/MM/YYYY") : ""
                    }]);
            return (0,
                a.jsx)(b.Z, {
                    open: i,
                    onCancel: n,
                    className: "car-left-modal-v2 h-[500px] order-detail-modal md:max-w-[450px] min-w-[350px]",
                    footer: null,
                    width: c,
                    maskClosable: !0,
                    centered: !0,
                    closeIcon: (0,
                        a.jsx)(a.Fragment, {
                            children: (0,
                                a.jsx)(T.Z, {})
                        }),
                    children: (0,
                        a.jsx)(_.ZP, {
                            theme: {
                                token: {
                                    fontFamily: "Inter"
                                }
                            },
                            children: (0,
                                a.jsx)("div", {
                                    className: "md:p-5 md:pr-11 md:pt-8 pt-7 pr-7",
                                    children: d.map(((e, t) => e.content && e.content.length > 0 && (0,
                                        a.jsxs)("div", {
                                            className: "flex flex-row justify-between mb-5 md:text-base text-sm gap-3",
                                            children: [(0,
                                                a.jsx)("div", {
                                                    className: "text-[var(--neutral-50)]",
                                                    children: e.title
                                                }), (0,
                                                    a.jsx)("div", {
                                                        className: "text-[var(--text)]",
                                                        children: e.content
                                                    })]
                                        }, t)))
                                })
                        })
                })
        }
            , k = i(39126)
            , Z = i(9726)
            , F = i(18206)
            , E = i(25675)
            , M = i.n(E)
            , R = i(44479)
            , P = i(95830)
            , B = i(43598);
        const G = {
            xs: "49px",
            md: "50px",
            lg: "52px",
            xl: "64px"
        }
            , { useBreakpoint: L } = s.ZP;
        var Y = e => {
            let { plateNumberFontSize: t = G, plate: i, className: s, plateBg: u = "bien_so_xe/bg-license-plates-1.webp", checkable: p = !1, removable: v = !1, showButton: b = !0, auctionRoom: _ = !1, checked: T, onCheck: j, onRemove: y, showClockIconOnMobile: N, isWaitAuction: D = !1, isCustomerFollowView: I = !1, keyItem: E } = e;
            const Y = (0,
                x.useRouter)()
                , { t: A } = (0,
                    f.$G)()
                , { sm: O } = L()
                , H = (0,
                    C.useRef)(null)
                , [z, $] = (0,
                    C.useState)(!1)
                , [q, V] = (0,
                    C.useState)(!1)
                , W = (0,
                    C.useMemo)((() => {
                        if ("object" === typeof t) {
                            var e, i, a, n, o;
                            const r = {
                                xs: t.xs,
                                sm: null !== (e = t.sm) && void 0 !== e ? e : t.xs,
                                md: null !== (i = t.md) && void 0 !== i ? i : t.xs,
                                lg: null !== (a = t.lg) && void 0 !== a ? a : t.xs,
                                xl: null !== (n = t.xl) && void 0 !== n ? n : t.xs,
                                xxl: null !== (o = t.xxl) && void 0 !== o ? o : t.xs
                            };
                            let s = t.xs;
                            return Object.keys(r).forEach((e => {
                                const i = e;
                                if (r.hasOwnProperty(i)) {
                                    const e = t[i];
                                    e ? (r[i] = e,
                                        s = e) : r[i] = s
                                }
                            }
                            )),
                                r
                        }
                        return null
                    }
                    ), [t]);
            (0,
                C.useEffect)((() => {
                    H.current && W && Object.keys(W).forEach((e => {
                        if (W.hasOwnProperty(e)) {
                            const t = e;
                            H.current.style.setProperty("--pl-number-font-size-".concat(t), W[t].toString())
                        }
                    }
                    ))
                }
                ), [H.current, W]);
            const X = (0,
                C.useCallback)((e => {
                    T || (null === e || void 0 === e || e.stopPropagation(),
                        $(!0))
                }
                ), [y, i, T])
                , K = (0,
                    C.useCallback)((e => {
                        p && (e.preventDefault(),
                            e.stopPropagation(),
                            j && j(i))
                    }
                    ), [p, j, i])
                , J = (0,
                    h.A)()
                , Q = (0,
                    R.F)()
                , U = (0,
                    m.Z)()
                , [ee, te] = (0,
                    C.useState)(i.favorited)
                , [ie, ae] = (0,
                    C.useState)(!1);
            var ne;
            const [oe, re] = (0,
                C.useState)(null !== (ne = i.wishlistCount) && void 0 !== ne ? ne : 0)
                , [se, le] = (0,
                    C.useState)(!1)
                , [ce, de] = (0,
                    C.useState)(!1)
                , [ue, me] = (0,
                    C.useState)({
                        title: "",
                        content: ""
                    })
                , { timestamp: pe } = (0,
                    w.Z)();
            (0,
                C.useEffect)((() => {
                    const e = !!i.registerToDate && (pe >= i.registerToDate && i.status == F.iL.REGISTERING);
                    le(e)
                }
                ), [i]),
                (0,
                    C.useEffect)((() => {
                        const e = !i.registerToDate || (pe >= i.registerToDate || i.status > F.iL.REGISTERING);
                        de(e)
                    }
                    ), [i]),
                (0,
                    C.useEffect)((() => {
                        var e;
                        te(!!(null === i || void 0 === i ? void 0 : i.inWishlist) || !!(null === i || void 0 === i ? void 0 : i.favorited)),
                            re(null !== (e = i.wishlistCount) && void 0 !== e ? e : 0)
                    }
                    ), [i]);
            const { run: xe } = (0,
                k.DI)((0,
                    C.useCallback)((async e => {
                        if (e.preventDefault(),
                            e.stopPropagation(),
                            ie)
                            return;
                        if (!U)
                            return void l.ZP.error(A("plate_card.action_login_required"));
                        ae(!0);
                        let t = "";
                        t = Y.pathname.includes("bien-da-dang-ky") ? i.publishDetailId || "" : i.id,
                            ee ? await J.unFavorite(t) && (te(!1),
                                re((e => {
                                    const t = e - 1 >= 0 ? e - 1 : 0;
                                    return i.wishlistCount = t,
                                        t
                                }
                                ))) : await J.favorite(t) && (te(!0),
                                    re((e => {
                                        const t = ++e;
                                        return i.wishlistCount = t,
                                            t
                                    }
                                    ))),
                            ae(!1),
                            Q.getWishlistCount()
                    }
                    ), [J, i, ee, ie, Q]), {
                    wait: 200
                })
                , ve = (0,
                    C.useMemo)((() => {
                        if (!i.registerToDate)
                            return "";
                        const e = Math.floor(i.registerToDate / 1e3)
                            , t = Math.max(0, e - Math.floor(pe / 1e3))
                            , a = (0,
                                Z.O)(t);
                        return "".concat(a.days, " ng\xe0y ").concat(a.hours, " gi\u1edd ").concat(a.minutes, " ph\xfat")
                    }
                    ), [i])
                , [he, fe] = (0,
                    C.useState)({
                        enable: !0,
                        text: ""
                    })
                , ge = e => {
                    let t = "";
                    return e.days > 0 && (t += "".concat(e.days, " ng\xe0y ")),
                        e.hours > 0 && (t += "".concat(e.hours, " gi\u1edd ")),
                        e.minutes > 0 && (t += "".concat(e.minutes, " ph\xfat")),
                        t
                }
                ;
            (0,
                C.useMemo)((() => {
                    pe && i && D && (() => {
                        if (i.registerToDate && pe < i.registerToDate) {
                            const e = Math.floor(i.registerToDate / 1e3)
                                , t = Math.max(0, e - Math.floor(pe / 1e3))
                                , a = (0,
                                    Z.O)(t)
                                , n = a.days || a.hours || a.minutes ? ge(a) : "".concat(a.seconds, " gi\xe2y")
                                , o = i.registered ? i.statusOrder ? "Ch\u1edd \u0111\u1ea5u gi\xe1" : "Ch\u1edd thanh to\xe1n" : "\u0110\u0103ng k\xfd \u0111\u1ea5u gi\xe1";
                            return fe({
                                enable: pe <= i.registerToDate && (!i.registered || i.registered && !i.statusOrder),
                                text: o
                            }),
                                void me({
                                    title: A("plate_card.register_time_remain"),
                                    content: n
                                })
                        }
                        if (i.auctionFromTime && i.registerToDate && pe >= i.registerToDate && pe <= i.auctionFromTime) {
                            const e = Math.floor(i.auctionFromTime / 1e3)
                                , t = Math.max(0, e - Math.floor(pe / 1e3))
                                , a = (0,
                                    Z.O)(t)
                                , n = a.days || a.hours || a.minutes ? ge(a) : "".concat(a.seconds, " gi\xe2y");
                            fe({
                                enable: !(pe > i.registerToDate && pe <= i.auctionFromTime),
                                text: "Ch\u1edd \u0111\u1ea5u gi\xe1"
                            }),
                                me({
                                    title: A("plate_card.wait_auction_time_remain"),
                                    content: n
                                })
                        }
                    }
                    )()
                }
                ), [i, pe]);
            const be = (0,
                C.useMemo)((() => {
                    if (i)
                        return !!(i && i.auctionFromTime && i.auctionToTime && pe >= i.auctionFromTime && pe <= i.auctionToTime)
                }
                ), [pe]);
            var _e;
            return (0,
                a.jsxs)("div", {
                    id: E ? "plate_".concat(E) : "",
                    className: "slide-plate-item__child ".concat(se ? "disable-high-light" : "", " ").concat(be ? "active-auction-room" : "", " ").concat(T ? "slide-plate-item__child-checked" : ""),
                    children: [(0,
                        a.jsxs)("div", {
                            ref: H,
                            className: "listing-card-container relative p-0 ".concat(null !== s && void 0 !== s ? s : ""),
                            children: [(0,
                                a.jsxs)("div", {
                                    className: "",
                                    children: [(0,
                                        a.jsxs)("div", {
                                            className: "mb-3 bg-[var(--neutral-white)] text-[var(--text-plate)] flex flex-col justify-center items-center rounded-md plate-number-wrapper aspect-[2/1] border-solid border-[4px] border-[var(--text-plate)]",
                                            children: [(0,
                                                a.jsx)("span", {
                                                    className: "plate-number",
                                                    children: i.plateNumber.split("-")[0]
                                                }), (0,
                                                    a.jsx)("span", {
                                                        className: "plate-number",
                                                        children: i.plateNumber.split("-")[1]
                                                    })]
                                        }), (0,
                                            a.jsxs)("div", {
                                                className: "flex gap-1 justify-between mb-1 text-[10px] sm:text-sm",
                                                children: [i.location && (0,
                                                    a.jsxs)("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [(0,
                                                            a.jsx)("div", {
                                                                className: "text-[var(--neutral-50)]",
                                                                children: (0,
                                                                    P.v2)("".concat(i.type))
                                                            }), (0,
                                                                a.jsx)("div", {
                                                                    className: "bg-[var(--neutral-50)] h-1 w-1 rounded-full"
                                                                }), (0,
                                                                    a.jsx)("div", {
                                                                        className: "text-[var(--neutral-50)]",
                                                                        children: i.location.renderLabel || i.location.label
                                                                    })]
                                                    }), void 0 !== oe ? (0,
                                                        a.jsxs)("div", {
                                                            className: "plate-card-wishlist flex gap-2 items-center text-[var(--text)] bg-[var(--bg-color-4)] hover:bg-[var(--neutral-50)] mr-[-12px] px-2 py-1 rounded-tl-[20px] rounded-bl-[20px] cursor-pointer",
                                                            onClick: xe,
                                                            children: [(0,
                                                                a.jsx)("div", {
                                                                    className: "text-lg",
                                                                    children: ee ? (0,
                                                                        a.jsx)(n.Z, {
                                                                            className: "text-[var(--heart-color)]"
                                                                        }) : (0,
                                                                            a.jsx)(o.Z, {
                                                                                className: "text-[var(--heart-color)]"
                                                                            })
                                                                }), (0,
                                                                    a.jsx)("span", {
                                                                        className: "text-xs font-medium",
                                                                        children: null !== (_e = oe >= 1e3 ? "999+" : oe) && void 0 !== _e ? _e : 0
                                                                    })]
                                                        }) : null]
                                            }), !_ && (0,
                                                a.jsxs)("div", {
                                                    className: "flex gap-5 items-center ".concat(p && "border_tab-bottom pb-2"),
                                                    children: [(0,
                                                        a.jsx)(r.Z, {
                                                            className: "text-[var(--text)] text-lg rounded-full p-2 bg-[var(--neutral-90)] ".concat(N ? "inline-flex" : "hidden sm:inline-flex")
                                                        }), v && p && i.registerToDate && !D && +i.registerToDate < pe && i.status > F.iL.FINISHED_REGISTERING && (0,
                                                            a.jsx)("div", {
                                                                children: (0,
                                                                    a.jsx)("div", {
                                                                        className: "text-[var(--neutral-30)] text-sm lg:text-base",
                                                                        children: A("plate_card.plate_fail")
                                                                    })
                                                            }), i.registerToDate && !D && +i.registerToDate > pe && i.status == F.iL.REGISTERING && (0,
                                                                a.jsxs)("div", {
                                                                    children: [(0,
                                                                        a.jsx)("div", {
                                                                            className: "text-[var(--neutral-30)] text-xs",
                                                                            children: A(O ? "plate_card.registration_end" : "plate_card.registration_end_xs")
                                                                        }), (0,
                                                                            a.jsx)("div", {
                                                                                className: "text-[var(--text)] text-sm lg:text-base",
                                                                                children: ve
                                                                            })]
                                                                }), (i.registerToDate && +i.registerToDate <= pe && i.status == F.iL.REGISTERING || i.status == F.iL.FINISHED_REGISTERING) && !D && (0,
                                                                    a.jsxs)("div", {
                                                                        children: [(0,
                                                                            a.jsx)("div", {
                                                                                className: "text-[var(--neutral-50)] text-[12px]",
                                                                                children: A("plate_card.payment_end")
                                                                            }), (0,
                                                                                a.jsx)("div", {
                                                                                    className: "text-[var(--text)] text-[13px] sm:text-sm lg:text-base",
                                                                                    children: A("plate_card.start_auction")
                                                                                })]
                                                                    }), D && (0,
                                                                        a.jsxs)("div", {
                                                                            children: [(0,
                                                                                a.jsx)("div", {
                                                                                    className: "text-[var(--neutral-50)] text-[12px]",
                                                                                    children: ue.title
                                                                                }), (0,
                                                                                    a.jsx)("div", {
                                                                                        className: "text-[var(--text)] text-[13px] sm:text-sm lg:text-base",
                                                                                        children: ue.content
                                                                                    })]
                                                                        })]
                                                }), v && p && (0,
                                                    a.jsxs)("div", {
                                                        className: "flex justify-between items-center text-[var(--secondary-color)] mt-3",
                                                        children: [(0,
                                                            a.jsx)("div", {
                                                                className: "hover:scale-110 cursor-pointer",
                                                                onClick: X,
                                                                children: (0,
                                                                    a.jsx)(M(), {
                                                                        src: "/profile/profile-plate-trash_icon.svg",
                                                                        alt: "remove-plate-icon",
                                                                        width: 20,
                                                                        height: 20,
                                                                        onError: B.F
                                                                    })
                                                            }), T ? (0,
                                                                a.jsxs)("div", {
                                                                    className: "flex items-center w-[80%] justify-end cursor-pointer ".concat(ce ? "disable-cart" : ""),
                                                                    onClick: K,
                                                                    children: [(0,
                                                                        a.jsx)(M(), {
                                                                            src: "/profile/profile-cart_plate_check.svg",
                                                                            alt: "cart-active-icon",
                                                                            width: 20,
                                                                            height: 20,
                                                                            onError: B.F
                                                                        }), (0,
                                                                            a.jsx)("span", {
                                                                                className: "ml-1 hover:text-[var(--semantic-green)]",
                                                                                children: A("plate_card.picked")
                                                                            })]
                                                                }) : (0,
                                                                    a.jsx)("div", {
                                                                        onClick: K,
                                                                        className: "".concat(ce ? "disable-cart" : "", " hover:text-[var(--semantic-green)] w-[80%] flex justify-end cursor-pointer"),
                                                                        children: !ce && (0,
                                                                            a.jsx)("div", {
                                                                                className: "hover:scale-110 w-fit",
                                                                                children: A("plate_card.unpick")
                                                                            })
                                                                    })]
                                                    })]
                                }), D ? b && (0,
                                    a.jsx)(g, {
                                        plate: i,
                                        btnControl: he
                                    }) : b && (0,
                                        a.jsx)(d.Z, {
                                            plate: i,
                                            isCustomerFollowView: I
                                        }), (0,
                                            a.jsx)("div", {
                                                className: "text-center text-[var(--primary-color)] cursor-pointer",
                                                onClick: () => V(!0),
                                                children: A("plate_card.view_detail_plate")
                                            })]
                        }), (0,
                            a.jsx)(c.Z, {
                                title: A("plate_card.confirm_delete_title"),
                                subTitle: A("plate_card.confirm_delete_subtitle"),
                                onCancelModal: () => $(!1),
                                visibleModal: z,
                                onRemove: () => ($(!1),
                                    null === y || void 0 === y ? void 0 : y(i))
                            }), (0,
                                a.jsx)(S, {
                                    plate: i,
                                    open: q,
                                    onCancel: () => V(!1)
                                })]
                })
        }
    },
    81878: function (e, t, i) {
        var a = i(85893)
            , n = i(17093)
            , o = i(64187)
            , r = i(71577)
            , s = i(18650)
            , l = i(67421);
        t.Z = e => {
            let { title: t, subTitle: i, visibleModal: c, onCancelModal: d, onRemove: u, successText: m = "X\xf3a" } = e;
            const { t: p } = (0,
                l.$G)();
            return (0,
                a.jsx)(a.Fragment, {
                    children: (0,
                        a.jsx)(n.ZP, {
                            theme: {
                                token: {
                                    fontFamily: "Inter"
                                },
                                components: {
                                    Form: {
                                        fontFamily: "Inter",
                                        colorTextHeading: "var(--neutral-white)"
                                    },
                                    Input: {
                                        colorPrimaryHover: "var(--secondary-color)"
                                    }
                                }
                            },
                            children: (0,
                                a.jsx)(o.Z, {
                                    open: c,
                                    onCancel: d,
                                    closeIcon: (0,
                                        a.jsx)(s.Z, {}),
                                    className: "modal-confirm-delete-from-cart max-w-[850px] max-h-fit min-h-[258px] w-[95%] sm:w-[90%]",
                                    footer: null,
                                    maskClosable: !1,
                                    children: (0,
                                        a.jsxs)("div", {
                                            className: "flex flex-col gap-2 w-full px-3 py-8 sm:px-8 ms:py-[30px] font-semibold",
                                            children: [(0,
                                                a.jsx)("div", {
                                                    className: "md:text-[16px] text-base text-[var(--text-diffrent)] text-center",
                                                    children: t
                                                }), (0,
                                                    a.jsx)("div", {
                                                        className: "md:text-base text-sm text-[var(--neutral-50)] mb-5 text-center",
                                                        children: i
                                                    }), (0,
                                                        a.jsxs)("div", {
                                                            className: "flex sm:flex-row flex-col gap-5 justify-around",
                                                            children: [(0,
                                                                a.jsx)(r.ZP, {
                                                                    className: "primary-btn-default min-w-[120px] h-full float-right font-medium py-2 text-sm md:text-base",
                                                                    onClick: u,
                                                                    children: m
                                                                }), (0,
                                                                    a.jsx)(r.ZP, {
                                                                        className: "primary-btn-cancel min-w-[120px] h-full float-right font-medium py-2 text-sm md:text-base",
                                                                        onClick: d,
                                                                        children: "H\u1ee7y"
                                                                    })]
                                                        })]
                                        })
                                })
                        })
                })
        }
    },
    93589: function (e, t, i) {
        i.d(t, {
            c: function () {
                return d
            }
        });
        var a = i(75302)
            , n = i(67294);
        const { useBreakpoint: o } = a.ZP
            , r = 310
            , s = 500
            , l = 600
            , c = 1e3;
        function d(e) {
            const { xs: t, sm: i, lg: a, md: d } = o()
                , [u, m] = (0,
                    n.useState)(c);
            return (0,
                n.useEffect)((() => {
                    let n = u;
                    switch (!0) {
                        case a:
                            var o;
                            n = null !== (o = null === e || void 0 === e ? void 0 : e.sizeLg) && void 0 !== o ? o : c;
                            break;
                        case d:
                            var p;
                            n = null !== (p = null === e || void 0 === e ? void 0 : e.sizeMd) && void 0 !== p ? p : l;
                            break;
                        case i:
                            var x;
                            n = null !== (x = null === e || void 0 === e ? void 0 : e.sizeSm) && void 0 !== x ? x : s;
                            break;
                        case t:
                            var v;
                            n = null !== (v = null === e || void 0 === e ? void 0 : e.sizeXs) && void 0 !== v ? v : r;
                            break;
                        default:
                            n = c
                    }
                    m(n)
                }
                ), [t, i, a, d, e]),
                u
        }
    },
    9726: function (e, t, i) {
        i.d(t, {
            O: function () {
                return r
            },
            Z: function () {
                return o
            }
        });
        var a = i(44279)
            , n = i(67294);
        function o(e) {
            let { onEnd: t, onChange: i, endTime: o } = e;
            const { timestamp: s } = (0,
                a.Z)()
                , [l, c] = (0,
                    n.useState)(r(Math.max(0, o - Math.floor(s / 1e3))))
                , d = (0,
                    n.useMemo)((() => Math.max(0, o - Math.floor(s / 1e3))), [o]);
            return (0,
                n.useEffect)((() => {
                    const e = Math.max(0, o - Math.floor(s / 1e3));
                    if (e <= 0)
                        return null === t || void 0 === t || t(),
                            void c({
                                days: 0,
                                hours: 0,
                                minutes: 0,
                                seconds: 0
                            });
                    let a, n = 0;
                    const l = () => {
                        n++;
                        const o = Math.max(0, e - n);
                        if (o <= 0)
                            return null === t || void 0 === t || t(),
                                c({
                                    days: 0,
                                    hours: 0,
                                    minutes: 0,
                                    seconds: 0
                                }),
                                void clearTimeout(a);
                        null === i || void 0 === i || i(d, o),
                            c(r(o))
                    }
                        ;
                    return l(),
                        a = setInterval(l, 1e3),
                        () => {
                            clearInterval(a)
                        }
                }
                ), [o, s]),
            {
                time: l
            }
        }
        function r(e) {
            if (e <= 0)
                return {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                };
            return {
                days: Math.floor(e / 3600 / 24),
                hours: Math.floor(e % 86400 / 3600),
                minutes: Math.floor(e % 3600 / 60),
                seconds: Math.floor(e % 60)
            }
        }
    },
    70989: function (e, t, i) {
        i.d(t, {
            Z: function () {
                return o
            }
        });
        i(85893),
            i(39126);
        var a = i(67294);
        i(67421),
            i(21901),
            i(95830);
        const n = (0,
            a.createContext)({
                sessionIds: [],
                isOnline: !0
            });
        function o() {
            return (0,
                a.useContext)(n)
        }
    },
    21901: function (e, t, i) {
        i(78723),
            i(51302)
    }
}]);
