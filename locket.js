// ============================================================
// Locket Remote Config Full & Custom Fix (Nguyen Cong An)
// ============================================================

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
var obj = JSON.parse($response.body);

if (ua.includes("Locket")) {
    obj.entries = obj.entries || {};

    // 1. MỞ KHÓA TÍNH NĂNG GOLD (FEATURE GATES)
    Object.assign(obj.entries, {
        feature_gates: JSON.stringify({
            app_icon_picker: "enabled",
            camera_roll: "enabled",
            camera_theme: "enabled",
            locket_views: "enabled",
            long_captions: "enabled",
            longer_video: "enabled",
            unlimited_friends: "enabled",
            priority_support: "enabled",
            profile_badge: "enabled",
            remove_ads: "enabled",
            video: "enabled",
            custom_widget_frames: "enabled",
            streak_recovery: "enabled"
        }),
        upsell_features: JSON.stringify({
            app_icon_picker: true,
            camera_roll: true,
            camera_theme: true,
            locket_views: true,
            remove_ads: true,
            custom_widget_frames: true
        }),
        profile_badge_visible: "true"
    });

    // 2. CHẶN QUẢNG CÁO & TRACKING
    Object.assign(obj.entries, {
        history_ads_mode: "off",
        sentry_sample_rate: "0"
    });

    // 3. TÙY CHỈNH THỜI LƯỢNG VIDEO (60 GIÂY)
    var MY_VIDEO_DURATION = 60.0; 
    var cameraConfig = {
        gold_max_duration: MY_VIDEO_DURATION,
        goldMaxDuration: MY_VIDEO_DURATION,
        max_duration: MY_VIDEO_DURATION,
        maxDuration: MY_VIDEO_DURATION,
        ultra_wide: true,
        ultraWide: true,
        volume_button: true,
        volumeButton: true,
        flash_button: true,
        telephoto: true,
        quality_mbps: 1.5
    };

    obj.entries.camera = JSON.stringify(cameraConfig);
    obj.entries.camera_roll = JSON.stringify(cameraConfig);

    var durationStr = MY_VIDEO_DURATION.toString();
    Object.assign(obj.entries, {
        camera_roll_video_max_duration: durationStr,
        camera_roll_max_duration: durationStr,
        camera_roll_duration: durationStr,
        max_video_duration: durationStr,
        video_max_duration: durationStr,
        video_trim_max_duration: durationStr,
        trim_max_duration: durationStr,
        gold_max_duration: durationStr,
        goldMaxDuration: durationStr,
        longer_camera_roll_videos_enabled: "true",
        camera_roll_video_upload_enabled: "true"
    });

    // 4. BẬT HỆ THỐNG CAPTION
    obj.entries.captions_enabled = "true";
    obj.entries.overlay_navigator_enabled = "true";

    // Danh sách các caption tùy chỉnh thêm vào
    var customSections = [
        {
            section: "nca",
            items: [
                {
                    overlay_id: "caption:nguyencongan",
                    source: "remote",
                    caption: {
                        background: { colors: ["#2b2b2b", "#1f1f1f"] },
                        icon: { data: " ", type: "emoji" },
                        max_lines: 1,
                        text: "nguyencongan",
                        text_color: "#ff375f",
                        type: "static_content"
                    }
                },
                {
                    overlay_id: "caption:feeling_cute",
                    source: "remote",
                    caption: {
                        background: { colors: ["#ff9a9e", "#fecfef"] },
                        icon: { data: "🥺", type: "emoji" },
                        max_lines: 1,
                        text: "Feeling Cute",
                        text_color: "#ffffff",
                        type: "static_content"
                    }
                }
            ]
        },
        {
            section: "Holiday Caption",
            items: [
                {
                    overlay_id: "caption:halloween",
                    source: "remote",
                    caption: {
                        background: { colors: ["#ff7500", "#222222"] },
                        icon: { data: "🎃", type: "emoji" },
                        max_lines: 1,
                        text: "Halloween",
                        text_color: "#ffb700",
                        type: "static_content"
                    }
                },
                {
                    overlay_id: "caption:xin_chao_mua_thu",
                    source: "remote",
                    caption: {
                        background: { colors: ["#8B4513", "#D2B48C"] },
                        icon: { data: "🍂", type: "emoji" },
                        max_lines: 1,
                        text: "Xin chào Mùa Thu",
                        text_color: "#FFFFFF",
                        type: "static_content"
                    }
                },
                {
                    overlay_id: "caption:giang_sinh",
                    source: "remote",
                    caption: {
                        background: { colors: ["#006400", "#8B0000"] },
                        icon: { data: "🎄", type: "emoji" },
                        max_lines: 1,
                        text: "Giáng sinh an lành",
                        text_color: "#FFFFFF",
                        type: "static_content"
                    }
                }
            ]
        },
        {
            section: "Trend TikTok",
            items: [
                {
                    overlay_id: "caption:check_var",
                    source: "remote",
                    caption: {
                        background: { colors: ["#11998e", "#38ef7d"] },
                        icon: { data: "💻", type: "emoji" },
                        max_lines: 1,
                        text: "Check VAR liên",
                        text_color: "#FFFFFF",
                        type: "static_content"
                    }
                },
                {
                    overlay_id: "caption:qua_nhieu_thu",
                    source: "remote",
                    caption: {
                        background: { colors: ["#ff758c", "#ff7eb3"] },
                        icon: { data: "🎀", type: "emoji" },
                        max_lines: 1,
                        text: "Quá nhiều sự dễ thương",
                        text_color: "#FFFFFF",
                        type: "static_content"
                    }
                }
            ]
        },
        {
            section: "Độc lạ",
            items: [
                {
                    overlay_id: "caption:xin_vinh_biet",
                    source: "remote",
                    caption: {
                        background: { colors: ["#cb2d3e", "#ef473a"] },
                        icon: { data: "💀", type: "emoji" },
                        max_lines: 1,
                        text: "Xin vĩnh biệt cụ",
                        text_color: "#FFFFFF",
                        type: "static_content"
                    }
                },
                {
                    overlay_id: "caption:chay_ngay_di",
                    source: "remote",
                    caption: {
                        background: { colors: ["#f857a6", "#ff5858"] },
                        icon: { data: "🏃", type: "emoji" },
                        max_lines: 1,
                        text: "Chạy ngay đi",
                        text_color: "#FFFFFF",
                        type: "static_content"
                    }
                }
            ]
        }
    ];

    // Xử lý giữ nguyên overlay gốc của Locket để không bị mất chức năng đăng riêng tư
    if (obj.entries.overlay_items) {
        try {
            var nativeItems = JSON.parse(obj.entries.overlay_items);
            if (Array.isArray(nativeItems)) {
                obj.entries.overlay_items = JSON.stringify(customSections.concat(nativeItems));
            } else {
                obj.entries.overlay_items = JSON.stringify(customSections);
            }
        } catch (e) {
            obj.entries.overlay_items = JSON.stringify(customSections);
        }
    } else {
        // Dự phòng danh sách mặc định nếu không nhận được dữ liệu gốc
        customSections.push({
            section: "Mặc định",
            items: [
                { overlay_id: "caption:standard", source: "local", caption: { type: "standard" } },
                { overlay_id: "caption:music", source: "local", caption: { type: "music" } },
                { overlay_id: "caption:location", source: "local", caption: { type: "location" } },
                { overlay_id: "caption:weather", source: "local", caption: { type: "weather" } },
                { overlay_id: "caption:time", source: "local", caption: { type: "time" } }
            ]
        });
        obj.entries.overlay_items = JSON.stringify(customSections);
    }
}

$done({ body: JSON.stringify(obj) });
