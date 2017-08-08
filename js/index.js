/**
 * Created by hama on 2017/7/31.
 */
$(function() {
    /*顶部的鼠标移入颜色变化*/
    //1.发生的目标元素 a
    //2.什么事件 mouseover,mouseout
    //3.改变链接颜色
    $('.top a').mouseover(function (event) {
        $(this).css('color', '#fff');
    }).mouseout(function () {
        $(this).css('color', '#a4b094');
    });
    $('.shopCar').mouseover(function () {
        $(this).css({color: '#FF6700', background: '#fff'});
        $('.goods').stop(true, false).slideDown();
    }).mouseout(function () {
        $(this).css({color: '#a4b094', background: '#424242'});
        $('.goods').stop(true, false).slideUp();
    });
    var flag = true;
    /*表单的输入框移入效果*/
    $('.ser1').mouseover(function () {
        if (flag) {
            $('.ser1 input').css('border', '1px solid #000');
            $('.ser2').css('border', '1px solid #000').css('borderLeft', 'none');
        }
    }).mouseout(function () {
        if (flag) {
            $('.ser1 input').css('border', '1px solid #ccc');
            $('.ser2').css('border', '1px solid #ccc').css('borderLeft', 'none');
        }
    });
    /*热门搜索的移入效果*/
    $('.hot a').mouseover(function () {
        $(this).css({
            'color': '#fff',
            'background': 'orange'
        })
    }).mouseout(function () {
        $(this).css({
            'color': '#757575',
            'background': '#eee'
        })
    });
    /*按钮移入后的效果*/
    $('.ser2').mouseover(function () {
        if (flag) {
            $('.ser1 input').css({
                'border': '1px solid #000',
                'border-right': 'none'
            });
            $(this).css({
                'background': 'orange',
                'color': '#fff',
                'border': 'none'
            })
        }
    }).mouseout(function () {
        if (flag) {
            $('.ser1 input').css('border', '1px solid #ccc');
            $(this).css({
                'background': '#fff',
                'color': '#000',
                'border': '1px solid #ccc',
                'border-left': 'none'
            })
        }
    });
    /*表单获取焦点的时候*/
    $('.ser1 input').focus(function () {
        flag = false;
        $(this).css('border-color', 'orange');
        $('.ser2').css('border-color', 'orange');
        $('.keywordsList').show().css('border-color', 'orange');
    }).blur(function () {
        flag = true;
        $(this).css('border-color', '#ccc');
        $('.ser2').css('border-color', '#ccc');
        $('.keywordsList').hide().css('border-color', '#ccc');
    });
    /*导航效果开始*/
    $('.nav li').mouseover(function () {
        $(this).children('a').css('color', '#FF6700');
        if ($(this).index() < 7) {
            $('.select').removeClass('hide');
            $('.select').slideDown().finish();
            $('.select').find('ul').addClass('hide');
            $('.select').find('ul').eq($(this).index()).removeClass('hide');
        }
    }).mouseout(function () {
        $(this).children('a').css('color', '#000');
    });
    $('.nav').mouseout(function () {
        $('.select').slideUp();
    });
    $('.select').find('ul').mouseover(function () {
        $('.select').slideDown().finish() //停止当前动画和动画队列
    }).mouseout(function () {
        $('.select').slideUp()
    });
    /*轮播图的效果*/
    var num = 0;
    var timer;
    timer = setInterval(autoplay, 5000);
    $('.round li').mouseover(function () {
        clearInterval(timer);
        num = $(this).index();
        displayImg();
    });
    $('.banner').mouseover(function () {
        clearInterval(timer);
    }).mouseout(function () {
        timer = setInterval(autoplay, 5000)
    });
    $('.direcL').click(function () {
        //上一张
        clearInterval(timer);
        num = num - 1;
        if (num < 0) {
            num = 4;
        }
        displayImg();
    });
    $('.direcR').click(function () {
        //下一张
        clearInterval(timer);
        num = num + 1;
        if (num > 4) {
            num = 0;
        }
        displayImg();
    });
    function displayImg() {
        $('.round li').eq(num).css('background', 'orange').siblings().css({
            'background': "#000",
            'opacity': '0.5'
        });
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
    }

    function autoplay() {
        num++;
        if (num > 4) {
            num = 0;
        }
        displayImg();
    }

    /*隐藏的导航*/
    $('.navL li').mouseover(function () {
        $(this).css('background', '#ff6700');
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide');
        $('.ulHide').eq($(this).index()).removeClass('hide');
    }).mouseout(function () {
        $(this).css('background', 'transparent');
    });
    /*鼠标移出二级导航的范围后，让它消失*/
    $('.navL').mouseout(function () {
        $('.navHide').addClass('hide');
    });
    /*用户移入三级导航的时候，也要让它显示*/
    $('.ulHide').mouseover(function () {
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background', '#ff6700');
    }).mouseout(function () {
        $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background', 'transparent');
    });
    //轮播图下列表鼠标经过
    $('.main .navB .miniLink li a').mousemove(function () {
        $(this).css('color', 'white')
    }).mouseout(function () {
        $(this).css('color', '#cfcdcb')
    });

//明星单品
    //左翻页
    $('.prev').mousemove(function () {
        //判断图片的的偏移量是否不等于o，如果不等于就改变鼠标指针样式和指示标识颜色
        if ($('.scroll').css('left') != '0px') {
            $(this).css({
                color: '#ff6700',
                cursor: 'pointer'
            })
        }
    }).click(function () {
        if ($('.scroll').css('left') != '0px') {
            $('.scroll').css('left', '0px');
        }
    }).mouseout(function () {
        //判断图片的的偏移量是否不等于opx，用来调整两个箭头颜色深浅进行对比
        if ($('.scroll').css('left') != '0px') {
            $(this).css('color', '#b0b4bc')
        } else {
            $(this).css('color', '#dfdfe0')
        }
    });
    //右翻页
    $('.next').mousemove(function () {
        //判断图片的的偏移量是否不等于o，如果不等于就改变鼠标指针样式和指示标识颜色
        if ($('.scroll').css('left') == '0px') {
            $(this).css({
                color: '#ff6700',
                cursor: 'pointer'
            })
        }
    }).click(function () {
        if ($('.scroll').css('left') == '0px') {
            $('.scroll').css('left', '-1226px');
        }
    }).mouseout(function () {
        //判断图片的的偏移量是否不等于opx，用来调整两个箭头颜色深浅进行对比
        if ($('.scroll').css('left') == '0px') {
            $(this).css('color', '#b0b4bc')
        } else {
            $(this).css('color', '#dfdfe0')
        }
    });
//自动轮播
    var clockLR;
    //手动轮播时定时器结束，手动结束自动开始
    $('.p').mouseover(function () {
        clearInterval(clockLR);
    }).mouseout(function () {
        clockLR = setInterval(Dingshi, 5000);
    });
    //自动
    clockLR = setInterval(Dingshi, 5000);
    //设置自动轮播时的判断，图片偏移量
    function Dingshi() {
        if ($('.scroll').css('left') != '0px') {
            $('.scroll').css('left', '0px');
        } else if ($('.scroll').css('left') == '0px') {
            $('.scroll').css('left', '-1226px');
        }
    }

//    产品列表
    //智能硬件查看更多鼠标样式
    $('.toAll').mouseover(function () {
        // console.log($(this));
        $(this).find('a').css('color', '#FF6700');
        $(this).find('i').css('color', '#FF6700');
    }).mouseout(function () {
        $(this).find('a').css('color', '#424242');
        $(this).find('i').css('color', '#B0B0B0');
    });
    //定义鼠标移入移出的阴影效果
    //移入
    function mouseover(left) {
        $(left).css({
            marginTop: '12px',
            boxShadow: '0 0 28px #aaa'
        })
    }

    //移出
    function mouseout(left) {
        $(left).css({
            marginTop: '14px',
            boxShadow: 'none'
        })
    }

    //智能硬件、为你推荐特效
    $('.product1 li').add($('.productYJ li')).add($('.forYouList li')).mouseover(function () {
        mouseover(this);
    }).mouseout(function () {
        mouseout(this);
    });
    //搭配、配件、周边、左侧阴影特效
    $('.productL li img').mousemove(function () {
        $(this).css({marginTop: '-2px', boxShadow: '0 0 28px #aaa'});
    }).mouseout(function () {
        $(this).css({marginTop: '0', boxShadow: 'none'});
    });
    //搭配、配件、周边、右侧特效和热评、视频特效
    $('.productR2 .ProLi>li').add($('.productR3 .ProLi>li'))
        .add($('.productR4 .ProLi>li')).add($('.twoRow li'))
        .add($('.hotList li')).add($('.videoList li')).mouseover(function () {
        //判断一下防止选中最后一个
        if ($(this).index() < 7) {
            mouseover(this);
        }
    }).mouseout(function () {
        if ($(this).index() < 7) {
            mouseout(this);
        }
    });
//Tab切换和导航字体颜色
    function mouseover2(right) {
        $(right).css({
            'color': '#ff6700',
            'border-bottom': '2px solid #ff6700'
        }).siblings().css({//隐藏其他同级标签的样式
            'color': '#000',
            'border-bottom': 'none'
        })
    }

    $('.listn li').mouseover(function () {
        mouseover2(this);//不设置鼠标离开样式，鼠标离开那个标签，既保留哪个标签的样式
        $(this).parents('div').children('.productR').children('.ProLi').eq($(this).index())
            .removeClass('hide').siblings('.ProLi').addClass('hide');//寻找.listn li的父元素div
        // 下的标签带有.productR的子标签，下的带有.ProLi的子标签，给他删除一个hide的class明，同时给其他
        // 带有ProLi的同级标签添加一个class名，.eq(this).index()保证切换到对应的样式
    });
    // 评价特效
    $('.ProLi>li').mouseover(function () {
        $(this).children('.slideDiv').stop(true, false).slideDown();
    }).mouseout(function () {
        $(this).children('.slideDiv').stop(true, false).slideUp();
    });

//为你推荐
//    箭头样式
    function right(a) {
        $(a).css({
            color: '#ccc',
            border: '1px solid #ccc',
            cursor: 'default',
            borderLeft: '1px solid #000'
        });
    }

    function left1(b) {
        $(b).css({
            color: '#000',
            border: '1px solid #000',
            cursor: 'pointer'
        })
    }

    //tab切换，并判断切换到那种程度改变箭头样式，提醒浏览者
    var a = 0;
    var step = 0;
    $('.forYou .next').click(function () {
        if (a < 3) {
            a++;
            step = (a * 1226) + 'px';
            $('.forYou .forYouList').css('left', '-' + step);
        }
        if (a == 3) {
            right($('.forYou .next'));
            left1($('.forYou .prev'));

        }
    });
    $('.forYou .prev').click(function () {
        if (a > 0) {
            a--;
            step = (a * 1226) + 'px';
            $('.forYou .forYouList').css('left', '-' + step);
        }
        if (a == 0) {
            left1($('.forYou .next'));
            right($('.forYou .prev'));
        }
    });
//    视频
    $('.video .videoList li').mouseover(function () {
        $('.video .videoList .iconfont').eq($(this).index()).css('color', 'orange');
    }).mouseout(function () {
        $('.video .videoList .iconfont').css('color', '#fff');
    });
    //    内容
    var arr = [
        Num1 = 0,
        Num2 = 0,
        Num3 = 0,
        Num4 = 0
    ];
    for (var i = 1; i < 5; i++) {
        (function (i) {
            //设置轮播箭头显示和隐藏，使用i循环费别设置四个轮播
            $('.box' + i).mouseover(function () {
                $('.box' + i + ' .prev').css('display', 'block');
                $('.box' + i + ' .next').css('display', 'block');
            }).mouseout(function () {
                $('.box' + i + ' .next').css('display', 'none');
                $('.box' + i + ' .prev').css('display', 'none');
            });
            //实现手动轮播，并改变对应小圆点 使用i循环使四个轮播互不影响
            //小圆点
            $('.box' + i + ' .boxList p').click(function () {
                $('.box' + i + ' ul li').eq($(this).index()).removeClass('hide').siblings().addClass('hide');
                $('.box' + i + ' .boxList p').eq($(this).index()).addClass('boxlistActive').siblings().removeClass('boxlistActive');
            });
            //下一页
            $('.box' + i + ' .next').click(function () {
                if (arr[i - 1] < 3) {
                    $('.box' + i + ' ul li').eq(++arr[i - 1]).removeClass('hide').siblings().addClass('hide');
                    $('.box' + i + ' .boxList p').eq(arr[i - 1]).addClass('boxlistActive').siblings().removeClass('boxlistActive');
                }
            });
            //上一页
            $('.box' + i + ' .prev').click(function () {
                if (arr[i - 1] > 0) {
                    $('.box' + i + ' ul li').eq(--arr[i - 1]).removeClass('hide').siblings().addClass('hide');
                    $('.box' + i + ' .boxList p').eq(arr[i - 1]).addClass('boxlistActive').siblings().removeClass('boxlistActive');
                }
            });
        })(i);
    }



































































});

