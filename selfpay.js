new Vue({
    el: '#app',
    data: {
        item1: "",
        item2: "",
        item3: "",
        item4: "",
        item5: "",
        item1qty: "",
        item2qty: "",
        item3qty: "",
        item4qty: "",
        item5qty: "",
        Price1: 0,
        Price2: 0,
        Price3: 0,
        Price4: 0,
        Price5: 0,
    },
    methods: {
        itemQty(){
            if(this.item1==""){
                return 0;
            }
            else if(this.item2==""){
                return 1;
                total();
            }
            else if(this.item3==""){
                return 2;
                total();
            }
            else if(this.item4==""){
                return 3
                total();
            }
            else if(this.item5==""){
                return 4;
                total();
            }
            else{
                return 5;
                total();
            }
        },

        total(){
            if(this.item1=="Sugar"){
                this.Price1 = (200 * parseInt(this.item1qty));
            }
            else if(this.item1=="Tea leaves"){
                this.Price1 = (300 * parseInt(this.item1qty));
            }
            else if(this.item1=="Milkmaid"){
                this.Price1 = (600 * parseInt(this.item1qty));
            }
            else if(this.item1=="Dhal"){
                this.Price1 = (550 * parseInt(this.item1qty));
            }
            else if(this.item1=="Rise samba"){
                this.Price1 = (200 * parseInt(this.item1qty));
            }
            else if(this.item1=="Dried chill"){
                this.Price1 = (200 * parseInt(this.item1qty));
            }

            if(this.item2=="Sugar"){
                this.Price2 = (200 * parseInt(this.item2qty));
            }
            else if(this.item2=="Tea leaves"){
                this.Price2 = (300 * parseInt(this.item2qty));
            }
            else if(this.item2=="Milkmaid"){
                this.Price2 = (600 * parseInt(this.item2qty));
            }
            else if(this.item2=="Dhal"){
                this.Price2 = (550 * parseInt(this.item2qty));
            }
            else if(this.item2=="Rise samba"){
                this.Price2 = (200 * parseInt(this.item2qty));
            }
            else if(this.item2=="Dried chill"){
                this.Price2 = (200 * parseInt(this.item2qty));
            }

            if(this.item3=="Sugar"){
                this.Price3 = (200 * parseInt(this.item3qty));
            }
            else if(this.item3=="Tea leaves"){
                this.Price3 = (300 * parseInt(this.item3qty));
            }
            else if(this.item3=="Milkmaid"){
                this.Price3 = (600 * parseInt(this.item3qty));
            }
            else if(this.item3=="Dhal"){
                this.Price3 = (550 * parseInt(this.item3qty));
            }
            else if(this.item3=="Rise samba"){
                this.Price3 = (200 * parseInt(this.item3qty));
            }
            else if(this.item3=="Dried chill"){
                this.Price3 = (200 * parseInt(this.item3qty));
            }

            if(this.item4=="Sugar"){
                this.Price4 = (200 * parseInt(this.item4qty));
            }
            else if(this.item4=="Tea leaves"){
                this.Price4 = (300 * parseInt(this.item4qty));
            }
            else if(this.item4=="Milkmaid"){
                this.Price4 = (600 * parseInt(this.item4qty));
            }
            else if(this.item4=="Dhal"){
                this.Price4 = (550 * parseInt(this.item4qty));
            }
            else if(this.item4=="Rise samba"){
                this.Price4 = (200 * parseInt(this.item4qty));
            }
            else if(this.item4=="Dried chill"){
                this.Price4 = (200 * parseInt(this.item4qty));
            }

            if(this.item5=="Sugar"){
                this.Price5 = (200 * parseInt(this.item5qty));
            }
            else if(this.item5=="Tea leaves"){
                this.Price5 = (300 * parseInt(this.item5qty));
            }
            else if(this.item5=="Milkmaid"){
                this.Price5 = (600 * parseInt(this.item5qty));
            }
            else if(this.item5=="Dhal"){
                this.Price5 = (550 * parseInt(this.item5qty));
            }
            else if(this.item5=="Rise samba"){
                this.Price5 = (200 * parseInt(this.item5qty));
            }
            else if(this.item5=="Dried chill"){
                this.Price5 = (200 * parseInt(this.item5qty));
            }
            return this.Price1 + this.Price2 + this.Price3 + this.Price4 + this.Price5;

        }
    }
});