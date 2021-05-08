$(document).ready(function(){
    // Update Admin Type 
    $('select#admin_type').change(function(){
        var select_id = $(this).attr('data-id');
        var tr_id = $(this).parents('tr').attr('data-id');
        if (select_id == tr_id) {
            $('#admin_update'+select_id).css('display','block');  
            $('#admin_update'+select_id).click(function(){
                var type = $(this).siblings('select').val();
                type = type.trim();
                if (type != '') {
                    $.ajax({
                        url: "../../ajax/update_admin_type.php",
                        type: "POST",
                        data: {admin_id: select_id , admin_type:type},
                        success: function(data){
                            $('#message').css('display','block');
                            $('#message').html(data);
                        }
                    })
                }
            });
        } 
    });

    // update Active 
    $('select#active').change(function(){
        var select_id = $(this).attr('data-id');
        var tr_id = $(this).parents('tr').attr('data-id');
        var models = $(this).parents('tr').attr('data-mod');
        if (select_id == tr_id) {
            var btn = $('#btn_active'+select_id).css('display','block');
            btn.click(function(){
                var active = btn.siblings('select').val();
                models = models.trim();
                $.ajax({
                    url: "../../ajax/update_active.php",
                    type: "POST",
                    data: {models:models,active:active,id:select_id},
                    success: function(data){
                        console.log(data);
                        $('#message').css('display','block');
                        $('#message').html(data);
                    }
                });
                
            });
        }
    });

    // Update doctor show
        // update Active 
        $('select#show').change(function(){
            var select_id = $(this).attr('data-id');
            var tr_id = $(this).parents('tr').attr('data-id');
            var models = $(this).parents('tr').attr('data-mod');
            if (select_id == tr_id) {
                var btn = $('#btn_show'+select_id).css('display','block');
                btn.click(function(){
                    var active = btn.siblings('select').val();
                    models = models.trim();
                    $.ajax({
                        url: "../../ajax/doctor_show.php",
                        type: "POST",
                        data: {models:models,active:active,id:select_id},
                        success: function(data){
                            console.log(data);
                            $('#message').css('display','block');
                            $('#message').html(data);
                        }
                    });
                    
                });
            }
        });
    
    // Update Country 
    $('select#country').change(function(){
        var tr_id = $(this).parents('tr').attr('data-id');
        var models = $(this).parents('tr').attr('data-mod');
        var state_id= $(this).attr('data-id');
        if (state_id == tr_id) {
            var country_id = $(this).parents('tr').attr('data-country');
            var country = $(this).val();
            if (country != country_id){
                var btn = $('#btn_country'+state_id).css('display','block');    
                var country_id = btn.siblings('select').val();
                models = models.trim();
                btn.click(function(){
                    $.ajax({
                        url: "../../ajax/country_active.php",
                        type: "POST",
                        data: {models:models,country_id:country_id,state_id:state_id},
                        success: function(data){
                            $('#message').css('display','block');
                            $('#message').html(data);
                        }
                    });
                });   
            }
        }
    });

    // Update State 
    $('select#state').change(function(){
        var tr_id = $(this).parents('tr').attr('data-id');
        var models = $(this).parents('tr').attr('data-mod');
        var city_id= $(this).attr('data-id');
        if (city_id == tr_id) {
            var state_id = $(this).parents('tr').attr('data-state');
            var state = $(this).val();
            if (state_id != state){
                var btn = $('#btn_state'+city_id).css('display','block');    
                var state_id = btn.siblings('select').val();
                models = models.trim();
                btn.click(function(){
                    $.ajax({
                        url: "../../ajax/state_update.php",
                        type: "POST",
                        data: {models:models,state_id:state_id,city_id:city_id},
                        success: function(data){
                            $('#message').css('display','block');
                            $('#message').html(data);
                        }
                    });
                });   
            }
        }
    });

    // Update Department
    // Update State 
    $('select#department').change(function(){
        var tr_id = $(this).parents('tr').attr('data-id');
        var models = $(this).parents('tr').attr('data-mod');
        var doctor_id= $(this).attr('data-id');
        if (doctor_id == tr_id) {
            var department_id = $(this).parents('tr').attr('data-department');
            var department = $(this).val();
            if (department_id != department){
                var btn = $('#btn_department'+doctor_id).css('display','block');    
                var department_id = btn.siblings('select').val();
                models = models.trim();
                btn.click(function(){
                    $.ajax({
                        url: "../../ajax/department_update.php",
                        type: "POST",
                        data: {models:models,department_id:department_id,doctor_id:doctor_id},
                        success: function(data){
                            $('#message').css('display','block');
                            $('#message').html(data);
                        }
                    });
                });   
            }
        }
    });


    // save setting
    $('td#btnset').click(function(){
        var tr = $(this).parents('tr').attr('data-id');
        var btn = $(this).children('button').attr('data-id');
        //console.log(tr);
        if(tr == btn) {
            var input_val = $(this).siblings('td').children('input').val();
            input_val = input_val.trim();
            $.ajax({
                url: "../../ajax/save_setting.php",
                type: "POST",
                data: {setting_id:tr,setting_value:input_val},
                success: function(data){
                    console.log(data);
                }
            });
        }
        
        
    });
});