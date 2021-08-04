const app = Vue.createApp({
    data() {
        return {
            title: "Contador App - Vue",
            count: 0,
        };
    },
    methods: {
        modCount(instruction = "add", limit = 1) {
            if (instruction === "dis") this.count -= limit;
            else if (instruction === "cero") this.count = 0;
            else this.count += limit;
        },
        // disCount() {
        //     this.count -= 1;
        // },
        // addCount() {
        //     this.count += 1;
        // },
    },
});