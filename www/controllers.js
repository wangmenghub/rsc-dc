/**
 * 测试使用，不做业务
 */

angular.module('starter.controllers', [])
/**
 * 采购
 */
    .controller('buyCtrl', function ($scope) {
        var vm = $scope.vm = this;

        // 测试数据
        vm.data = {
            donglimei: [
                {value: 3, name: '进行中'},
                {value: 1, name: '已完成'},
                {value: 2, name: '已发布'}
            ],
            wuyanmei: [
                {value: 3, name: '进行中'},
                {value: 3, name: '已完成'},
                {value: 4, name: '已发布'}
            ],
            penchuimei: [
                {value: 5, name: '进行中'},
                {value: 8, name: '已完成'},
                {value: 4, name: '已发布'}
            ],
            lianjiaomei: [
                {value: 3, name: '进行中'},
                {value: 2, name: '已完成'},
                {value: 4, name: '已发布'}
            ],
            yuanmei: [
                {value: 3, name: '进行中'},
                {value: 3, name: '已完成'},
                {value: 1, name: '已发布'}
            ],
            liulan: [
                {
                    name: '动力煤',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '无烟煤',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '喷吹煤',
                    type: 'line',
                    stack: '总量',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '炼焦煤',
                    type: 'line',
                    stack: '总量',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '原煤',
                    type: 'line',
                    stack: '总量',
                    data: [152, 254, 111, 241, 54, 87, 451]
                }
            ],
            jine: [
                {
                    type: 'bar',
                    data: [
                        {
                            value: 23438,
                            itemStyle: {
                                normal: {
                                    color: '#3069BE',
                                }
                            }
                        }, {
                            value: 31000,
                            itemStyle: {
                                normal: {
                                    color: '#d48265',
                                }
                            }
                        }, {
                            value: 121594,
                            itemStyle: {
                                normal: {
                                    color: '#54D475',
                                }
                            }
                        }, {
                            value: 134141,
                            itemStyle: {
                                normal: {
                                    color: '#91c7ae',
                                }
                            }
                        }]
                }
            ],
            zhuanhua: [0, 120, 210, 130, 200, 62, 0],
            map: [
                {name: "海门", value: 90},
                {name: "鄂尔多斯", value: 12},
                {name: "招远", value: 12},
                {name: "舟山", value: 12},
                {name: "齐齐哈尔", value: 14},
                {name: "盐城", value: 15},
                {name: "赤峰", value: 16},
                {name: "青岛", value: 18},
                {name: "乳山", value: 18},
                {name: "金昌", value: 19},
                {name: "泉州", value: 21},
                {name: "莱西", value: 21},
                {name: "日照", value: 21},
                {name: "胶南", value: 22},
                {name: "南通", value: 23},
                {name: "拉萨", value: 24},
                {name: "云浮", value: 24},
                {name: "梅州", value: 25},
                {name: "文登", value: 25},
                {name: "上海", value: 25},
                {name: "攀枝花", value: 25},
                {name: "威海", value: 25},
                {name: "承德", value: 25},
                {name: "厦门", value: 26},
                {name: "汕尾", value: 26},
                {name: "潮州", value: 26},
                {name: "丹东", value: 27},
                {name: "太仓", value: 27},
                {name: "曲靖", value: 27},
                {name: "烟台", value: 28},
                {name: "福州", value: 29},
                {name: "瓦房店", value: 30},
                {name: "即墨", value: 30},
                {name: "抚顺", value: 31},
                {name: "玉溪", value: 31},
                {name: "张家口", value: 31},
                {name: "阳泉", value: 31},
                {name: "莱州", value: 32},
                {name: "湖州", value: 32},
                {name: "汕头", value: 32},
                {name: "昆山", value: 33},
                {name: "宁波", value: 33},
                {name: "湛江", value: 33},
                {name: "揭阳", value: 34},
                {name: "荣成", value: 34},
                {name: "连云港", value: 35},
                {name: "葫芦岛", value: 35},
                {name: "常熟", value: 36},
                {name: "东莞", value: 36},
                {name: "河源", value: 36},
                {name: "淮安", value: 36},
                {name: "泰州", value: 36},
                {name: "南宁", value: 37},
                {name: "营口", value: 37},
                {name: "惠州", value: 37},
                {name: "江阴", value: 37},
                {name: "蓬莱", value: 37},
                {name: "韶关", value: 38},
                {name: "嘉峪关", value: 38},
                {name: "广州", value: 38},
                {name: "延安", value: 38},
                {name: "太原", value: 39},
                {name: "清远", value: 39},
                {name: "中山", value: 39},
                {name: "昆明", value: 39},
                {name: "寿光", value: 40},
                {name: "盘锦", value: 40},
                {name: "长治", value: 41},
                {name: "深圳", value: 41},
                {name: "珠海", value: 42},
                {name: "宿迁", value: 43},
                {name: "咸阳", value: 43},
                {name: "铜川", value: 44},
                {name: "平度", value: 44},
                {name: "佛山", value: 44},
                {name: "海口", value: 44},
                {name: "江门", value: 45},
                {name: "章丘", value: 45},
                {name: "肇庆", value: 46},
                {name: "大连", value: 47},
                {name: "临汾", value: 47},
                {name: "吴江", value: 47},
                {name: "石嘴山", value: 49},
                {name: "沈阳", value: 50},
                {name: "苏州", value: 50},
                {name: "茂名", value: 50},
                {name: "嘉兴", value: 51},
                {name: "长春", value: 51},
                {name: "胶州", value: 52},
                {name: "银川", value: 52},
                {name: "张家港", value: 52},
                {name: "三门峡", value: 53},
                {name: "锦州", value: 54},
                {name: "南昌", value: 54},
                {name: "柳州", value: 54},
                {name: "三亚", value: 54},
                {name: "自贡", value: 56},
                {name: "吉林", value: 56},
                {name: "阳江", value: 57},
                {name: "泸州", value: 57},
                {name: "西宁", value: 57},
                {name: "宜宾", value: 58},
                {name: "呼和浩特", value: 58},
                {name: "成都", value: 58},
                {name: "大同", value: 58},
                {name: "镇江", value: 59},
                {name: "桂林", value: 59},
                {name: "张家界", value: 59},
                {name: "宜兴", value: 59},
                {name: "北海", value: 60},
                {name: "西安", value: 61},
                {name: "金坛", value: 62},
                {name: "东营", value: 62},
                {name: "牡丹江", value: 63},
                {name: "遵义", value: 63},
                {name: "绍兴", value: 63},
                {name: "扬州", value: 64},
                {name: "常州", value: 64},
                {name: "潍坊", value: 65},
                {name: "重庆", value: 66},
                {name: "台州", value: 67},
                {name: "南京", value: 67},
                {name: "滨州", value: 70},
                {name: "贵阳", value: 71},
                {name: "无锡", value: 71},
                {name: "本溪", value: 71},
                {name: "克拉玛依", value: 72},
                {name: "渭南", value: 72},
                {name: "马鞍山", value: 72},
                {name: "宝鸡", value: 72},
                {name: "焦作", value: 75},
                {name: "句容", value: 75},
                {name: "北京", value: 79},
                {name: "徐州", value: 79},
                {name: "衡水", value: 80},
                {name: "包头", value: 80},
                {name: "绵阳", value: 80},
                {name: "乌鲁木齐", value: 84},
                {name: "枣庄", value: 84},
                {name: "杭州", value: 84},
                {name: "淄博", value: 85},
                {name: "鞍山", value: 86},
                {name: "溧阳", value: 86},
                {name: "库尔勒", value: 86},
                {name: "安阳", value: 90},
                {name: "开封", value: 90},
                {name: "济南", value: 92},
                {name: "德阳", value: 93},
                {name: "温州", value: 95},
                {name: "九江", value: 96},
                {name: "邯郸", value: 98},
                {name: "临安", value: 99},
                {name: "兰州", value: 99},
                {name: "沧州", value: 100},
                {name: "临沂", value: 103},
                {name: "南充", value: 104},
                {name: "天津", value: 105},
                {name: "富阳", value: 106},
                {name: "泰安", value: 112},
                {name: "诸暨", value: 112},
                {name: "郑州", value: 113},
                {name: "哈尔滨", value: 114},
                {name: "聊城", value: 116},
                {name: "芜湖", value: 117},
                {name: "唐山", value: 119},
                {name: "平顶山", value: 119},
                {name: "邢台", value: 119},
                {name: "德州", value: 120},
                {name: "济宁", value: 120},
                {name: "荆州", value: 127},
                {name: "宜昌", value: 130},
                {name: "义乌", value: 132},
                {name: "丽水", value: 133},
                {name: "洛阳", value: 134},
                {name: "秦皇岛", value: 136},
                {name: "株洲", value: 143},
                {name: "石家庄", value: 147},
                {name: "莱芜", value: 148},
                {name: "常德", value: 152},
                {name: "保定", value: 153},
                {name: "湘潭", value: 154},
                {name: "金华", value: 157},
                {name: "岳阳", value: 169},
                {name: "长沙", value: 175},
                {name: "衢州", value: 177},
                {name: "廊坊", value: 193},
                {name: "菏泽", value: 194},
                {name: "合肥", value: 229},
                {name: "武汉", value: 273},
                {name: "大庆", value: 279}
            ]
        };
        // 顶部导航激活状态
        vm.topActive = 'meitan';
        // 中间导航激活状态
        vm.centerActive = 'qiangdan';
        // 初始化
        vm.init = function () {

        }
        // 煤炭
        vm.meiTan = function (item) {
            vm.topActive = item;
            // 测试数据
            vm.data = {
                donglimei: [
                    {value: 3, name: '进行中'},
                    {value: 1, name: '已完成'},
                    {value: 2, name: '已发布'}
                ],
                wuyanmei: [
                    {value: 3, name: '进行中'},
                    {value: 3, name: '已完成'},
                    {value: 4, name: '已发布'}
                ],
                penchuimei: [
                    {value: 5, name: '进行中'},
                    {value: 8, name: '已完成'},
                    {value: 4, name: '已发布'}
                ],
                lianjiaomei: [
                    {value: 3, name: '进行中'},
                    {value: 2, name: '已完成'},
                    {value: 4, name: '已发布'}
                ],
                yuanmei: [
                    {value: 3, name: '进行中'},
                    {value: 3, name: '已完成'},
                    {value: 1, name: '已发布'}
                ],
                liulan: [
                    {
                        name: '动力煤',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '无烟煤',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '喷吹煤',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '炼焦煤',
                        type: 'line',
                        stack: '总量',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '原煤',
                        type: 'line',
                        stack: '总量',
                        data: [152, 254, 111, 241, 54, 87, 451]
                    }
                ],
                jine: [
                    {
                        type: 'bar',
                        data: [
                            {
                                value: 23438,
                                itemStyle: {
                                    normal: {
                                        color: '#3069BE',
                                    }
                                }
                            }, {
                                value: 31000,
                                itemStyle: {
                                    normal: {
                                        color: '#d48265',
                                    }
                                }
                            }, {
                                value: 121594,
                                itemStyle: {
                                    normal: {
                                        color: '#54D475',
                                    }
                                }
                            }, {
                                value: 134141,
                                itemStyle: {
                                    normal: {
                                        color: '#91c7ae',
                                    }
                                }
                            }]
                    }
                ],
                zhuanhua: [0, 120, 210, 130, 200, 62, 0],
                map: [
                    {name: "海门", value: 90},
                    {name: "鄂尔多斯", value: 12},
                    {name: "招远", value: 12},
                    {name: "舟山", value: 12},
                    {name: "齐齐哈尔", value: 14},
                    {name: "盐城", value: 15},
                    {name: "赤峰", value: 16},
                    {name: "青岛", value: 18},
                    {name: "乳山", value: 18},
                    {name: "金昌", value: 19},
                    {name: "泉州", value: 21},
                    {name: "莱西", value: 21},
                    {name: "日照", value: 21},
                    {name: "胶南", value: 22},
                    {name: "南通", value: 23},
                    {name: "拉萨", value: 24},
                    {name: "云浮", value: 24},
                    {name: "梅州", value: 25},
                    {name: "文登", value: 25},
                    {name: "上海", value: 25},
                    {name: "攀枝花", value: 25},
                    {name: "威海", value: 25},
                    {name: "承德", value: 25},
                    {name: "厦门", value: 26},
                    {name: "汕尾", value: 26},
                    {name: "潮州", value: 26},
                    {name: "丹东", value: 27},
                    {name: "太仓", value: 27},
                    {name: "曲靖", value: 27},
                    {name: "烟台", value: 28},
                    {name: "福州", value: 29},
                    {name: "瓦房店", value: 30},
                    {name: "即墨", value: 30},
                    {name: "抚顺", value: 31},
                    {name: "玉溪", value: 31},
                    {name: "张家口", value: 31},
                    {name: "阳泉", value: 31},
                    {name: "莱州", value: 32},
                    {name: "湖州", value: 32},
                    {name: "汕头", value: 32},
                    {name: "昆山", value: 33},
                    {name: "宁波", value: 33},
                    {name: "湛江", value: 33},
                    {name: "揭阳", value: 34},
                    {name: "荣成", value: 34},
                    {name: "连云港", value: 35},
                    {name: "葫芦岛", value: 35},
                    {name: "常熟", value: 36},
                    {name: "东莞", value: 36},
                    {name: "河源", value: 36},
                    {name: "淮安", value: 36},
                    {name: "泰州", value: 36},
                    {name: "南宁", value: 37},
                    {name: "营口", value: 37},
                    {name: "惠州", value: 37},
                    {name: "江阴", value: 37},
                    {name: "蓬莱", value: 37},
                    {name: "韶关", value: 38},
                    {name: "嘉峪关", value: 38},
                    {name: "广州", value: 38},
                    {name: "延安", value: 38},
                    {name: "太原", value: 39},
                    {name: "清远", value: 39},
                    {name: "中山", value: 39},
                    {name: "昆明", value: 39},
                    {name: "寿光", value: 40},
                    {name: "盘锦", value: 40},
                    {name: "长治", value: 41},
                    {name: "深圳", value: 41},
                    {name: "珠海", value: 42},
                    {name: "宿迁", value: 43},
                    {name: "咸阳", value: 43},
                    {name: "铜川", value: 44},
                    {name: "平度", value: 44},
                    {name: "佛山", value: 44},
                    {name: "海口", value: 44},
                    {name: "江门", value: 45},
                    {name: "章丘", value: 45},
                    {name: "肇庆", value: 46},
                    {name: "大连", value: 47},
                    {name: "临汾", value: 47},
                    {name: "吴江", value: 47},
                    {name: "石嘴山", value: 49},
                    {name: "沈阳", value: 50},
                    {name: "苏州", value: 50},
                    {name: "茂名", value: 50},
                    {name: "嘉兴", value: 51},
                    {name: "长春", value: 51},
                    {name: "胶州", value: 52},
                    {name: "银川", value: 52},
                    {name: "张家港", value: 52},
                    {name: "三门峡", value: 53},
                    {name: "锦州", value: 54},
                    {name: "南昌", value: 54},
                    {name: "柳州", value: 54},
                    {name: "三亚", value: 54},
                    {name: "自贡", value: 56},
                    {name: "吉林", value: 56},
                    {name: "阳江", value: 57},
                    {name: "泸州", value: 57},
                    {name: "西宁", value: 57},
                    {name: "宜宾", value: 58},
                    {name: "呼和浩特", value: 58},
                    {name: "成都", value: 58},
                    {name: "大同", value: 58},
                    {name: "镇江", value: 59},
                    {name: "桂林", value: 59},
                    {name: "张家界", value: 59},
                    {name: "宜兴", value: 59},
                    {name: "北海", value: 60},
                    {name: "西安", value: 61},
                    {name: "金坛", value: 62},
                    {name: "东营", value: 62},
                    {name: "牡丹江", value: 63},
                    {name: "遵义", value: 63},
                    {name: "绍兴", value: 63},
                    {name: "扬州", value: 64},
                    {name: "常州", value: 64},
                    {name: "潍坊", value: 65},
                    {name: "重庆", value: 66},
                    {name: "台州", value: 67},
                    {name: "南京", value: 67},
                    {name: "滨州", value: 70},
                    {name: "贵阳", value: 71},
                    {name: "无锡", value: 71},
                    {name: "本溪", value: 71},
                    {name: "克拉玛依", value: 72},
                    {name: "渭南", value: 72},
                    {name: "马鞍山", value: 72},
                    {name: "宝鸡", value: 72},
                    {name: "焦作", value: 75},
                    {name: "句容", value: 75},
                    {name: "北京", value: 79},
                    {name: "徐州", value: 79},
                    {name: "衡水", value: 80},
                    {name: "包头", value: 80},
                    {name: "绵阳", value: 80},
                    {name: "乌鲁木齐", value: 84},
                    {name: "枣庄", value: 84},
                    {name: "杭州", value: 84},
                    {name: "淄博", value: 85},
                    {name: "鞍山", value: 86},
                    {name: "溧阳", value: 86},
                    {name: "库尔勒", value: 86},
                    {name: "安阳", value: 90},
                    {name: "开封", value: 90},
                    {name: "济南", value: 92},
                    {name: "德阳", value: 93},
                    {name: "温州", value: 95},
                    {name: "九江", value: 96},
                    {name: "邯郸", value: 98},
                    {name: "临安", value: 99},
                    {name: "兰州", value: 99},
                    {name: "沧州", value: 100},
                    {name: "临沂", value: 103},
                    {name: "南充", value: 104},
                    {name: "天津", value: 105},
                    {name: "富阳", value: 106},
                    {name: "泰安", value: 112},
                    {name: "诸暨", value: 112},
                    {name: "郑州", value: 113},
                    {name: "哈尔滨", value: 114},
                    {name: "聊城", value: 116},
                    {name: "芜湖", value: 117},
                    {name: "唐山", value: 119},
                    {name: "平顶山", value: 119},
                    {name: "邢台", value: 119},
                    {name: "德州", value: 120},
                    {name: "济宁", value: 120},
                    {name: "荆州", value: 127},
                    {name: "宜昌", value: 130},
                    {name: "义乌", value: 132},
                    {name: "丽水", value: 133},
                    {name: "洛阳", value: 134},
                    {name: "秦皇岛", value: 136},
                    {name: "株洲", value: 143},
                    {name: "石家庄", value: 147},
                    {name: "莱芜", value: 148},
                    {name: "常德", value: 152},
                    {name: "保定", value: 153},
                    {name: "湘潭", value: 154},
                    {name: "金华", value: 157},
                    {name: "岳阳", value: 169},
                    {name: "长沙", value: 175},
                    {name: "衢州", value: 177},
                    {name: "廊坊", value: 193},
                    {name: "菏泽", value: 194},
                    {name: "合肥", value: 229},
                    {name: "武汉", value: 273},
                    {name: "大庆", value: 279}
                ]
            };
        };
        // 矿粉
        vm.kuangFen = function (item) {
            vm.topActive = item;
            // 测试数据
            vm.data = {
                donglimei: [
                    {value: 5, name: '进行中'},
                    {value: 3, name: '已完成'},
                    {value: 7, name: '已发布'}
                ],
                wuyanmei: [
                    {value: 6, name: '进行中'},
                    {value: 9, name: '已完成'},
                    {value: 2, name: '已发布'}
                ],
                penchuimei: [
                    {value: 3, name: '进行中'},
                    {value: 5, name: '已完成'},
                    {value: 9, name: '已发布'}
                ],
                lianjiaomei: [
                    {value: 6, name: '进行中'},
                    {value: 3, name: '已完成'},
                    {value: 1, name: '已发布'}
                ],
                yuanmei: [
                    {value: 8, name: '进行中'},
                    {value: 3, name: '已完成'},
                    {value: 7, name: '已发布'}
                ],
                liulan: [
                    {
                        name: '动力煤',
                        type: 'line',
                        stack: '总量',
                        data: [60, 70, 85, 134, 90, 75, 100]
                    },
                    {
                        name: '无烟煤',
                        type: 'line',
                        stack: '总量',
                        data: [100, 50, 191, 75, 86, 452, 45]
                    },
                    {
                        name: '喷吹煤',
                        type: 'line',
                        stack: '总量',
                        data: [455, 85, 254, 154, 534, 244, 200]
                    },
                    {
                        name: '炼焦煤',
                        type: 'line',
                        stack: '总量',
                        data: [150, 332, 452, 334, 57, 52, 100]
                    },
                    {
                        name: '原煤',
                        type: 'line',
                        stack: '总量',
                        data: [52, 45, 78, 62, 54, 87, 20]
                    }
                ],
                jine: [
                    {
                        type: 'bar',
                        data: [
                            {
                                value: 12542,
                                itemStyle: {
                                    normal: {
                                        color: '#3069BE',
                                    }
                                }
                            }, {
                                value: 48541,
                                itemStyle: {
                                    normal: {
                                        color: '#d48265',
                                    }
                                }
                            }, {
                                value: 55754,
                                itemStyle: {
                                    normal: {
                                        color: '#54D475',
                                    }
                                }
                            }, {
                                value: 55784,
                                itemStyle: {
                                    normal: {
                                        color: '#91c7ae',
                                    }
                                }
                            }]
                    }
                ],
                zhuanhua: [7, 62, 15, 245, 73, 31, 0],
                map: [
                    {name: "盘锦", value: 40},
                    {name: "长治", value: 41},
                    {name: "深圳", value: 41},
                    {name: "珠海", value: 42},
                    {name: "宿迁", value: 43},
                    {name: "咸阳", value: 43},
                    {name: "铜川", value: 44},
                    {name: "平度", value: 44},
                    {name: "佛山", value: 44},
                    {name: "海口", value: 44},
                    {name: "江门", value: 45},
                    {name: "章丘", value: 45},
                    {name: "肇庆", value: 46},
                    {name: "大连", value: 47},
                    {name: "临汾", value: 47},
                    {name: "吴江", value: 47},
                    {name: "石嘴山", value: 49},
                    {name: "沈阳", value: 50},
                    {name: "苏州", value: 50},
                    {name: "茂名", value: 50},
                    {name: "嘉兴", value: 51},
                    {name: "长春", value: 51},
                    {name: "胶州", value: 52},
                    {name: "银川", value: 52},
                    {name: "张家港", value: 52},
                    {name: "三门峡", value: 53},
                    {name: "锦州", value: 54},
                    {name: "南昌", value: 54},
                    {name: "柳州", value: 54},
                    {name: "三亚", value: 54},
                    {name: "自贡", value: 56},
                    {name: "吉林", value: 56},
                    {name: "阳江", value: 57},
                    {name: "泸州", value: 57},
                    {name: "西宁", value: 57},
                    {name: "宜宾", value: 58},
                    {name: "呼和浩特", value: 58},
                    {name: "成都", value: 58},
                    {name: "大同", value: 58},
                    {name: "镇江", value: 59},
                    {name: "桂林", value: 59},
                    {name: "张家界", value: 59},
                    {name: "宜兴", value: 59},
                    {name: "北海", value: 60},
                    {name: "西安", value: 61},
                    {name: "金坛", value: 62},
                    {name: "东营", value: 62},
                    {name: "牡丹江", value: 63},
                    {name: "遵义", value: 63},
                    {name: "绍兴", value: 63},
                    {name: "扬州", value: 64},
                    {name: "常州", value: 64},
                    {name: "潍坊", value: 65},
                    {name: "重庆", value: 66},
                    {name: "台州", value: 67},
                    {name: "南京", value: 67},
                    {name: "滨州", value: 70},
                    {name: "贵阳", value: 71},
                    {name: "无锡", value: 71},
                    {name: "本溪", value: 71},
                    {name: "克拉玛依", value: 72},
                    {name: "渭南", value: 72},
                    {name: "马鞍山", value: 72},
                    {name: "宝鸡", value: 72},
                    {name: "焦作", value: 75},
                    {name: "句容", value: 75},
                    {name: "北京", value: 79},
                    {name: "徐州", value: 79},
                    {name: "衡水", value: 80},
                    {name: "包头", value: 80},
                    {name: "绵阳", value: 80},
                    {name: "乌鲁木齐", value: 84},
                    {name: "枣庄", value: 84},
                    {name: "杭州", value: 84},
                    {name: "淄博", value: 85},
                    {name: "鞍山", value: 86},
                    {name: "溧阳", value: 86},
                    {name: "库尔勒", value: 86},
                    {name: "安阳", value: 90},
                    {name: "开封", value: 90},
                    {name: "济南", value: 92},
                    {name: "德阳", value: 93},
                    {name: "温州", value: 95},
                    {name: "九江", value: 96},
                    {name: "邯郸", value: 98},
                    {name: "临安", value: 99},
                    {name: "兰州", value: 99},
                    {name: "沧州", value: 100},
                    {name: "临沂", value: 103},
                    {name: "南充", value: 104},
                    {name: "天津", value: 105},
                    {name: "富阳", value: 106},
                    {name: "泰安", value: 112},
                    {name: "诸暨", value: 112},
                    {name: "郑州", value: 113},
                    {name: "哈尔滨", value: 114},
                    {name: "聊城", value: 116},
                    {name: "芜湖", value: 117},
                    {name: "唐山", value: 119},
                    {name: "平顶山", value: 119},
                    {name: "邢台", value: 119},
                    {name: "德州", value: 120},
                    {name: "济宁", value: 120},
                    {name: "荆州", value: 127},
                    {name: "宜昌", value: 130},
                    {name: "义乌", value: 132},
                    {name: "丽水", value: 133},
                    {name: "洛阳", value: 134},
                    {name: "秦皇岛", value: 136},
                    {name: "株洲", value: 143},
                    {name: "石家庄", value: 147},
                    {name: "莱芜", value: 148},
                    {name: "常德", value: 152},
                    {name: "保定", value: 153},
                    {name: "湘潭", value: 154},
                    {name: "金华", value: 157},
                    {name: "岳阳", value: 169},
                    {name: "长沙", value: 175},
                    {name: "衢州", value: 177},
                    {name: "廊坊", value: 193},
                    {name: "菏泽", value: 194},
                    {name: "合肥", value: 229},
                    {name: "武汉", value: 273},
                    {name: "大庆", value: 279}
                ]
            };
        };
        // 耐火材料
        vm.naiHuo = function (item) {
            vm.topActive = item;
        };
        // 合金
        vm.heJin = function (item) {
            vm.topActive = item;
        };
        // 铁合金
        vm.tieHeJin = function (item) {
            vm.topActive = item;
        };
        // 钢铁
        vm.gangTie = function (item) {
            vm.topActive = item;
        };
        // 抢单
        vm.qiangDan = function (item) {
            vm.centerActive = item;
            // 测试数据
            vm.data = {
                donglimei: [
                    {value: 3, name: '进行中'},
                    {value: 1, name: '已完成'},
                    {value: 2, name: '已发布'}
                ],
                wuyanmei: [
                    {value: 3, name: '进行中'},
                    {value: 3, name: '已完成'},
                    {value: 4, name: '已发布'}
                ],
                penchuimei: [
                    {value: 5, name: '进行中'},
                    {value: 8, name: '已完成'},
                    {value: 4, name: '已发布'}
                ],
                lianjiaomei: [
                    {value: 3, name: '进行中'},
                    {value: 2, name: '已完成'},
                    {value: 4, name: '已发布'}
                ],
                yuanmei: [
                    {value: 3, name: '进行中'},
                    {value: 3, name: '已完成'},
                    {value: 1, name: '已发布'}
                ],
                liulan: [
                    {
                        name: '动力煤',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '无烟煤',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '喷吹煤',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '炼焦煤',
                        type: 'line',
                        stack: '总量',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '原煤',
                        type: 'line',
                        stack: '总量',
                        data: [152, 254, 111, 241, 54, 87, 451]
                    }
                ],
                jine: [
                    {
                        type: 'bar',
                        data: [
                            {
                                value: 23438,
                                itemStyle: {
                                    normal: {
                                        color: '#3069BE',
                                    }
                                }
                            }, {
                                value: 31000,
                                itemStyle: {
                                    normal: {
                                        color: '#d48265',
                                    }
                                }
                            }, {
                                value: 121594,
                                itemStyle: {
                                    normal: {
                                        color: '#54D475',
                                    }
                                }
                            }, {
                                value: 134141,
                                itemStyle: {
                                    normal: {
                                        color: '#91c7ae',
                                    }
                                }
                            }]
                    }
                ],
                zhuanhua: [0, 120, 210, 130, 200, 62, 0],
                map: [
                    {name: "海门", value: 90},
                    {name: "鄂尔多斯", value: 12},
                    {name: "招远", value: 12},
                    {name: "舟山", value: 12},
                    {name: "齐齐哈尔", value: 14},
                    {name: "盐城", value: 15},
                    {name: "赤峰", value: 16},
                    {name: "青岛", value: 18},
                    {name: "乳山", value: 18},
                    {name: "金昌", value: 19},
                    {name: "泉州", value: 21},
                    {name: "莱西", value: 21},
                    {name: "日照", value: 21},
                    {name: "胶南", value: 22},
                    {name: "南通", value: 23},
                    {name: "拉萨", value: 24},
                    {name: "云浮", value: 24},
                    {name: "梅州", value: 25},
                    {name: "文登", value: 25},
                    {name: "上海", value: 25},
                    {name: "攀枝花", value: 25},
                    {name: "威海", value: 25},
                    {name: "承德", value: 25},
                    {name: "厦门", value: 26},
                    {name: "汕尾", value: 26},
                    {name: "潮州", value: 26},
                    {name: "丹东", value: 27},
                    {name: "太仓", value: 27},
                    {name: "曲靖", value: 27},
                    {name: "烟台", value: 28},
                    {name: "福州", value: 29},
                    {name: "瓦房店", value: 30},
                    {name: "即墨", value: 30},
                    {name: "抚顺", value: 31},
                    {name: "玉溪", value: 31},
                    {name: "张家口", value: 31},
                    {name: "阳泉", value: 31},
                    {name: "莱州", value: 32},
                    {name: "湖州", value: 32},
                    {name: "汕头", value: 32},
                    {name: "昆山", value: 33},
                    {name: "宁波", value: 33},
                    {name: "湛江", value: 33},
                    {name: "揭阳", value: 34},
                    {name: "荣成", value: 34},
                    {name: "连云港", value: 35},
                    {name: "葫芦岛", value: 35},
                    {name: "常熟", value: 36},
                    {name: "东莞", value: 36},
                    {name: "河源", value: 36},
                    {name: "淮安", value: 36},
                    {name: "泰州", value: 36},
                    {name: "南宁", value: 37},
                    {name: "营口", value: 37},
                    {name: "乌鲁木齐", value: 84},
                    {name: "枣庄", value: 84},
                    {name: "杭州", value: 84},
                    {name: "淄博", value: 85},
                    {name: "鞍山", value: 86},
                    {name: "溧阳", value: 86},
                    {name: "库尔勒", value: 86},
                    {name: "安阳", value: 90},
                    {name: "开封", value: 90},
                    {name: "济南", value: 92},
                    {name: "德阳", value: 93},
                    {name: "温州", value: 95},
                    {name: "九江", value: 96},
                    {name: "邯郸", value: 98},
                    {name: "临安", value: 99},
                    {name: "兰州", value: 99},
                    {name: "沧州", value: 100},
                    {name: "临沂", value: 103},
                    {name: "南充", value: 104},
                    {name: "天津", value: 105},
                    {name: "富阳", value: 106},
                    {name: "泰安", value: 112},
                    {name: "诸暨", value: 112},
                    {name: "郑州", value: 113},
                    {name: "哈尔滨", value: 114},
                    {name: "聊城", value: 116},
                    {name: "芜湖", value: 117},
                    {name: "唐山", value: 119},
                    {name: "平顶山", value: 119},
                    {name: "邢台", value: 119},
                    {name: "德州", value: 120},
                    {name: "济宁", value: 120},
                    {name: "荆州", value: 127},
                    {name: "宜昌", value: 130},
                    {name: "义乌", value: 132},
                    {name: "丽水", value: 133},
                    {name: "洛阳", value: 134},
                    {name: "秦皇岛", value: 136},
                    {name: "株洲", value: 143},
                    {name: "石家庄", value: 147},
                    {name: "莱芜", value: 148},
                    {name: "常德", value: 152},
                    {name: "保定", value: 153},
                    {name: "湘潭", value: 154},
                    {name: "金华", value: 157},
                    {name: "岳阳", value: 169},
                    {name: "长沙", value: 175},
                    {name: "衢州", value: 177},
                    {name: "廊坊", value: 193},
                    {name: "菏泽", value: 194},
                    {name: "合肥", value: 229},
                    {name: "武汉", value: 273},
                    {name: "大庆", value: 279}
                ]
            };
        };
        // 浏览
        vm.liuLan = function (item) {
            vm.centerActive = item;
            vm.data = {
                donglimei: [
                    {value: 3, name: '进行中'},
                    {value: 1, name: '已完成'},
                    {value: 2, name: '已发布'}
                ],
                wuyanmei: [
                    {value: 3, name: '进行中'},
                    {value: 3, name: '已完成'},
                    {value: 4, name: '已发布'}
                ],
                penchuimei: [
                    {value: 5, name: '进行中'},
                    {value: 8, name: '已完成'},
                    {value: 4, name: '已发布'}
                ],
                lianjiaomei: [
                    {value: 3, name: '进行中'},
                    {value: 2, name: '已完成'},
                    {value: 4, name: '已发布'}
                ],
                yuanmei: [
                    {value: 3, name: '进行中'},
                    {value: 3, name: '已完成'},
                    {value: 1, name: '已发布'}
                ],
                liulan: [
                    {
                        name: '动力煤',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '无烟煤',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '喷吹煤',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '炼焦煤',
                        type: 'line',
                        stack: '总量',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '原煤',
                        type: 'line',
                        stack: '总量',
                        data: [152, 254, 111, 241, 54, 87, 451]
                    }
                ],
                jine: [
                    {
                        type: 'bar',
                        data: [
                            {
                                value: 23438,
                                itemStyle: {
                                    normal: {
                                        color: '#3069BE',
                                    }
                                }
                            }, {
                                value: 31000,
                                itemStyle: {
                                    normal: {
                                        color: '#d48265',
                                    }
                                }
                            }, {
                                value: 121594,
                                itemStyle: {
                                    normal: {
                                        color: '#54D475',
                                    }
                                }
                            }, {
                                value: 134141,
                                itemStyle: {
                                    normal: {
                                        color: '#91c7ae',
                                    }
                                }
                            }]
                    }
                ],
                zhuanhua: [0, 120, 210, 130, 200, 62, 0],
                map: [
                    {name: "大同", value: 58},
                    {name: "镇江", value: 59},
                    {name: "桂林", value: 59},
                    {name: "张家界", value: 59},
                    {name: "宜兴", value: 59},
                    {name: "北海", value: 60},
                    {name: "西安", value: 61},
                    {name: "金坛", value: 62},
                    {name: "东营", value: 62},
                    {name: "牡丹江", value: 63},
                    {name: "遵义", value: 63},
                    {name: "绍兴", value: 63},
                    {name: "扬州", value: 64},
                    {name: "常州", value: 64},
                    {name: "潍坊", value: 65},
                    {name: "重庆", value: 66},
                    {name: "台州", value: 67},
                    {name: "南京", value: 67},
                    {name: "滨州", value: 70},
                    {name: "贵阳", value: 71},
                    {name: "无锡", value: 71},
                    {name: "本溪", value: 71},
                    {name: "克拉玛依", value: 72},
                    {name: "渭南", value: 72},
                    {name: "马鞍山", value: 72},
                    {name: "宝鸡", value: 72},
                    {name: "焦作", value: 75},
                    {name: "句容", value: 75},
                    {name: "北京", value: 79},
                    {name: "徐州", value: 79},
                    {name: "衡水", value: 80},
                    {name: "包头", value: 80},
                    {name: "绵阳", value: 80},
                    {name: "乌鲁木齐", value: 84},
                    {name: "枣庄", value: 84},
                    {name: "杭州", value: 84},
                    {name: "淄博", value: 85},
                    {name: "鞍山", value: 86},
                    {name: "溧阳", value: 86},
                    {name: "库尔勒", value: 86},
                    {name: "安阳", value: 90},
                    {name: "开封", value: 90},
                    {name: "济南", value: 92},
                    {name: "德阳", value: 93},
                    {name: "温州", value: 95},
                    {name: "九江", value: 96},
                    {name: "邯郸", value: 98},
                    {name: "临安", value: 99},
                    {name: "兰州", value: 99},
                    {name: "沧州", value: 100},
                    {name: "临沂", value: 103},
                    {name: "南充", value: 104},
                    {name: "天津", value: 105},
                    {name: "富阳", value: 106},
                    {name: "泰安", value: 112},
                    {name: "诸暨", value: 112},
                    {name: "郑州", value: 113},
                    {name: "哈尔滨", value: 114},
                    {name: "聊城", value: 116},
                    {name: "芜湖", value: 117},
                    {name: "唐山", value: 119},
                    {name: "平顶山", value: 119},
                    {name: "邢台", value: 119},
                    {name: "德州", value: 120},
                    {name: "济宁", value: 120},
                    {name: "荆州", value: 127},
                    {name: "宜昌", value: 130},
                    {name: "义乌", value: 132},
                    {name: "丽水", value: 133},
                    {name: "洛阳", value: 134},
                    {name: "秦皇岛", value: 136},
                    {name: "株洲", value: 143},
                    {name: "石家庄", value: 147},
                    {name: "莱芜", value: 148},
                    {name: "常德", value: 152},
                    {name: "保定", value: 153},
                    {name: "湘潭", value: 154},
                    {name: "金华", value: 157},
                    {name: "岳阳", value: 169},
                    {name: "长沙", value: 175},
                    {name: "衢州", value: 177},
                    {name: "廊坊", value: 193},
                    {name: "菏泽", value: 194},
                    {name: "合肥", value: 229},
                    {name: "武汉", value: 273},
                    {name: "大庆", value: 279}
                ]
            };
        };
        // 金额
        vm.jine = function (item) {
            vm.centerActive = item;
        };
        // 转化
        vm.zhuanHua = function (item) {
            vm.centerActive = item;

        };
    })
    /**
     * 销售
     */
    .controller('sellCtrl', function ($scope, $location) {
        var vm = $scope.vm = this;

        // 测试数据
        vm.data = {
            donglimei: [
                {value: 3, name: '进行中'},
                {value: 1, name: '已完成'},
                {value: 2, name: '已发布'}
            ],
            wuyanmei: [
                {value: 3, name: '进行中'},
                {value: 3, name: '已完成'},
                {value: 4, name: '已发布'}
            ],
            penchuimei: [
                {value: 5, name: '进行中'},
                {value: 8, name: '已完成'},
                {value: 4, name: '已发布'}
            ],
            lianjiaomei: [
                {value: 3, name: '进行中'},
                {value: 2, name: '已完成'},
                {value: 4, name: '已发布'}
            ],
            yuanmei: [
                {value: 3, name: '进行中'},
                {value: 3, name: '已完成'},
                {value: 1, name: '已发布'}
            ],
            liulan: [
                {
                    name: '动力煤',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '无烟煤',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '喷吹煤',
                    type: 'line',
                    stack: '总量',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '炼焦煤',
                    type: 'line',
                    stack: '总量',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '原煤',
                    type: 'line',
                    stack: '总量',
                    data: [152, 254, 111, 241, 54, 87, 451]
                }
            ],
            jine: [
                {
                    type: 'bar',
                    data: [
                        {
                            value: 23438,
                            itemStyle: {
                                normal: {
                                    color: '#3069BE',
                                }
                            }
                        }, {
                            value: 31000,
                            itemStyle: {
                                normal: {
                                    color: '#d48265',
                                }
                            }
                        }, {
                            value: 121594,
                            itemStyle: {
                                normal: {
                                    color: '#54D475',
                                }
                            }
                        }, {
                            value: 134141,
                            itemStyle: {
                                normal: {
                                    color: '#91c7ae',
                                }
                            }
                        }]
                }
            ],
            zhuanhua: [0, 120, 210, 130, 200, 62, 0],
            map: [
                {name: "海门", value: 90},
                {name: "鄂尔多斯", value: 12},
                {name: "招远", value: 12},
                {name: "舟山", value: 12},
                {name: "齐齐哈尔", value: 14},
                {name: "盐城", value: 15},
                {name: "赤峰", value: 16},
                {name: "青岛", value: 18},
                {name: "乳山", value: 18},
                {name: "金昌", value: 19},
                {name: "泉州", value: 21},
                {name: "莱西", value: 21},
                {name: "日照", value: 21},
                {name: "胶南", value: 22},
                {name: "南通", value: 23},
                {name: "拉萨", value: 24},
                {name: "云浮", value: 24},
                {name: "梅州", value: 25},
                {name: "文登", value: 25},
                {name: "上海", value: 25},
                {name: "攀枝花", value: 25},
                {name: "威海", value: 25},
                {name: "承德", value: 25},
                {name: "厦门", value: 26},
                {name: "汕尾", value: 26},
                {name: "潮州", value: 26},
                {name: "丹东", value: 27},
                {name: "太仓", value: 27},
                {name: "曲靖", value: 27},
                {name: "烟台", value: 28},
                {name: "福州", value: 29},
                {name: "瓦房店", value: 30},
                {name: "即墨", value: 30},
                {name: "抚顺", value: 31},
                {name: "玉溪", value: 31},
                {name: "张家口", value: 31},
                {name: "阳泉", value: 31},
                {name: "莱州", value: 32},
                {name: "湖州", value: 32},
                {name: "汕头", value: 32},
                {name: "昆山", value: 33},
                {name: "宁波", value: 33},
                {name: "湛江", value: 33},
                {name: "揭阳", value: 34},
                {name: "荣成", value: 34},
                {name: "连云港", value: 35},
                {name: "葫芦岛", value: 35},
                {name: "常熟", value: 36},
                {name: "东莞", value: 36},
                {name: "河源", value: 36},
                {name: "淮安", value: 36},
                {name: "泰州", value: 36},
                {name: "南宁", value: 37},
                {name: "营口", value: 37},
                {name: "惠州", value: 37},
                {name: "江阴", value: 37},
                {name: "蓬莱", value: 37},
                {name: "韶关", value: 38},
                {name: "嘉峪关", value: 38},
                {name: "广州", value: 38},
                {name: "延安", value: 38},
                {name: "太原", value: 39},
                {name: "清远", value: 39},
                {name: "中山", value: 39},
                {name: "昆明", value: 39},
                {name: "寿光", value: 40},
                {name: "盘锦", value: 40},
                {name: "长治", value: 41},
                {name: "深圳", value: 41},
                {name: "珠海", value: 42},
                {name: "宿迁", value: 43},
                {name: "咸阳", value: 43},
                {name: "铜川", value: 44},
                {name: "平度", value: 44},
                {name: "佛山", value: 44},
                {name: "海口", value: 44},
                {name: "江门", value: 45},
                {name: "章丘", value: 45},
                {name: "肇庆", value: 46},
                {name: "大连", value: 47},
                {name: "临汾", value: 47},
                {name: "吴江", value: 47},
                {name: "石嘴山", value: 49},
                {name: "沈阳", value: 50},
                {name: "苏州", value: 50},
                {name: "茂名", value: 50},
                {name: "嘉兴", value: 51},
                {name: "长春", value: 51},
                {name: "胶州", value: 52},
                {name: "银川", value: 52},
                {name: "张家港", value: 52},
                {name: "三门峡", value: 53},
                {name: "锦州", value: 54},
                {name: "南昌", value: 54},
                {name: "柳州", value: 54},
                {name: "三亚", value: 54},
                {name: "自贡", value: 56},
                {name: "吉林", value: 56},
                {name: "阳江", value: 57},
                {name: "泸州", value: 57},
                {name: "西宁", value: 57},
                {name: "宜宾", value: 58},
                {name: "呼和浩特", value: 58},
                {name: "成都", value: 58},
                {name: "大同", value: 58},
                {name: "镇江", value: 59},
                {name: "桂林", value: 59},
                {name: "张家界", value: 59},
                {name: "宜兴", value: 59},
                {name: "北海", value: 60},
                {name: "西安", value: 61},
                {name: "金坛", value: 62},
                {name: "东营", value: 62},
                {name: "牡丹江", value: 63},
                {name: "遵义", value: 63},
                {name: "绍兴", value: 63},
                {name: "扬州", value: 64},
                {name: "常州", value: 64},
                {name: "潍坊", value: 65},
                {name: "重庆", value: 66},
                {name: "台州", value: 67},
                {name: "南京", value: 67},
                {name: "滨州", value: 70},
                {name: "贵阳", value: 71},
                {name: "无锡", value: 71},
                {name: "本溪", value: 71},
                {name: "克拉玛依", value: 72},
                {name: "渭南", value: 72},
                {name: "马鞍山", value: 72},
                {name: "宝鸡", value: 72},
                {name: "焦作", value: 75},
                {name: "句容", value: 75},
                {name: "北京", value: 79},
                {name: "徐州", value: 79},
                {name: "衡水", value: 80},
                {name: "包头", value: 80},
                {name: "绵阳", value: 80},
                {name: "乌鲁木齐", value: 84},
                {name: "枣庄", value: 84},
                {name: "杭州", value: 84},
                {name: "淄博", value: 85},
                {name: "鞍山", value: 86},
                {name: "溧阳", value: 86},
                {name: "库尔勒", value: 86},
                {name: "安阳", value: 90},
                {name: "开封", value: 90},
                {name: "济南", value: 92},
                {name: "德阳", value: 93},
                {name: "温州", value: 95},
                {name: "九江", value: 96},
                {name: "邯郸", value: 98},
                {name: "临安", value: 99},
                {name: "兰州", value: 99},
                {name: "沧州", value: 100},
                {name: "临沂", value: 103},
                {name: "南充", value: 104},
                {name: "天津", value: 105},
                {name: "富阳", value: 106},
                {name: "泰安", value: 112},
                {name: "诸暨", value: 112},
                {name: "郑州", value: 113},
                {name: "哈尔滨", value: 114},
                {name: "聊城", value: 116},
                {name: "芜湖", value: 117},
                {name: "唐山", value: 119},
                {name: "平顶山", value: 119},
                {name: "邢台", value: 119},
                {name: "德州", value: 120},
                {name: "济宁", value: 120},
                {name: "荆州", value: 127},
                {name: "宜昌", value: 130},
                {name: "义乌", value: 132},
                {name: "丽水", value: 133},
                {name: "洛阳", value: 134},
                {name: "秦皇岛", value: 136},
                {name: "株洲", value: 143},
                {name: "石家庄", value: 147},
                {name: "莱芜", value: 148},
                {name: "常德", value: 152},
                {name: "保定", value: 153},
                {name: "湘潭", value: 154},
                {name: "金华", value: 157},
                {name: "岳阳", value: 169},
                {name: "长沙", value: 175},
                {name: "衢州", value: 177},
                {name: "廊坊", value: 193},
                {name: "菏泽", value: 194},
                {name: "合肥", value: 229},
                {name: "武汉", value: 273},
                {name: "大庆", value: 279}
            ]
        };
        // 顶部导航激活状态
        vm.topActive = 'meitan';
        // 中间导航激活状态
        vm.centerActive = 'qiangdan';
        // 初始化
        vm.init = function () {

        }
        // 煤炭
        vm.meiTan = function (item) {
            vm.topActive = item;
            // 测试数据
            vm.data = {
                donglimei: [
                    {value: 3, name: '进行中'},
                    {value: 1, name: '已完成'},
                    {value: 2, name: '已发布'}
                ],
                wuyanmei: [
                    {value: 3, name: '进行中'},
                    {value: 3, name: '已完成'},
                    {value: 4, name: '已发布'}
                ],
                penchuimei: [
                    {value: 5, name: '进行中'},
                    {value: 8, name: '已完成'},
                    {value: 4, name: '已发布'}
                ],
                lianjiaomei: [
                    {value: 3, name: '进行中'},
                    {value: 2, name: '已完成'},
                    {value: 4, name: '已发布'}
                ],
                yuanmei: [
                    {value: 3, name: '进行中'},
                    {value: 3, name: '已完成'},
                    {value: 1, name: '已发布'}
                ],
                liulan: [
                    {
                        name: '动力煤',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '无烟煤',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '喷吹煤',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '炼焦煤',
                        type: 'line',
                        stack: '总量',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '原煤',
                        type: 'line',
                        stack: '总量',
                        data: [152, 254, 111, 241, 54, 87, 451]
                    }
                ],
                jine: [
                    {
                        type: 'bar',
                        data: [
                            {
                                value: 23438,
                                itemStyle: {
                                    normal: {
                                        color: '#3069BE',
                                    }
                                }
                            }, {
                                value: 31000,
                                itemStyle: {
                                    normal: {
                                        color: '#d48265',
                                    }
                                }
                            }, {
                                value: 121594,
                                itemStyle: {
                                    normal: {
                                        color: '#54D475',
                                    }
                                }
                            }, {
                                value: 134141,
                                itemStyle: {
                                    normal: {
                                        color: '#91c7ae',
                                    }
                                }
                            }]
                    }
                ],
                zhuanhua: [0, 120, 210, 130, 200, 62, 0],
                map: [
                    {name: "海门", value: 90},
                    {name: "鄂尔多斯", value: 12},
                    {name: "招远", value: 12},
                    {name: "舟山", value: 12},
                    {name: "齐齐哈尔", value: 14},
                    {name: "盐城", value: 15},
                    {name: "赤峰", value: 16},
                    {name: "青岛", value: 18},
                    {name: "乳山", value: 18},
                    {name: "金昌", value: 19},
                    {name: "泉州", value: 21},
                    {name: "莱西", value: 21},
                    {name: "日照", value: 21},
                    {name: "胶南", value: 22},
                    {name: "南通", value: 23},
                    {name: "拉萨", value: 24},
                    {name: "云浮", value: 24},
                    {name: "梅州", value: 25},
                    {name: "文登", value: 25},
                    {name: "上海", value: 25},
                    {name: "攀枝花", value: 25},
                    {name: "威海", value: 25},
                    {name: "承德", value: 25},
                    {name: "厦门", value: 26},
                    {name: "汕尾", value: 26},
                    {name: "潮州", value: 26},
                    {name: "丹东", value: 27},
                    {name: "太仓", value: 27},
                    {name: "曲靖", value: 27},
                    {name: "烟台", value: 28},
                    {name: "福州", value: 29},
                    {name: "瓦房店", value: 30},
                    {name: "即墨", value: 30},
                    {name: "抚顺", value: 31},
                    {name: "玉溪", value: 31},
                    {name: "张家口", value: 31},
                    {name: "阳泉", value: 31},
                    {name: "莱州", value: 32},
                    {name: "湖州", value: 32},
                    {name: "汕头", value: 32},
                    {name: "昆山", value: 33},
                    {name: "宁波", value: 33},
                    {name: "湛江", value: 33},
                    {name: "揭阳", value: 34},
                    {name: "荣成", value: 34},
                    {name: "连云港", value: 35},
                    {name: "葫芦岛", value: 35},
                    {name: "常熟", value: 36},
                    {name: "东莞", value: 36},
                    {name: "河源", value: 36},
                    {name: "淮安", value: 36},
                    {name: "泰州", value: 36},
                    {name: "南宁", value: 37},
                    {name: "营口", value: 37},
                    {name: "惠州", value: 37},
                    {name: "江阴", value: 37},
                    {name: "蓬莱", value: 37},
                    {name: "韶关", value: 38},
                    {name: "嘉峪关", value: 38},
                    {name: "广州", value: 38},
                    {name: "延安", value: 38},
                    {name: "太原", value: 39},
                    {name: "清远", value: 39},
                    {name: "中山", value: 39},
                    {name: "昆明", value: 39},
                    {name: "寿光", value: 40},
                    {name: "盘锦", value: 40},
                    {name: "长治", value: 41},
                    {name: "深圳", value: 41},
                    {name: "珠海", value: 42},
                    {name: "宿迁", value: 43},
                    {name: "咸阳", value: 43},
                    {name: "铜川", value: 44},
                    {name: "平度", value: 44},
                    {name: "佛山", value: 44},
                    {name: "海口", value: 44},
                    {name: "江门", value: 45},
                    {name: "章丘", value: 45},
                    {name: "肇庆", value: 46},
                    {name: "大连", value: 47},
                    {name: "临汾", value: 47},
                    {name: "吴江", value: 47},
                    {name: "石嘴山", value: 49},
                    {name: "沈阳", value: 50},
                    {name: "苏州", value: 50},
                    {name: "茂名", value: 50},
                    {name: "嘉兴", value: 51},
                    {name: "长春", value: 51},
                    {name: "胶州", value: 52},
                    {name: "银川", value: 52},
                    {name: "张家港", value: 52},
                    {name: "三门峡", value: 53},
                    {name: "锦州", value: 54},
                    {name: "南昌", value: 54},
                    {name: "柳州", value: 54},
                    {name: "三亚", value: 54},
                    {name: "自贡", value: 56},
                    {name: "吉林", value: 56},
                    {name: "阳江", value: 57},
                    {name: "泸州", value: 57},
                    {name: "西宁", value: 57},
                    {name: "宜宾", value: 58},
                    {name: "呼和浩特", value: 58},
                    {name: "成都", value: 58},
                    {name: "大同", value: 58},
                    {name: "镇江", value: 59},
                    {name: "桂林", value: 59},
                    {name: "张家界", value: 59},
                    {name: "宜兴", value: 59},
                    {name: "北海", value: 60},
                    {name: "西安", value: 61},
                    {name: "金坛", value: 62},
                    {name: "东营", value: 62},
                    {name: "牡丹江", value: 63},
                    {name: "遵义", value: 63},
                    {name: "绍兴", value: 63},
                    {name: "扬州", value: 64},
                    {name: "常州", value: 64},
                    {name: "潍坊", value: 65},
                    {name: "重庆", value: 66},
                    {name: "台州", value: 67},
                    {name: "南京", value: 67},
                    {name: "滨州", value: 70},
                    {name: "贵阳", value: 71},
                    {name: "无锡", value: 71},
                    {name: "本溪", value: 71},
                    {name: "克拉玛依", value: 72},
                    {name: "渭南", value: 72},
                    {name: "马鞍山", value: 72},
                    {name: "宝鸡", value: 72},
                    {name: "焦作", value: 75},
                    {name: "句容", value: 75},
                    {name: "北京", value: 79},
                    {name: "徐州", value: 79},
                    {name: "衡水", value: 80},
                    {name: "包头", value: 80},
                    {name: "绵阳", value: 80},
                    {name: "乌鲁木齐", value: 84},
                    {name: "枣庄", value: 84},
                    {name: "杭州", value: 84},
                    {name: "淄博", value: 85},
                    {name: "鞍山", value: 86},
                    {name: "溧阳", value: 86},
                    {name: "库尔勒", value: 86},
                    {name: "安阳", value: 90},
                    {name: "开封", value: 90},
                    {name: "济南", value: 92},
                    {name: "德阳", value: 93},
                    {name: "温州", value: 95},
                    {name: "九江", value: 96},
                    {name: "邯郸", value: 98},
                    {name: "临安", value: 99},
                    {name: "兰州", value: 99},
                    {name: "沧州", value: 100},
                    {name: "临沂", value: 103},
                    {name: "南充", value: 104},
                    {name: "天津", value: 105},
                    {name: "富阳", value: 106},
                    {name: "泰安", value: 112},
                    {name: "诸暨", value: 112},
                    {name: "郑州", value: 113},
                    {name: "哈尔滨", value: 114},
                    {name: "聊城", value: 116},
                    {name: "芜湖", value: 117},
                    {name: "唐山", value: 119},
                    {name: "平顶山", value: 119},
                    {name: "邢台", value: 119},
                    {name: "德州", value: 120},
                    {name: "济宁", value: 120},
                    {name: "荆州", value: 127},
                    {name: "宜昌", value: 130},
                    {name: "义乌", value: 132},
                    {name: "丽水", value: 133},
                    {name: "洛阳", value: 134},
                    {name: "秦皇岛", value: 136},
                    {name: "株洲", value: 143},
                    {name: "石家庄", value: 147},
                    {name: "莱芜", value: 148},
                    {name: "常德", value: 152},
                    {name: "保定", value: 153},
                    {name: "湘潭", value: 154},
                    {name: "金华", value: 157},
                    {name: "岳阳", value: 169},
                    {name: "长沙", value: 175},
                    {name: "衢州", value: 177},
                    {name: "廊坊", value: 193},
                    {name: "菏泽", value: 194},
                    {name: "合肥", value: 229},
                    {name: "武汉", value: 273},
                    {name: "大庆", value: 279}
                ]
            };
        };
        // 矿粉
        vm.kuangFen = function (item) {
            vm.topActive = item;
            // 测试数据
            vm.data = {
                donglimei: [
                    {value: 5, name: '进行中'},
                    {value: 3, name: '已完成'},
                    {value: 7, name: '已发布'}
                ],
                wuyanmei: [
                    {value: 6, name: '进行中'},
                    {value: 9, name: '已完成'},
                    {value: 2, name: '已发布'}
                ],
                penchuimei: [
                    {value: 3, name: '进行中'},
                    {value: 5, name: '已完成'},
                    {value: 9, name: '已发布'}
                ],
                lianjiaomei: [
                    {value: 6, name: '进行中'},
                    {value: 3, name: '已完成'},
                    {value: 1, name: '已发布'}
                ],
                yuanmei: [
                    {value: 8, name: '进行中'},
                    {value: 3, name: '已完成'},
                    {value: 7, name: '已发布'}
                ],
                liulan: [
                    {
                        name: '动力煤',
                        type: 'line',
                        stack: '总量',
                        data: [60, 70, 85, 134, 90, 75, 100]
                    },
                    {
                        name: '无烟煤',
                        type: 'line',
                        stack: '总量',
                        data: [100, 50, 191, 75, 86, 452, 45]
                    },
                    {
                        name: '喷吹煤',
                        type: 'line',
                        stack: '总量',
                        data: [455, 85, 254, 154, 534, 244, 200]
                    },
                    {
                        name: '炼焦煤',
                        type: 'line',
                        stack: '总量',
                        data: [150, 332, 452, 334, 57, 52, 100]
                    },
                    {
                        name: '原煤',
                        type: 'line',
                        stack: '总量',
                        data: [52, 45, 78, 62, 54, 87, 20]
                    }
                ],
                jine: [
                    {
                        type: 'bar',
                        data: [
                            {
                                value: 12542,
                                itemStyle: {
                                    normal: {
                                        color: '#3069BE',
                                    }
                                }
                            }, {
                                value: 48541,
                                itemStyle: {
                                    normal: {
                                        color: '#d48265',
                                    }
                                }
                            }, {
                                value: 55754,
                                itemStyle: {
                                    normal: {
                                        color: '#54D475',
                                    }
                                }
                            }, {
                                value: 55784,
                                itemStyle: {
                                    normal: {
                                        color: '#91c7ae',
                                    }
                                }
                            }]
                    }
                ],
                zhuanhua: [7, 62, 15, 245, 73, 31, 0],
                map: [
                    {name: "盘锦", value: 40},
                    {name: "长治", value: 41},
                    {name: "深圳", value: 41},
                    {name: "珠海", value: 42},
                    {name: "宿迁", value: 43},
                    {name: "咸阳", value: 43},
                    {name: "铜川", value: 44},
                    {name: "平度", value: 44},
                    {name: "佛山", value: 44},
                    {name: "海口", value: 44},
                    {name: "江门", value: 45},
                    {name: "章丘", value: 45},
                    {name: "肇庆", value: 46},
                    {name: "大连", value: 47},
                    {name: "临汾", value: 47},
                    {name: "吴江", value: 47},
                    {name: "石嘴山", value: 49},
                    {name: "沈阳", value: 50},
                    {name: "苏州", value: 50},
                    {name: "茂名", value: 50},
                    {name: "嘉兴", value: 51},
                    {name: "长春", value: 51},
                    {name: "胶州", value: 52},
                    {name: "银川", value: 52},
                    {name: "张家港", value: 52},
                    {name: "三门峡", value: 53},
                    {name: "锦州", value: 54},
                    {name: "南昌", value: 54},
                    {name: "柳州", value: 54},
                    {name: "三亚", value: 54},
                    {name: "自贡", value: 56},
                    {name: "吉林", value: 56},
                    {name: "阳江", value: 57},
                    {name: "泸州", value: 57},
                    {name: "西宁", value: 57},
                    {name: "宜宾", value: 58},
                    {name: "呼和浩特", value: 58},
                    {name: "成都", value: 58},
                    {name: "大同", value: 58},
                    {name: "镇江", value: 59},
                    {name: "桂林", value: 59},
                    {name: "张家界", value: 59},
                    {name: "宜兴", value: 59},
                    {name: "北海", value: 60},
                    {name: "西安", value: 61},
                    {name: "金坛", value: 62},
                    {name: "东营", value: 62},
                    {name: "牡丹江", value: 63},
                    {name: "遵义", value: 63},
                    {name: "绍兴", value: 63},
                    {name: "扬州", value: 64},
                    {name: "常州", value: 64},
                    {name: "潍坊", value: 65},
                    {name: "重庆", value: 66},
                    {name: "台州", value: 67},
                    {name: "南京", value: 67},
                    {name: "滨州", value: 70},
                    {name: "贵阳", value: 71},
                    {name: "无锡", value: 71},
                    {name: "本溪", value: 71},
                    {name: "克拉玛依", value: 72},
                    {name: "渭南", value: 72},
                    {name: "马鞍山", value: 72},
                    {name: "宝鸡", value: 72},
                    {name: "焦作", value: 75},
                    {name: "句容", value: 75},
                    {name: "北京", value: 79},
                    {name: "徐州", value: 79},
                    {name: "衡水", value: 80},
                    {name: "包头", value: 80},
                    {name: "绵阳", value: 80},
                    {name: "乌鲁木齐", value: 84},
                    {name: "枣庄", value: 84},
                    {name: "杭州", value: 84},
                    {name: "淄博", value: 85},
                    {name: "鞍山", value: 86},
                    {name: "溧阳", value: 86},
                    {name: "库尔勒", value: 86},
                    {name: "安阳", value: 90},
                    {name: "开封", value: 90},
                    {name: "济南", value: 92},
                    {name: "德阳", value: 93},
                    {name: "温州", value: 95},
                    {name: "九江", value: 96},
                    {name: "邯郸", value: 98},
                    {name: "临安", value: 99},
                    {name: "兰州", value: 99},
                    {name: "沧州", value: 100},
                    {name: "临沂", value: 103},
                    {name: "南充", value: 104},
                    {name: "天津", value: 105},
                    {name: "富阳", value: 106},
                    {name: "泰安", value: 112},
                    {name: "诸暨", value: 112},
                    {name: "郑州", value: 113},
                    {name: "哈尔滨", value: 114},
                    {name: "聊城", value: 116},
                    {name: "芜湖", value: 117},
                    {name: "唐山", value: 119},
                    {name: "平顶山", value: 119},
                    {name: "邢台", value: 119},
                    {name: "德州", value: 120},
                    {name: "济宁", value: 120},
                    {name: "荆州", value: 127},
                    {name: "宜昌", value: 130},
                    {name: "义乌", value: 132},
                    {name: "丽水", value: 133},
                    {name: "洛阳", value: 134},
                    {name: "秦皇岛", value: 136},
                    {name: "株洲", value: 143},
                    {name: "石家庄", value: 147},
                    {name: "莱芜", value: 148},
                    {name: "常德", value: 152},
                    {name: "保定", value: 153},
                    {name: "湘潭", value: 154},
                    {name: "金华", value: 157},
                    {name: "岳阳", value: 169},
                    {name: "长沙", value: 175},
                    {name: "衢州", value: 177},
                    {name: "廊坊", value: 193},
                    {name: "菏泽", value: 194},
                    {name: "合肥", value: 229},
                    {name: "武汉", value: 273},
                    {name: "大庆", value: 279}
                ]
            };
        };
        // 耐火材料
        vm.naiHuo = function (item) {
            vm.topActive = item;
        };
        // 合金
        vm.heJin = function (item) {
            vm.topActive = item;
        };
        // 铁合金
        vm.tieHeJin = function (item) {
            vm.topActive = item;
        };
        // 钢铁
        vm.gangTie = function (item) {
            vm.topActive = item;
        };
        // 抢单
        vm.qiangDan = function (item) {
            vm.centerActive = item;
            // 测试数据
            vm.data = {
                donglimei: [
                    {value: 3, name: '进行中'},
                    {value: 1, name: '已完成'},
                    {value: 2, name: '已发布'}
                ],
                wuyanmei: [
                    {value: 3, name: '进行中'},
                    {value: 3, name: '已完成'},
                    {value: 4, name: '已发布'}
                ],
                penchuimei: [
                    {value: 5, name: '进行中'},
                    {value: 8, name: '已完成'},
                    {value: 4, name: '已发布'}
                ],
                lianjiaomei: [
                    {value: 3, name: '进行中'},
                    {value: 2, name: '已完成'},
                    {value: 4, name: '已发布'}
                ],
                yuanmei: [
                    {value: 3, name: '进行中'},
                    {value: 3, name: '已完成'},
                    {value: 1, name: '已发布'}
                ],
                liulan: [
                    {
                        name: '动力煤',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '无烟煤',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '喷吹煤',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '炼焦煤',
                        type: 'line',
                        stack: '总量',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '原煤',
                        type: 'line',
                        stack: '总量',
                        data: [152, 254, 111, 241, 54, 87, 451]
                    }
                ],
                jine: [
                    {
                        type: 'bar',
                        data: [
                            {
                                value: 23438,
                                itemStyle: {
                                    normal: {
                                        color: '#3069BE',
                                    }
                                }
                            }, {
                                value: 31000,
                                itemStyle: {
                                    normal: {
                                        color: '#d48265',
                                    }
                                }
                            }, {
                                value: 121594,
                                itemStyle: {
                                    normal: {
                                        color: '#54D475',
                                    }
                                }
                            }, {
                                value: 134141,
                                itemStyle: {
                                    normal: {
                                        color: '#91c7ae',
                                    }
                                }
                            }]
                    }
                ],
                zhuanhua: [0, 120, 210, 130, 200, 62, 0],
                map: [
                    {name: "海门", value: 90},
                    {name: "鄂尔多斯", value: 12},
                    {name: "招远", value: 12},
                    {name: "舟山", value: 12},
                    {name: "齐齐哈尔", value: 14},
                    {name: "盐城", value: 15},
                    {name: "赤峰", value: 16},
                    {name: "青岛", value: 18},
                    {name: "乳山", value: 18},
                    {name: "金昌", value: 19},
                    {name: "泉州", value: 21},
                    {name: "莱西", value: 21},
                    {name: "日照", value: 21},
                    {name: "胶南", value: 22},
                    {name: "南通", value: 23},
                    {name: "拉萨", value: 24},
                    {name: "云浮", value: 24},
                    {name: "梅州", value: 25},
                    {name: "文登", value: 25},
                    {name: "上海", value: 25},
                    {name: "攀枝花", value: 25},
                    {name: "威海", value: 25},
                    {name: "承德", value: 25},
                    {name: "厦门", value: 26},
                    {name: "汕尾", value: 26},
                    {name: "潮州", value: 26},
                    {name: "丹东", value: 27},
                    {name: "太仓", value: 27},
                    {name: "曲靖", value: 27},
                    {name: "烟台", value: 28},
                    {name: "福州", value: 29},
                    {name: "瓦房店", value: 30},
                    {name: "即墨", value: 30},
                    {name: "抚顺", value: 31},
                    {name: "玉溪", value: 31},
                    {name: "张家口", value: 31},
                    {name: "阳泉", value: 31},
                    {name: "莱州", value: 32},
                    {name: "湖州", value: 32},
                    {name: "汕头", value: 32},
                    {name: "昆山", value: 33},
                    {name: "宁波", value: 33},
                    {name: "湛江", value: 33},
                    {name: "揭阳", value: 34},
                    {name: "荣成", value: 34},
                    {name: "连云港", value: 35},
                    {name: "葫芦岛", value: 35},
                    {name: "常熟", value: 36},
                    {name: "东莞", value: 36},
                    {name: "河源", value: 36},
                    {name: "淮安", value: 36},
                    {name: "泰州", value: 36},
                    {name: "南宁", value: 37},
                    {name: "营口", value: 37},
                    {name: "乌鲁木齐", value: 84},
                    {name: "枣庄", value: 84},
                    {name: "杭州", value: 84},
                    {name: "淄博", value: 85},
                    {name: "鞍山", value: 86},
                    {name: "溧阳", value: 86},
                    {name: "库尔勒", value: 86},
                    {name: "安阳", value: 90},
                    {name: "开封", value: 90},
                    {name: "济南", value: 92},
                    {name: "德阳", value: 93},
                    {name: "温州", value: 95},
                    {name: "九江", value: 96},
                    {name: "邯郸", value: 98},
                    {name: "临安", value: 99},
                    {name: "兰州", value: 99},
                    {name: "沧州", value: 100},
                    {name: "临沂", value: 103},
                    {name: "南充", value: 104},
                    {name: "天津", value: 105},
                    {name: "富阳", value: 106},
                    {name: "泰安", value: 112},
                    {name: "诸暨", value: 112},
                    {name: "郑州", value: 113},
                    {name: "哈尔滨", value: 114},
                    {name: "聊城", value: 116},
                    {name: "芜湖", value: 117},
                    {name: "唐山", value: 119},
                    {name: "平顶山", value: 119},
                    {name: "邢台", value: 119},
                    {name: "德州", value: 120},
                    {name: "济宁", value: 120},
                    {name: "荆州", value: 127},
                    {name: "宜昌", value: 130},
                    {name: "义乌", value: 132},
                    {name: "丽水", value: 133},
                    {name: "洛阳", value: 134},
                    {name: "秦皇岛", value: 136},
                    {name: "株洲", value: 143},
                    {name: "石家庄", value: 147},
                    {name: "莱芜", value: 148},
                    {name: "常德", value: 152},
                    {name: "保定", value: 153},
                    {name: "湘潭", value: 154},
                    {name: "金华", value: 157},
                    {name: "岳阳", value: 169},
                    {name: "长沙", value: 175},
                    {name: "衢州", value: 177},
                    {name: "廊坊", value: 193},
                    {name: "菏泽", value: 194},
                    {name: "合肥", value: 229},
                    {name: "武汉", value: 273},
                    {name: "大庆", value: 279}
                ]
            };
        };
        // 浏览
        vm.liuLan = function (item) {
            vm.centerActive = item;
            vm.data = {
                donglimei: [
                    {value: 3, name: '进行中'},
                    {value: 1, name: '已完成'},
                    {value: 2, name: '已发布'}
                ],
                wuyanmei: [
                    {value: 3, name: '进行中'},
                    {value: 3, name: '已完成'},
                    {value: 4, name: '已发布'}
                ],
                penchuimei: [
                    {value: 5, name: '进行中'},
                    {value: 8, name: '已完成'},
                    {value: 4, name: '已发布'}
                ],
                lianjiaomei: [
                    {value: 3, name: '进行中'},
                    {value: 2, name: '已完成'},
                    {value: 4, name: '已发布'}
                ],
                yuanmei: [
                    {value: 3, name: '进行中'},
                    {value: 3, name: '已完成'},
                    {value: 1, name: '已发布'}
                ],
                liulan: [
                    {
                        name: '动力煤',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '无烟煤',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '喷吹煤',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '炼焦煤',
                        type: 'line',
                        stack: '总量',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '原煤',
                        type: 'line',
                        stack: '总量',
                        data: [152, 254, 111, 241, 54, 87, 451]
                    }
                ],
                jine: [
                    {
                        type: 'bar',
                        data: [
                            {
                                value: 23438,
                                itemStyle: {
                                    normal: {
                                        color: '#3069BE',
                                    }
                                }
                            }, {
                                value: 31000,
                                itemStyle: {
                                    normal: {
                                        color: '#d48265',
                                    }
                                }
                            }, {
                                value: 121594,
                                itemStyle: {
                                    normal: {
                                        color: '#54D475',
                                    }
                                }
                            }, {
                                value: 134141,
                                itemStyle: {
                                    normal: {
                                        color: '#91c7ae',
                                    }
                                }
                            }]
                    }
                ],
                zhuanhua: [0, 120, 210, 130, 200, 62, 0],
                map: [
                    {name: "大同", value: 58},
                    {name: "镇江", value: 59},
                    {name: "桂林", value: 59},
                    {name: "张家界", value: 59},
                    {name: "宜兴", value: 59},
                    {name: "北海", value: 60},
                    {name: "西安", value: 61},
                    {name: "金坛", value: 62},
                    {name: "东营", value: 62},
                    {name: "牡丹江", value: 63},
                    {name: "遵义", value: 63},
                    {name: "绍兴", value: 63},
                    {name: "扬州", value: 64},
                    {name: "常州", value: 64},
                    {name: "潍坊", value: 65},
                    {name: "重庆", value: 66},
                    {name: "台州", value: 67},
                    {name: "南京", value: 67},
                    {name: "滨州", value: 70},
                    {name: "贵阳", value: 71},
                    {name: "无锡", value: 71},
                    {name: "本溪", value: 71},
                    {name: "克拉玛依", value: 72},
                    {name: "渭南", value: 72},
                    {name: "马鞍山", value: 72},
                    {name: "宝鸡", value: 72},
                    {name: "焦作", value: 75},
                    {name: "句容", value: 75},
                    {name: "北京", value: 79},
                    {name: "徐州", value: 79},
                    {name: "衡水", value: 80},
                    {name: "包头", value: 80},
                    {name: "绵阳", value: 80},
                    {name: "乌鲁木齐", value: 84},
                    {name: "枣庄", value: 84},
                    {name: "杭州", value: 84},
                    {name: "淄博", value: 85},
                    {name: "鞍山", value: 86},
                    {name: "溧阳", value: 86},
                    {name: "库尔勒", value: 86},
                    {name: "安阳", value: 90},
                    {name: "开封", value: 90},
                    {name: "济南", value: 92},
                    {name: "德阳", value: 93},
                    {name: "温州", value: 95},
                    {name: "九江", value: 96},
                    {name: "邯郸", value: 98},
                    {name: "临安", value: 99},
                    {name: "兰州", value: 99},
                    {name: "沧州", value: 100},
                    {name: "临沂", value: 103},
                    {name: "南充", value: 104},
                    {name: "天津", value: 105},
                    {name: "富阳", value: 106},
                    {name: "泰安", value: 112},
                    {name: "诸暨", value: 112},
                    {name: "郑州", value: 113},
                    {name: "哈尔滨", value: 114},
                    {name: "聊城", value: 116},
                    {name: "芜湖", value: 117},
                    {name: "唐山", value: 119},
                    {name: "平顶山", value: 119},
                    {name: "邢台", value: 119},
                    {name: "德州", value: 120},
                    {name: "济宁", value: 120},
                    {name: "荆州", value: 127},
                    {name: "宜昌", value: 130},
                    {name: "义乌", value: 132},
                    {name: "丽水", value: 133},
                    {name: "洛阳", value: 134},
                    {name: "秦皇岛", value: 136},
                    {name: "株洲", value: 143},
                    {name: "石家庄", value: 147},
                    {name: "莱芜", value: 148},
                    {name: "常德", value: 152},
                    {name: "保定", value: 153},
                    {name: "湘潭", value: 154},
                    {name: "金华", value: 157},
                    {name: "岳阳", value: 169},
                    {name: "长沙", value: 175},
                    {name: "衢州", value: 177},
                    {name: "廊坊", value: 193},
                    {name: "菏泽", value: 194},
                    {name: "合肥", value: 229},
                    {name: "武汉", value: 273},
                    {name: "大庆", value: 279}
                ]
            };
        };
        // 金额
        vm.jine = function (item) {
            vm.centerActive = item;
        };
        // 转化
        vm.zhuanHua = function (item) {
            vm.centerActive = item;

        };

    })
    /**
     * 物流
     */
    .controller('passCtrl', function ($scope, $stateParams) {
        var vm = $scope.vm = this;

        //初始化
        vm.init = function () {

        }
    })
    /**
     * 司机
     */
    .controller('carCtrl', function ($scope, $stateParams) {
        var vm = $scope.vm = this;

        //初始化
        vm.init = function () {

        }
    })
    /**
     * 司机
     */
    .controller('carLeftCtrl', function ($scope, $stateParams) {
        var vm = $scope.vm = this;

        //初始化
        vm.init = function () {

        }
    })
    /**
     * 企业关系
     */
    .controller('relationCtrl', function ($scope, $stateParams) {
        var vm = $scope.vm = this;

        //初始化
        vm.init = function () {

        }
    })
    /**
     * 市场分布
     */
    .controller('marketCtrl', function ($scope, $stateParams) {
        var vm = $scope.vm = this;

        //初始化
        vm.init = function () {

        }
    });
