function insertAtCursor(t, e) {
    var n = t.scrollTop,
        o = document.documentElement.scrollTop;
    if (document.selection) {
        t.focus();
        var s = document.selection.createRange();
        s.text = e, s.select()
    } else {
        if (t.selectionStart || "0" == t.selectionStart) {
            var l = t.selectionStart,
                c = t.selectionEnd;
            t.value = t.value.substring(0, l) + e + t.value.substring(c, t.value.length), t.focus(), t.selectionStart = l + e.length, t.selectionEnd = l + e.length
        } else {
            t.value += e, t.focus()
        }
    }
    t.scrollTop = n, document.documentElement.scrollTop = o
}
window.onload = function () {
    $(document).ready(function () {
        if ($("#wmd-button-row").length > 0) {
            $('#wmd-button-row').append(
                '<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-photoset-button" style="" title="插入選項卡"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-chanpinxuanxiangka"></use></svg></li>' +
                '<li class="wmd-button OwO" id="wmd-owo-button" style="" title="插入表情"></li>' +
                '<li class="wmd-button" id="wmd-acc-button" style="" title="插入多彩摺疊面板"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-caidan-zhankai"></use></svg></li>' +
                '<li class="wmd-button" id="wmd-button-button" style="" title="插入多彩按鈕"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-anniu1"></use></svg></li>' +
                '<li class="wmd-button" id="wmd-bar-button" style="" title="插入多彩信息條"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-icontiaoxingtu"></use></svg></li>' +
                '<li class="wmd-button" id="wmd-mes-button" style="" title="插入多彩信息面板"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-__zongkongmianban"></use></svg></li>' +
                '<li class="wmd-button" id="wmd-pro-button" style="" title="插入多彩進度條"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-C32"></use></svg></li>' +
                '<li class="wmd-button" id="wmd-pic-button" style="" title="插入畫廊"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-tupian"></use></svg></li>' +
                '<li class="wmd-button" id="wmd-tex-button" style="" title="插入特殊文字效果"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-wenzi"></use></svg></li>' +
                '<li class="wmd-button" id="wmd-fri-button" style="" title="插入友情鏈接"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-duoren-lan"></use></svg></li>' +
                '<li class="wmd-button" id="wmd-vid-button" style="" title="插入直鏈視頻"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-shipin"></use></svg></li>' +
                '<li class="wmd-button" id="wmd-aud-button" style="" title="插入直鏈音頻"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-moren_yinle"></use></svg></li><li class="wmd-spacer wmd-spacer1"></li>' +
                '<style>.wmd-button-row{height: 100%!important;}</style>');
            // $('#text').before('<div class="wmd-button OwO" style="" title="插入表情"></div>');
            new OwO({
                logo: "OωO",
                container: document.getElementsByClassName("OwO")[0],
                target: document.getElementById("text"),
                api: CUTEEN_SETTING.STATIC_PATH+"/Func/OwO/OwO.json",
                position: "down",
                width: "400px",
                maxHeight: "220px"
            });

            //面板初始化
            $(document).on('click', '#wmd-fri-button', function () {//友鏈
                $('body').append(
                    '<div id="friPanel">' +
                    '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' +
                    '<div class="wmd-prompt-dialog">' +
                    '<div>' +
                    '<p style="color:red">請在友情鏈接頁面使用本短代碼</p>' +
                    '<p><b>插入友鏈</b></p>' +
                    '<p>基本</p>' +
                    '<p><input type="text" name="zdmc" placeholder="站點名稱"></input><input type="text" name="zdlj" placeholder="站點鏈接"></input><input type="text" name="txlj" placeholder="站點頭像鏈接"></input><input type="text" name="zdms" placeholder="站點描述"></input></p>' +
                    '<p><labe>加載基本框架</labe></p>' +
                    '<p><select id="ylkj"><option value="bjzkj">否</option><option value="jzkj">是</option></select>' +
                    '</div>' +
                    '<form>' +
                    '<button type="button" class="btn btn-s primary" id="fri_ok">確定</button>' +//按鈕
                    '<button type="button" class="btn btn-s" id="fri_cancel">取消</button>' +//按鈕
                    '</form>' +
                    '</div>' +
                    '</div>');
                $('.wmd-prompt-dialog input').select();
            });
            $(document).on('click', '#wmd-tex-button', function () {//文字
                $('body').append(
                    '<div id="texPanel">' +
                    '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' +
                    '<div class="wmd-prompt-dialog">' +
                    '<div>' +
                    '<p><b>插入特殊文字</b></p>' +
                    '<p>樣式選擇</p>' +
                    '<p><select id="wzlxxz"><option value="dheimu">黑幕</option><option value="ggl">刮刮樂</option><option value="xlch">絢麗彩虹</option></select>' +
                    '<p><labe>輸入文字</labe></p>' +
                    '<p><input type="text" name="txwzsr" placeholder="輸入需要加入特效的文字"></input></p>' +
                    
                    
                    '</div>' +
                    '<form>' +
                    '<button type="button" class="btn btn-s primary" id="tex_ok">確定</button>' +//按鈕
                    '<button type="button" class="btn btn-s" id="tex_cancel">取消</button>' +//按鈕
                    '</form>' +
                    '</div>' +
                    '</div>');
                $('.wmd-prompt-dialog input').select();
            });


            $(document).on('click', '#wmd-button-button', function () {//按鈕
                $('body').append(
                    '<div id="buttonPanel">' +//按鈕
                    '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' +
                    '<div class="wmd-prompt-dialog">' +
                    '<div>' +
                    '<p><b>插入按鈕</b></p>' +
                    '<p>基本</p>' +
                    '<p><input type="text" name="te" placeholder="內容"></input><input type="text" name="url" placeholder="鏈接"></input></p>' +
                    '<p><labe>樣式</labe></p>' +
                    '<p><select id="co"><option value="info">藍色</option><option value="download">下載按鈕</option><option value="success">綠色</option><option value="black">紫色</option><option value="warning">黃色</option><option value="danger">紅色</option></select>' +
                    '</div>' +
                    '<form>' +
                    '<button type="button" class="btn btn-s primary" id="button_ok">確定</button>' +//按鈕
                    '<button type="button" class="btn btn-s" id="button_cancel">取消</button>' +//按鈕
                    '</form>' +
                    '</div>' +
                    '</div>');
                $('.wmd-prompt-dialog input').select();
            });
            $(document).on('click', '#wmd-bar-button', function () {//信息條
                $('body').append(
                    '<div id="barPanel">' +//信息條
                    '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' +
                    '<div class="wmd-prompt-dialog">' +
                    '<div>' +
                    '<p><b>插入信息條</b></p>' +
                    '<p>輸入內容</p>' +
                    '<p><textarea name="bar6" style="width: 100%; height: 100px"></textarea></p>' +
                    '<p><labe>選擇樣式</labe></p>' +
                    '<p><select id="co"><option value="gbar">綠色</option><option value="ybar">黃色</option><option value="rbar">紅色</option><option value="bbar">藍色</option><option value="pbar">紫色</option></select>' +
                    '</div>' +
                    '<form>' +
                    '<button type="button" class="btn btn-s primary" id="bar_ok">確定</button>' +//按鈕
                    '<button type="button" class="btn btn-s" id="bar_cancel">取消</button>' +//按鈕
                    '</form>' +
                    '</div>' +
                    '</div>');
                $('.wmd-prompt-dialog input').select();
            });
            $(document).on('click', '#wmd-pro-button', function () {//進度條
                $('body').append(
                    '<div id="proPanel">' +//信息條
                    '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' +
                    '<div class="wmd-prompt-dialog">' +
                    '<div>' +
                    '<p><b>插入進度條</b></p>' +
                    '<p>輸入進度（範圍：0~100數字）</p>' +
                    '<p><input type="text" name="pro5" placeholder="輸入0~100數字，留空則為未定義滾動"></input></p>' +
                    '<p><labe>選擇樣式</labe></p>' +
                    '<p><select id="co"><option value="gpro">綠色</option><option value="ypro">黃色</option><option value="rpro">紅色</option><option value="bpro">藍色</option><option value="ppro">紫色</option></select>' +
                    '</div>' +
                    '<form>' +
                    '<button type="button" class="btn btn-s primary" id="pro_ok">確定</button>' +//按鈕
                    '<button type="button" class="btn btn-s" id="pro_cancel">取消</button>' +//按鈕
                    '</form>' +
                    '</div>' +
                    '</div>');
                $('.wmd-prompt-dialog input').select();
            });
            $(document).on('click', '#wmd-mes-button', function () {//信息面板
                $('body').append(
                    '<div id="mesPanel">' +//信息條
                    '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' +
                    '<div class="wmd-prompt-dialog">' +
                    '<div>' +
                    '<p><b>插入信息面板</b></p>' +
                    '<p>輸入標題</p>' +
                    '<p><input type="text" name="mes5" placeholder="標題"></input></p>' +
                    '<p>輸入內容</p>' +
                    '<p><textarea name="mes6" style="width: 100%; height: 100px"></textarea></p>' +
                    '<p><labe>選擇樣式</labe></p>' +
                    '<p><select id="co"><option value="bmes">藍色</option><option value="gmes">綠色</option><option value="ymes">黃色</option><option value="rmes">紅色</option><option value="pmes">紫色</option></select>' +
                    '</div>' +
                    '<form>' +
                    '<button type="button" class="btn btn-s primary" id="mes_ok">確定</button>' +//按鈕
                    '<button type="button" class="btn btn-s" id="mes_cancel">取消</button>' +//按鈕
                    '</form>' +
                    '</div>' +
                    '</div>');
                $('.wmd-prompt-dialog input').select();
            });
            $(document).on('click', '#wmd-acc-button', function () {//信息acc
                $('body').append(
                    '<div id="accPanel">' +//信息條
                    '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' +
                    '<div class="wmd-prompt-dialog">' +
                    '<div>' +
                    '<p><b>插入信息面板</b></p>' +
                    '<p>輸入標題</p>' +
                    '<p><input type="text" name="acc5" placeholder="標題"></input></p>' +
                    '<p>輸入內容</p>' +
                    '<p><textarea name="acc6" style="width: 100%; height: 100px"></textarea></p>' +
                    '<p><labe>選擇樣式</labe></p>' +
                    '<p><select id="co"><option value="bacc">藍色</option><option value="gacc">綠色</option><option value="yacc">黃色</option><option value="racc">紅色</option><option value="pacc">紫色</option></select></p>' +
                    '<p><labe>是否展開</labe></p>' +
                    '<p><select id="co1"><option value="guanacc">關閉</option><option value="zhanacc">展開</option></select></p>' +
                    '</div>' +
                    '<form>' +
                    '<button type="button" class="btn btn-s primary" id="acc_ok">確定</button>' +//按鈕
                    '<button type="button" class="btn btn-s" id="acc_cancel">取消</button>' +//按鈕
                    '</form>' +
                    '</div>' +
                    '</div>');
                $('.wmd-prompt-dialog input').select();
            });
            $(document).on('click', '#wmd-vid-button', function () {//視頻
                $('body').append(
                    '<div id="vidPanel">' +//信息條
                    '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' +
                    '<div class="wmd-prompt-dialog">' +
                    '<div>' +
                    '<p><b>插入視頻</b></p>' +
                    '<p style="color:red">支持Ogg、Mp4、WebM三種格式</p>' +
                    '<p>輸入直鏈</p>' +
                    '<p><input type="text" name="vid5" placeholder="/xxxx.mp4"></input></p>' +
                    '</div>' +
                    '<form>' +
                    '<button type="button" class="btn btn-s primary" id="vid_ok">確定</button>' +//按鈕
                    '<button type="button" class="btn btn-s" id="vid_cancel">取消</button>' +//按鈕
                    '</form>' +
                    '</div>' +
                    '</div>');
                $('.wmd-prompt-dialog input').select();
            });
            $(document).on('click', '#wmd-aud-button', function () {//音頻
                $('body').append(
                    '<div id="audPanel">' +//信息條
                    '<div class="wmd-prompt-background" style="position: fixed; top: 0px; z-index: 1000; opacity: 0.5; height: 100%; left: 0px; width: 100%;"></div>' +
                    '<div class="wmd-prompt-dialog">' +
                    '<div>' +
                    '<p><b>插入音頻</b></p>' +
                    '<p style="color:red">支持wav、mp3、ogg三種格式</p>' +
                    '<p>輸入直鏈</p>' +
                    '<p><input type="text" name="aud5" placeholder="/xxxx.mp3"></input></p>' +
                    '</div>' +
                    '<form>' +
                    '<button type="button" class="btn btn-s primary" id="aud_ok">確定</button>' +//按鈕
                    '<button type="button" class="btn btn-s" id="aud_cancel">取消</button>' +//按鈕
                    '</form>' +
                    '</div>' +
                    '</div>');
                $('.wmd-prompt-dialog input').select();
            });
            //執行取消
            $(document).on('click', '#tex_cancel', function () {//按鈕
                $('#texPanel').remove();//按鈕
                 $('#wmd-editarea textarea').focus();
            });
            $(document).on('click', '#fri_cancel', function () {//按鈕
                $('#friPanel').remove();//按鈕
                 $('#wmd-editarea textarea').focus();
            });
            $(document).on('click', '#button_cancel', function () {//按鈕
                $('#buttonPanel').remove();//按鈕
                 $('#wmd-editarea textarea').focus();
            });
            $(document).on('click', '#bar_cancel', function () {//按鈕
                $('#barPanel').remove();//按鈕
                 $('#wmd-editarea textarea').focus();
            });
            $(document).on('click', '#mes_cancel', function () {//按鈕
                $('#mesPanel').remove();//按鈕
                 $('#wmd-editarea textarea').focus();
            });
            $(document).on('click', '#vid_cancel', function () {//視頻
                $('#vidPanel').remove();//按鈕
                 $('#wmd-editarea textarea').focus();
            });
            $(document).on('click', '#aud_cancel', function () {//視頻
                $('#audPanel').remove();//按鈕
                 $('#wmd-editarea textarea').focus();
            });
            $(document).on('click', '#acc_cancel', function () {//視頻
                $('#accPanel').remove();//按鈕
                 $('#wmd-editarea textarea').focus();
            });
            $(document).on('click', '#pro_cancel', function () {//視頻
                $('#proPanel').remove();//按鈕
                 $('#wmd-editarea textarea').focus();
            });

            //執行確定
            $(document).on('click', '#button_ok', function () {//友鏈
                //內容
                var textContent = $('.wmd-prompt-dialog input[name="te"]').val();
                //顏色
                var obj_co = document.getElementById("co"); //定位id
                var index_co = obj_co.selectedIndex; // 選中索引
                var color = obj_co.options[index_co].value; // 選中值
                //URL
                var url = $('.wmd-prompt-dialog input[name="url"]').val();
                //輸出格式
                if (color == 'info') {
                    textContent = '[btnblue href="' + url + '" target="blank"]' + textContent + '[/btnblue]';
                }
                else if (color == 'success') {
                    textContent = '[btngreen href="' + url + '" target="blank"]' + textContent + '[/btngreen]';
                }
                else if (color == 'black') {
                    textContent = '[btnblack href="' + url + '" target="blank"]' + textContent + '[/btnblack]';
                }
                else if (color == 'warning') {
                    textContent = '[btnyellow href="' + url + '" target="blank"]' + textContent + '[/btnyellow]';
                }
                else if (color == 'danger') {
                    textContent = '[btnred href="' + url + '" target="blank"]' + textContent + '[/btnred]';
                }
                else if (color == 'download') {
                    textContent = '[download href="' + url + '" target="blank"]' + textContent + '[/download]';
                }
                myField = document.getElementById('text');
                inserContentToTextArea(myField, textContent, '#buttonPanel');//按鈕

            });

            $(document).on('click', '#tex_ok', function () {//按鈕

                var txwzsr = $('.wmd-prompt-dialog input[name="txwzsr"]').val();
                var obj_co = document.getElementById("wzlxxz"); //定位id
                var index_co = obj_co.selectedIndex; // 選中索引
                var color = obj_co.options[index_co].value; // 選中值
                
                //輸出格式
                if (color == 'dheimu') {
                    textContent = '[DarkBText]'+txwzsr+'[/DarkBText]'; 
                }
                else if (color == 'ggl') {
                    textContent = '[BlurText]'+txwzsr+'[/BlurText]'; }
                else if (color == 'xlch') {
                    textContent = '[RainBowText]'+txwzsr+'[/RainBowText]';}
                myField = document.getElementById('text');
                inserContentToTextArea(myField, textContent, '#texPanel');//按鈕

            });

            $(document).on('click', '#fri_ok', function () {//按鈕

                var zdmc = $('.wmd-prompt-dialog input[name="zdmc"]').val();
                var zdlj = $('.wmd-prompt-dialog input[name="zdlj"]').val();
                var txlj = $('.wmd-prompt-dialog input[name="txlj"]').val();
                var zdms = $('.wmd-prompt-dialog input[name="zdms"]').val();
                var obj_co = document.getElementById("ylkj"); //定位id
                var index_co = obj_co.selectedIndex; // 選中索引
                var color = obj_co.options[index_co].value; // 選中值
                
                //輸出格式
                if (color == 'bjzkj') {
                    textContent = '[link img="'+txlj+'" href="'+zdlj+'" title="'+zdms+'"]'+zdmc+'[/link]';
                }
                else if (color == 'jzkj') {
                    textContent = '[friends random="false"]\n[link img="'+txlj+'" href="'+zdlj+'" title="'+zdms+'"]'+zdmc+'[/link]\n\n[/friends]';
                }
                myField = document.getElementById('text');
                inserContentToTextArea(myField, textContent, '#friPanel');//按鈕

            });
            $(document).on('click', '#bar_ok', function () {//信息條
                //內容
                var textContent = $('.wmd-prompt-dialog textarea[name=bar6]').val();
                //顏色
                var obj_co = document.getElementById("co"); //定位id
                var index_co = obj_co.selectedIndex; // 選中索引
                var color = obj_co.options[index_co].value; // 選中值

                //輸出格式
                if (color == 'rbar') {
                    textContent = '[redbar]' + textContent + '[/redbar]';
                }
                else if (color == 'gbar') {
                    textContent = '[greenbar]' + textContent + '[/greenbar]';
                }
                else if (color == 'ybar') {
                    textContent = '[yellowbar]' + textContent + '[/yellowbar]';
                }
                else if (color == 'bbar') {
                    textContent = '[bluebar]' + textContent + '[/bluebar]';
                }
                else if (color == 'pbar') {
                    textContent = '[purplebar]' + textContent + '[/purplebar]';
                }

                myField = document.getElementById('text');
                inserContentToTextArea(myField, textContent, '#barPanel');//按鈕

            });
            $(document).on('click', '#pro_ok', function () {//進度條
                //內容
                var textContent = $('.wmd-prompt-dialog input[name=pro5]').val();
                //顏色
                var obj_co = document.getElementById("co"); //定位id
                var index_co = obj_co.selectedIndex; // 選中索引
                var color = obj_co.options[index_co].value; // 選中值

                //輸出格式
                if (color == 'rpro') {
                    textContent = '[redpro value="' + textContent + '"]PROGRESS[/redpro]';
                }
                else if (color == 'gpro') {
                    textContent = '[greenpro value="' + textContent + '"]PROGRESS[/greenpro]';
                }
                else if (color == 'ypro') {
                    textContent = '[yellowpro value="' + textContent + '"]PROGRESS[/yellowpro]';
                }
                else if (color == 'bpro') {
                    textContent = '[bluepro value="' + textContent + '"]PROGRESS[/bluepro]';
                }
                else if (color == 'ppro') {
                    textContent = '[purplepro value="' + textContent + '"]PROGRESS[/purplepro]';
                }

                myField = document.getElementById('text');
                inserContentToTextArea(myField, textContent, '#proPanel');//按鈕

            });
            $(document).on('click', '#mes_ok', function () {//信息面板
                //內容
                var textContent = $('.wmd-prompt-dialog textarea[name=mes6]').val();
                //顏色
                var obj_co = document.getElementById("co"); //定位id
                var index_co = obj_co.selectedIndex; // 選中索引
                var color = obj_co.options[index_co].value; // 選中值
                var tit = $('.wmd-prompt-dialog input[name="mes5"]').val();
                //輸出格式
                if (color == 'rmes') {
                    textContent = '[redinfo title="' + tit + '"]' + textContent + '[/redinfo]';
                }
                else if (color == 'gmes') {
                    textContent = '[greeninfo title="' + tit + '"]' + textContent + '[/greeninfo]';
                }
                else if (color == 'bmes') {
                    textContent = '[blueinfo title="' + tit + '"]' + textContent + '[/blueinfo]';
                }
                else if (color == 'ymes') {
                    textContent = '[yellowinfo title="' + tit + '"]' + textContent + '[/yellowinfo]';
                }
                else if (color == 'pmes') {
                    textContent = '[purpleinfo title="' + tit + '"]' + textContent + '[/purpleinfo]';
                }

                myField = document.getElementById('text');
                inserContentToTextArea(myField, textContent, '#mesPanel');//按鈕

            });
            $(document).on('click', '#acc_ok', function () {//信息acc
                //內容
                var textContent = $('.wmd-prompt-dialog textarea[name=acc6]').val();
                //顏色
                var obj_co = document.getElementById("co"); //定位id
                var index_co = obj_co.selectedIndex; // 選中索引
                var color = obj_co.options[index_co].value; // 選中值
                //是否展開
                var obj_co1 = document.getElementById("co1"); //定位id
                var index_co1 = obj_co1.selectedIndex; // 選中索引
                var open = obj_co1.options[index_co1].value; // 選中值
                var tit = $('.wmd-prompt-dialog input[name="acc5"]').val();
                //輸出格式
                if (open == 'guanacc') {
                    if (color == 'racc') {
                        textContent = '[redacc open="" title="' + tit + '"]' + textContent + '[/redacc]';
                    }
                    else if (color == 'gacc') {
                        textContent = '[greenacc open="" title="' + tit + '"]' + textContent + '[/greenacc]';
                    }
                    else if (color == 'bacc') {
                        textContent = '[blueacc open="" title="' + tit + '"]' + textContent + '[/blueacc]';
                    }
                    else if (color == 'yacc') {
                        textContent = '[yellowacc open="" title="' + tit + '"]' + textContent + '[/yellowacc]';
                    }
                    else if (color == 'pacc') {
                        textContent = '[purpleacc open="" title="' + tit + '"]' + textContent + '[/purpleacc]';
                    }
                }
                else if (open == 'zhanacc') {
                    if (color == 'racc') {
                        textContent = '[redacc open="open" title="' + tit + '"]' + textContent + '[/redacc]';
                    }
                    else if (color == 'gacc') {
                        textContent = '[greenacc open="open" title="' + tit + '"]' + textContent + '[/greenacc]';
                    }
                    else if (color == 'bacc') {
                        textContent = '[blueacc open="open" title="' + tit + '"]' + textContent + '[/blueacc]';
                    }
                    else if (color == 'yacc') {
                        textContent = '[yellowacc open="open" title="' + tit + '"]' + textContent + '[/yellowacc]';
                    }
                    else if (color == 'pacc') {
                        textContent = '[purpleacc open="open" title="' + tit + '"]' + textContent + '[/purpleacc]';
                    }
                }


                myField = document.getElementById('text');
                inserContentToTextArea(myField, textContent, '#accPanel');//按鈕

            });
            $(document).on('click', '#vid_ok', function () {//視頻


                var tit5 = $('.wmd-prompt-dialog input[name="vid5"]').val();
                //輸出格式

                textContent = '[video src="' + tit5 + '" preload="metadata" width="100%" height="auto" ]視頻[/video]';


                myField = document.getElementById('text');
                inserContentToTextArea(myField, textContent, '#vidPanel');//按鈕

            });
            $(document).on('click', '#aud_ok', function () {//音頻


                var tit51 = $('.wmd-prompt-dialog input[name="aud5"]').val();
                //輸出格式

                textContent = '[audio src="' + tit51 + '" preload="metadata" autoplay="autoplay" loop="loop"]音頻[/audio]';


                myField = document.getElementById('text');
                inserContentToTextArea(myField, textContent, '#audPanel');//按鈕

            });

            $(document)
                .on("click", "#wmd-photoset-button", function () {
                    myField = document.getElementById("text"), insertAtCursor(myField, '\n[tabs]\n[item title="標題一"]這裡替換內容[/item]\n[item title="標題二"]這裡替換內容[/item]\n[/tabs]\n')
                });
            $(document)
                .on("click", "#wmd-pic-button", function () {
                    myField = document.getElementById("text"), insertAtCursor(myField, '\n[photos]\n這裡替換您的圖片鏈接（markdown格式）\n[/photos]')
                });
        }
    });
};
//依賴
function inserContentToTextArea(myField, textContent, modelId) {
    $(modelId).remove();
    if (document.selection) {//IE瀏覽器
        myField.focus();
        var sel = document.selection.createRange();
        sel.text = textContent;
        myField.focus();
    } else if (myField.selectionStart || myField.selectionStart == '0') {
        //FireFox、Chrome
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        var cursorPos = startPos;
        myField.value = myField.value.substring(0, startPos)
            + textContent
            + myField.value.substring(endPos, myField.value.length);
        cursorPos += textContent.length;

        myField.selectionStart = cursorPos;
        myField.selectionEnd = cursorPos;
        myField.focus();
    }
    else {//其他環境
        myField.value += textContent;
        myField.focus();
    }
}