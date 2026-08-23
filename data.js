/**
 * 舟山花鸟岛拍摄行程规划数据
 * position: [经度, 纬度] (高德坐标)
 * scenes: 环境例图直链
 * poses: 动作参考直链
 */
window.HUANIAO_MAP_DATA = [
    {
        id: 1,
        position: [122.69783, 30.848415],
        title: "南岙沙滩",
        shortTitle: "南岙沙滩",
        priority: "必去",
        bestTime: "退潮前后 2 小时",
        duration: 90,
        walking: "从村口步行约 8 分钟",
        conditions: ["看潮汐", "日落友好"],
        travelTip: "礁石区域湿滑，建议穿防滑鞋；先拍礁石与白房子，再沿海岸等低机位逆光。",
        characters: [
            {
                name: "守岸人",
                desc: "退潮的时候适合去拍，需要走到边上有部分礁石的地方",
                scenes: ["./scene/nanaoshatan/nanaoshatan.jpg"],
                poses: [
                    "./pose/shatan/shouanren/1.JPEG",
                    "./pose/shatan/shouanren/2.PNG",
                    "./pose/shatan/shouanren/3.PNG",
                    "./pose/shatan/shouanren/4.png",
                    "./pose/shatan/shouanren/5.png",
                    "./pose/shatan/shouanren/6.png",
                    "./pose/shatan/shouanren/7.png",
                    "./pose/shatan/shouanren/8.png",
                    "./pose/shatan/shouanren/9.png",
                    "./pose/shatan/shouanren/10.png",
                    "./pose/shatan/shouanren/11.png",
                    "./pose/shatan/shouanren/12.png",
                    "./pose/shatan/shouanren/13.png",
                    "./pose/shatan/shouanren/14.png",
                    "./pose/shatan/shouanren/15.png",
                    "./pose/shatan/shouanren/16.jpg",
                    "./pose/shatan/shouanren/17.jpg",

                ]
            },
            {
                name: "美树沙耶香",
                desc: "退潮的时候适合去拍，许多白房子也可以当背景，晚上可海岸附近拍",
                scenes: ["./scene/nanaoshatan/nanaoshatan.jpg"],
                poses: [
                    "./pose/shatan/shayexiang/1.jpg",
                    "./pose/shatan/shayexiang/2.png",
                    "./pose/shatan/shayexiang/3.png",
                    "./pose/shatan/shayexiang/4.png",
                    "./pose/shatan/shayexiang/5.png",
                    "./pose/shatan/shayexiang/6.png",
                    "./pose/shatan/shayexiang/7.png",
                    "./pose/shatan/shayexiang/8.png",
                    "./pose/shatan/shayexiang/9.png",
                    "./pose/shatan/shayexiang/10.png",
                    "./pose/shatan/shayexiang/11.png",
                    "./pose/shatan/shayexiang/12.png",
                    "./pose/shatan/shayexiang/13.png",
                    "./pose/shatan/shayexiang/14.png",
                    "./pose/shatan/shayexiang/15.png",
                ]
            },
            {
                name: "爱莉泳装",
                desc: "退潮的时候适合去拍",
                scenes: ["./scene/nanaoshatan/nanaoshatan.jpg"],
                poses: [
                    "./pose/shatan/aili/1.png",
                    "./pose/shatan/aili/2.png",
                    "./pose/shatan/aili/3.jpg",
                    "./pose/shatan/aili/4.png",
                    "./pose/shatan/aili/5.png",
                    "./pose/shatan/aili/6.png",
                    "./pose/shatan/aili/7.png",
                    "./pose/shatan/aili/8.png",
                    "./pose/shatan/aili/9.png",
                    "./pose/shatan/aili/10.png",
                    "./pose/shatan/aili/11.png",
                    "./pose/shatan/aili/12.png",
                    "./pose/shatan/aili/13.png",

                ]
            },
            {
                name: "37",
                desc: "退潮的时候适合去拍，许多白房子也可以当背景，晚上可海岸附近拍",
                scenes: ["./scene/nanaoshatan/nanaoshatan.jpg"],
                poses: [
                    "./pose/shatan/37/1.png",
                    "./pose/shatan/37/3.png",
                    "./pose/shatan/37/4.png",
                    "./pose/shatan/37/5.jpg",
                    "./pose/shatan/37/6.jpg",
                    "./pose/shatan/37/7.jpg",
                    "./pose/shatan/37/8.jpg",
                    "./pose/shatan/37/9.jpg",
                    "./pose/shatan/37/10.jpg",
                    "./pose/shatan/37/11.png",
                    "./pose/shatan/37/12.png",
                    "./pose/shatan/37/13.png",
                    "./pose/shatan/37/14.png",
                    "./pose/shatan/37/15.png",
                    "./pose/shatan/37/16.png",
                ]
            },
                 {
                name: "水陈",
                desc: "退潮的时候适合去拍，许多白房子也可以当背景，晚上可海岸附近拍",
                scenes: ["./scene/nanaoshatan/nanaoshatan.jpg"],
                poses: [
                    "./pose/shatan/shuichen/1.png",
                    "./pose/shatan/shuichen/3.png",
                    "./pose/shatan/shuichen/4.png",
                    "./pose/shatan/shuichen/5.png",
                    "./pose/shatan/shuichen/6.png",
                    "./pose/shatan/shuichen/7.png",
                    "./pose/shatan/shuichen/8.png",
                    "./pose/shatan/shuichen/9.png",
                    "./pose/shatan/shuichen/10.png",
                    "./pose/shatan/shuichen/11.png",
                    "./pose/shatan/shuichen/12.png",
                    "./pose/shatan/shuichen/13.png",
                    "./pose/shatan/shuichen/14.png",
                    "./pose/shatan/shuichen/15.png",
                    "./pose/shatan/shuichen/16.png",
                ]
            }
        ]
    },
    {
        id: 2,
        position: [122.69547, 30.851743],
        title: "致爱书房",
        shortTitle: "致爱书房",
        priority: "室内备选",
        bestTime: "10:00 - 16:00",
        duration: 45,
        walking: "南岙沙滩步行约 12 分钟",
        conditions: ["避雨备选", "可换装"],
        travelTip: "优先确认书房开放状态。钢琴与门框适合低饱和、安静的近景；下雨或正午时可先来这里。",
        characters: [
            {
                name: "守岸人",
                desc: "钢琴、门为主要外景场地",
                scenes: ["./scene/zhiaishufang/gangqin.png", "./scene/zhiaishufang/men.png"],
                poses: [
                    "./pose/zhiaishufang/shouanren/1.png",
                    "./pose/zhiaishufang/shouanren/2.png",
                    "./pose/zhiaishufang/shouanren/3.png",
                    "./pose/zhiaishufang/shouanren/4.png",
                    "./pose/zhiaishufang/shouanren/5.png",
                ]
            }
        ]
    },
    {
        id: 3,
        position: [122.693911, 30.844471],
        title: "玛塔草坪秋千",
        shortTitle: "玛塔秋千",
        priority: "光线优先",
        bestTime: "15:30 - 日落",
        duration: 40,
        walking: "致爱书房步行约 10 分钟",
        conditions: ["晴天优先", "逆光好看"],
        travelTip: "下午侧逆光更柔和；草地风大时准备发夹，秋千需注意其他游客并保留安全距离。",
        characters: [
            {
                name: "守岸人",
                desc: "守岸人坐在秋千上，从侧面向镜头伸出一只手，像是在邀请",
                scenes: ["./scene/caopingqiuqian/qiuqian.jpg"],
                poses: [
                    "./pose/qiuqian/shouanren/1.jpg",
                ]
            },
        ]
    }
];
window.HUANIAO_TRIP_INFO = {
    title: "花鸟岛旅拍",
    dates: "9.6 - 9.8",
    duration: "三天两夜",
    transport: {
        outbound: {
            route: "上海市区 → 地铁16号线（滴水湖站）→ 换乘洋山专线公交 → 沈家湾码头 → 乘坐直达船 → 花鸟岛",
            landTravel: "整段陆路车程约 3.5 小时",
            schedule: [
                { time: "07:30", detail: "必须在地铁16号线出发" },
                { time: "09:00 / 09:50", detail: "洋山专线时间节点，需严格卡准" },
                { time: "11:00 前", detail: "抵达沈家湾码头，办理取票与安检" },
                { time: "11:45", detail: "开往花鸟岛的直达船" }
            ],
            costs: [
                { item: "地铁 + 洋山专线", price: "约 20 元" },
                { item: "直达联票（含船票 / 景区门票 / 观光车）", price: "320 元" },
                { item: "单人合计", price: "约 340 元", total: true }
            ],
            note: "一船直达花鸟岛，无需中间岛屿换乘，行李放好后省心省力；直达客船舒适度较高。缺点是清晨出发时间紧凑，必须严格卡准 16 号线与洋山专线的时间节点。"
        },
        returnTrip: {
            cost: "185 元",
            departure: "14:15"
        }
    },
    gear: {
        costumes: [
            { name: "守岸人", detail: "原皮 cos服" },
            { name: "美树沙耶香", detail: "" },
            { name: "爱莉泳装", detail: "崩坏三" },
            { name: "37", detail: "重返未来1999" },
            { name: "水陈", detail: "" }
        ],
        costumeCount: "共计 5 套",
        makeup: ["补妆用品"],
        dolls: ["洛天（娃娃）"],
        photography: [
            "AD200 ×4", "V860三代 ×1", "k55 柔光箱", "菲涅尔透镜",
            "S卡盘 ×3", "标准罩", "热熔胶枪", "猪嘴",
            "MT02 ×3", "水袋 ×2", "色片（黄、多彩）",
            "相机、镜头（存储卡提前清空）", "ND / CPL 滤镜（待购）"
        ],
        props: ["泳圈", "花（37用）", "花嫁花（守岸人钢琴）", "彩带"],
        medicine: ["感冒药", "拉肚子药"],
        snacks: ["补充干粮"]
    },
    itinerary: [
        {
            day: 1, title: "第一天", date: "9.6",
            items: [
                { type: "transport", icon: "🚢", label: "集合 / 去程", detail: "上海市区出发 → 地铁16号线 → 洋山专线 → 沈家湾 → 11:45 直达船 → 花鸟岛" },
                { type: "scout", icon: "📍", label: "踩点", detail: "上岛后确认各拍摄机位与光线条件" },
                { type: "shoot", icon: "📸", label: "拍摄 · 守岸人（原皮）", detail: "南岙沙滩 / 致爱书房 / 玛塔秋千", pointIds: [1, 2, 3], characters: ["守岸人"] }
            ]
        },
        {
            day: 2, title: "第二天", date: "9.7",
            items: [
                { type: "shoot", icon: "📸", label: "拍摄 · 水陈", pointIds: [1], characters: ["水陈"] },
                { type: "shoot", icon: "📸", label: "拍摄 · 爱莉泳装", pointIds: [1], characters: ["爱莉泳装"] },
                { type: "rest", icon: "☀️", label: "中午休息" },
                { type: "shoot", icon: "📸", label: "拍摄 · 37（重返未来1999）", pointIds: [1], characters: ["37"] },
                { type: "shoot", icon: "📸", label: "拍摄 · 美树沙耶香", pointIds: [1], characters: ["美树沙耶香"] }
            ]
        },
        {
            day: 3, title: "第三天", date: "9.8",
            items: [
                { type: "backup", icon: "🔁", label: "候补拍摄", detail: "前一天没拍完的内容进行补拍" },
                { type: "transport", icon: "🚢", label: "返程", detail: "14:15 离岛，乘坐直达船返回" }
            ]
        }
    ]
};
