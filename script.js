document.getElementById('create blog form').addEventListener('submit',function(e){
    e.preventDefault();

    const title=document.getElementById('title').value();
    const content=document.getElementById('content').value();

    if (title && content){
        document.getElementById('message').innerHTML = <p>Blog titled "<strong>${title}</strong>" has been created! </p>;
        document.getElementById('create blog form').requestFullscreen();

    } else{
        document.getElementById('message').innerHTML='<p style="color:red;">Please fill in both fields.</p';
    }
});