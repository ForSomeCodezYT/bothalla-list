function voteclick() {
    if (!document.getElementById('votebot').value)
        return flash(document.getElementById('votebot'))

    let data = {
        id: 1,
    };


    var url = `${window.location.origin}/api/bots/vote`;
    var form = $(`<form action="${url}" method="post">
<input type="text" name="id" value="${data.id}" />
</form>
`);
    $('body').append(form);
    form.submit();
}

function flash(element) {
    element.scrollIntoView();
    element.style.border = "2px solid #ff0000";
    element.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    setTimeout(() => {
        element.style.backgroundColor = "rgba(0, 0, 0, 0)";
        element.style.border = "1px solid #888";
    }, 600)
}
