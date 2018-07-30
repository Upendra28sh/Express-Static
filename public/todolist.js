$(
    function () {
        let newtodo = $('#newtodo')
        let btn = $('#btn')
        let list = $('#list')

        btn.click(
            function () {
                let newval = newtodo.val()

                $.post(
                    "/todo/", 
                    { task: newval },
                    function (data) {
                        list.empty()
                        for(todo of data)
                        {
                            list.append("<li>"+todo.task + "</li>")
                        }
                    })
            }
        )

    }
)