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
