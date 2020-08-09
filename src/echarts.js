const options = {
    data() {
        return {
            optionline: {
                title: {
                    text: '柱状图'
                },
                tooltip: {},
                legend: {
                    data: ['用户来源']
                },
                xAxis: {
                    data: ["Android", "IOS", "PC", "Ohter"]
                },
                yAxis: {

                },
                series: [
                    {
                        name: '访问量',
                        type: 'bar', //设置图表主题
                        data: [50, 200, 360, 100]
                    }
                ]
            },
            optionline1: {
                title: {
                    text: '折线图'
                },
                tooltip: {},
                legend: {
                    data: ['用户来源']
                },
                xAxis: {
                    data: ["Android", "IOS", "PC", "Ohter"]
                },
                yAxis: {

                },
                series: [
                    {
                        name: '访问量',
                        type: 'line', //设置图表主题
                        data: [50, 200, 360, 100]
                    }
                ]
            },
            optionline2: {
                title: {
                    text: '饼状图'
                },
                // tooltip: {},
                legend: {
                    // data: ['用户来源']
                },
                xAxis: {
                    // data: ["Android", "IOS", "PC", "Ohter"]
                },
                yAxis: {

                },
                series: [
                    {
                        // name: '访问量',
                        type: 'pie', //设置图表主题
                        data: [50, 200, 880, 100]
                    }
                ]
            },
            res: null
        }
    },
    mounted() {
        this.drawLine()
        
    },
    methods: {
        drawLine() {
            this.res = this.$echarts.init(document.getElementById("test"));
            this.res.setOption(this.optionline)
            this.res = this.$echarts.init(document.getElementById("test1"));
            this.res.setOption(this.optionline1)
            this.res = this.$echarts.init(document.getElementById("test2"));
            this.res.setOption(this.optionline2)
        },
        
    }
}
export default options