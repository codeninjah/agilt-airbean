<template>
    <div>
        <h1>Din beställning</h1>
        <ul>
            <li v-for="item in cart" :key="item.id">
                {{ item.title }} 
            </li>
        </ul>
        <button @click="attToOrderHistory">Take my money!</button>
        <ul>
            <li v-for="item in test" :key="item.id">
                {{item[0]}} numbers of item is: {{item.length}} and there are {{test.length}} unique items in the list.
                Price for this is: <span>{{ item[0].price * item.length }}</span> KR
            </li>
                TOTAL PRICE IS: {{ totalPrice }}
        </ul>
    </div>
</template>


<script>
    export default{
        methods: {
            attToOrderHistory(){
                const thisItem = this.$store.state.currentOrder
                this.$store.dispatch('order', thisItem)
                this.$router.push('/profile')
            }
        },
        computed: {
            cart(){
                return this.$store.state.currentOrder
            },
            cartFiltered(){
                const list = this.$store.state.currentOrder
                return list.filter(item => item.title === item.title)
            },
            test(){      
                const list = this.$store.state.currentOrder
                /*
                const uniqueObjects = [ ...new Set( list.map( obj => obj.title) ) ].map( title=> { 
                         list.find(obj => obj.title === title)
                         return list
                    } )
                return uniqueObjects
                */

                //const list = this.$store.state.currentOrder
                //FÖLJANDE VERKAR FUNGERA TILLSAMMANS MED RAD 12
                const uniqueObjects = [ ...new Set( list.map( obj => obj.title) ) ].map( title=> { 
                    list.find(obj => obj.title == title).length
                         return list.filter(item => item.title == title)
                    } )

                return uniqueObjects

                //return list.filter((a, i) => list.findIndex((s) => a.title === s.title) === i) //printar ut de unika items en gång var
                
            },
            totalPrice(){
                let a = document.getElementsByTagName("span")
                let sum = 0
                for(var i = 0; i < a.length; i++){
                    sum += parseFloat(a[i].innerText)
                }
                console.log("Inner text is:" + sum)
                return sum
            }
        }
    }

</script>


<style scoped>

button {
    background-color: #2F2926;
    color: #FFFFFF;
    width: 280px;
    height: 80px;
    border-radius: 50px;
    font-size: 24px;
    margin-left: 20px;
}

button:hover {
    cursor: pointer;
}

</style>
