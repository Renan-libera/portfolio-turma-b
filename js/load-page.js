$(document).ready(function(){

  $('a').click(function(e)){
    e.preventDefault()

    let page = $(this).attr('href')

    $('.modal-title').emply()
    $('modal-body').append('lorem')

    switch(page){
      case 'about': 
      $('.modal-title').append('Sobre mim')
      $('.modal-body').append('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi quidem asperiores ipsa neque tenetur libero facere, corporis et magni pariatur dignissimos obcaecati voluptate consequuntur ipsam provident dolor odio doloribus quaerat.</p>')
      $('#modal-info').modal('show')
      break

      case 'work': alert('Meus trabalhos')
      break

      case 'client': alert('Meus clientes')
      break
      
      case 'contact': alert(Meus contatos)
      default: alert('Link não encontrado')
    }
  })
})