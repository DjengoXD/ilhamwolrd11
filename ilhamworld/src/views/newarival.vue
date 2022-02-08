<template>
   <div>
      
    <h1>newarrival</h1>

    <div class="container">
        <div class="row">
            <div class="col-md-4"  v-for="newarival in newarival" :key="newarival.id">
                <div class="card">
                    <div class="card-header">
                        <img src="https://cylbhdlqsmhxgbeghict.supabase.in/storage/v1/object/sign/foto-produk/hoodie/download (2).jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3RvLXByb2R1ay9ob29kaWUvZG93bmxvYWQgKDIpLmpwZWciLCJpYXQiOjE2NDMwMDI5NTEsImV4cCI6MTk1ODM2Mjk1MX0.-zSEE8eFBI8fc6ilzubZ66RvVLSTnzs2nOL48ib4FE0"  alt="">
                    </div>
                    <div class="card-body">
                        <h4>nama</h4>
                        <h4>harga</h4>
                        <button>beli</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
  </div>
  
  

</template>


<script>
export default {
    data() {
        return {
            newarival: ''
        }
    },
    mounted() {
        this.getProduk()
    },

    methods: {
        async getProduk() {
            let {data, error} = await this.$supabase
                .from('tb_produk')
                .select()
                .limit(1)
                .order('id', { ascending: false })
            
            if(data) this.newarival = data
            if(error) console.log(error)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>