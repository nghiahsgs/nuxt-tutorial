// https://nuxtjs.org/docs/directory-structure/plugins/
export default (context, inject) =>{
    inject('hello',msg=>'hello_'+msg)
}