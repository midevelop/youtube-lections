let app = new Vue({
    el: "#app",
    data: {
        lectionCurrent: 2,
        lections: [{
            name: "p1w1d1",
            topics: ["BASH", "HTML", "Git"]
        }, {
            name: "p1w1d2",
            topics: ["CSS"]
        }, {
            name: "p1w1d3",
            topics: ["JS Type", "Loop", "Function"]
        }
        ],
        currentTeacher: "Михей",
        teachers: [
            "Cаша",
            "Даня",
            "Михей",
            "Женя"
        ],
        currentPart: 0,
        partList: [0, 1, 2, 3]
    },
    computed: {
        lectionForCopy() {
            return `${this.lections[this.lectionCurrent].name} ${this.lections[this.lectionCurrent].topics.join(" ")} ${this.needPart}`
        },
        needPart() {
            if (this.currentPart) return `#${this.currentPart}`
            else return ""
        },
    },
    methods: {
        copyText() {
            navigator.clipboard.writeText(this.lectionForCopy)
            .then((data) => {
              console.log("Скопировано!")
            })
            .catch(err => {
              console.log('Something went wrong', err);
            });
        }
    }
})