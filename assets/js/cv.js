'use strict'
/* mở thêm thông tin giáo dục */
const showAddEdus = document.querySelector('.js-add-edu')
const hideAddEdus = document.querySelector('.js-close-input-edu')
showAddEdus.addEventListener("click", showAddEdu)
hideAddEdus.addEventListener("click", hideAddEdu)
function showAddEdu() {
    modalEdu.classList.add('js-open')
}
function hideAddEdu() {
    modalEdu.classList.remove('js-open')

}
const modalEdu= document.querySelector('.modal-edu')
/* mở thêm thông tin kinh nghiệm làm việc */

const showAddExps = document.querySelector('.js-add-exp')
const hideAddExps = document.querySelector('.js-close-input-exp')
showAddExps.addEventListener("click", showAddExp)
hideAddExps.addEventListener("click", hideAddExp)
function showAddExp() {
    modalExp.classList.add('js-open')
}
function hideAddExp() {
    modalExp.classList.remove('js-open')

}
const modalExp= document.querySelector('.modal-exp')

/* mở thêm thông tin hoạt động  */
const showAddActs = document.querySelector('.js-add-act')
const hideAddActs = document.querySelector('.js-close-input-act')
showAddActs.addEventListener("click", showAddAct)
hideAddActs.addEventListener("click", hideAddAct)
function showAddAct() {
    modalAct.classList.add('js-open')
}
function hideAddAct() {
    modalAct.classList.remove('js-open')

}
const modalAct= document.querySelector('.modal-act')
/* mở thêm thông tin giải thưởng  */
const showAddGts = document.querySelector('.js-add-gt')
const hideAddGts = document.querySelector('.js-close-input-gt')
showAddGts.addEventListener("click", showAddGt)
hideAddGts.addEventListener("click", hideAddGt)
function showAddGt() {
    modalGt.classList.add('js-open')
}
function hideAddGt() {
    modalGt.classList.remove('js-open')

}
const modalGt= document.querySelector('.modal-gt')
/* mở thêm thông tin chứng chỉ  */
const showAddCertificates = document.querySelector('.js-add-certificate')
const hideAddCertificates = document.querySelector('.js-close-input-certificate')
showAddCertificates.addEventListener("click", showAddCertificate)
hideAddCertificates.addEventListener("click", hideAddCertificate)
function showAddCertificate() {
    modalCertificate.classList.add('js-open')
}
function hideAddCertificate() {
    modalCertificate.classList.remove('js-open')

}
const modalCertificate= document.querySelector('.modal-certificate')
/* mở thêm thông tin sở thích */
const showAddsts = document.querySelector('.js-add-st')
const hideAddsts = document.querySelector('.js-close-input-st')
showAddsts.addEventListener("click", showAddst)
hideAddsts.addEventListener("click", hideAddst)
function showAddst() {
    modalst.classList.add('js-open')
}
function hideAddst() {
    modalst.classList.remove('js-open')

}
const modalst= document.querySelector('.modal-st')
/* mở thêm thông tin các kỹ năng */
const showAddskills = document.querySelector('.js-add-skill')
const hideAddskills = document.querySelector('.js-close-input-skill')
showAddskills.addEventListener("click", showAddskill)
hideAddskills.addEventListener("click", hideAddskill)
function showAddskill() {
    modalskill.classList.add('js-open')
}
function hideAddskill() {
    modalskill.classList.remove('js-open')

}
const modalskill= document.querySelector('.modal-skill')
/* mở thêm thông tin châm ngôn , mục tiêu */
// const showAddcns = document.querySelector('.js-add-cn')
// const hideAddcns = document.querySelector('.js-close-input-cn')
// showAddcns.addEventListener("click", showAddcn)
// hideAddcns.addEventListener("click", hideAddcn)
// function showAddcn() {
//     modalcn.classList.add('js-open')
// }
// function hideAddcn() {
//     modalcn.classList.remove('js-open')

// }
const modalcn= document.querySelector('.modal-cn')
/* mở thêm thông tin them */
const showAddthems = document.querySelector('.js-add-them')
const hideAddthems = document.querySelector('.js-close-input-them')
showAddthems.addEventListener("click", showAddthem)
hideAddthems.addEventListener("click", hideAddthem)
function showAddthem() {
    modalthem.classList.add('js-open')
}
function hideAddthem() {
    modalthem.classList.remove('js-open')

}
const modalthem= document.querySelector('.modal-them')
// nút thêm bằng nút xóa ??
// const hideAddEdus2 = document.querySelector('.add-edu')
// hideAddEdus2.addEventListener("click",hideAddEdu)

// const hideAddExps2 = document.querySelector('.add-exp')
// hideAddExps2.addEventListener("click",hideAddExp)

// const hideAddActs2 = document.querySelector('.add-act')
// hideAddActs2.addEventListener("click",hideAddAct)

// const hideAddGts2 = document.querySelector('.add-gt')
// hideAddGts2.addEventListener("click",hideAddGt)

// const hideAddCertificates2 = document.querySelector('.add-certificate')
// hideAddCertificates2.addEventListener("click",hideAddCertificate)

// const hideAddSts2 = document.querySelector('.add-st')
// hideAddSts2.addEventListener("click",hideAddst)

// const hideAddSkills2 = document.querySelector('.add-skill')
// hideAddSkills2.addEventListener("click",hideAddskill)

// const hideAddCns2 = document.querySelector('.add-cn')
// hideAddCns2.addEventListener("click",hideAddcn)

const hideAddThems2 = document.querySelector('.add-them')
hideAddThems2.addEventListener("click",hideAddthem)


const reload = document.querySelector('.form-reset-button')
reload.addEventListener("click",reloadpage)

function reloadpage(){
    location.reload();
}




































// Phần code JS của Mai Duy
const openCv = document.querySelector('.js-review-cv')
const modalClose = document.querySelector('.js-close')
const modal = document.querySelector('.cv-js-modal')
const modalPages = document.querySelectorAll('.cv-js-page')
const mainColors = document.querySelectorAll('.cv-main-color')
const barColors = document.querySelectorAll('.cv-bar')
const borderColors = document.querySelector('.cv-infor-name')
const maximBackground = document.querySelector('.cv-infor-maxim-wrapper')
const iconBackgrounds = document.querySelectorAll('.cv-icon')
const borderBtnBlue = document.querySelector('.btn-blue')
const borderBtnPink = document.querySelector('.btn-pink')
const borderBtnGreen = document.querySelector('.btn-green')
const borderBtns = document.querySelectorAll('.selection-color-btn')

const changePink = document.querySelector('.js-color-pink')
const changeBlue = document.querySelector('.js-color-blue')
const changeGreen = document.querySelector('.js-color-green')
// nghe hành vi click vào button close
modalClose.addEventListener('click', closeCv)
// nghe hành vi click vào button xem CV
openCv.addEventListener('click', showReviewCv)
// nghe hành vi click vào bên ngoài
modal.addEventListener('click', closeCv)
// nghe hanh vi click button changePink
changePink.addEventListener('click', changeColorPink)
changeBlue.addEventListener('click', changeColorBlue)
changeGreen.addEventListener('click', changeColorGreen)
function showReviewCv() {
    modal.classList.add('open')
}
function closeCv() {
    modal.classList.remove('open')
}
function changeColorPink() {
    for(const mainColor of mainColors)
    {
        mainColor.style.color = '#f9466d'
    }
    for(const barColor of barColors)
    {
         barColor.style.backgroundImage = 'url(./assets/image/pink.png)'
    }
    borderColors.style.borderTop = '1px #f9466d solid'
    borderColors.style.borderBottom = '1px #f9466d solid'
    maximBackground.style.backgroundColor = 'rgba(249, 70, 109, 0.2)'
    for(const iconBackground of iconBackgrounds)
    {
        iconBackground.style.backgroundColor = '#f9466d'
    }
    borderBtnPink.style.border = '2px #000 solid'
    removeBorder(borderBtnBlue)
    removeBorder(borderBtnGreen)
}
function changeColorBlue() {
   for(const mainColor of mainColors)
   {
       mainColor.style.color = '#87b2de'
   }
   for(const barColor of barColors)
   {
        barColor.style.backgroundImage = 'url(./assets/image/blue.png)'
   }
    borderColors.style.borderTop = '1px #87b2de solid'
    borderColors.style.borderBottom = '1px #87b2de solid'
    maximBackground.style.backgroundColor = 'rgba(135, 178, 222, 0.2)'
    for(const iconBackground of iconBackgrounds)
    {
        iconBackground.style.backgroundColor = '#87b2de'
    }
    borderBtnBlue.style.border = '2px #000 solid'
    removeBorder(borderBtnGreen)
    removeBorder(borderBtnPink)
}
function changeColorGreen() {
    for(const mainColor of mainColors)
    {
        mainColor.style.color = '#0c9c3a'
    }
    for(const barColor of barColors)
    {
         barColor.style.backgroundImage = 'url(./assets/image/green.jpg)'
    }
    borderColors.style.borderTop = '1px #0c9c3a solid'
    borderColors.style.borderBottom = '1px #0c9c3a solid'
    maximBackground.style.backgroundColor = 'rgba(11, 155, 57, 0.2)'
    for(const iconBackground of iconBackgrounds)
    {
        iconBackground.style.backgroundColor = '#0c9c3a'
    }
    borderBtnGreen.style.border = '2px #000 solid'
    removeBorder(borderBtnBlue)
    removeBorder(borderBtnPink)
}
function removeBorder(btn) {
    btn.style.border = 'none'
}
for(const modalPage of modalPages) {
    modalPage.addEventListener('click', function (event) {
        event.stopPropagation()
    })
}

// Phần dowload CV

$('#download').click(CreatePDFfromHTML)
function CreatePDFfromHTML() {
    var HTML_Width = $("#cv").width();
    var HTML_Height = $("#cv").height();
    var PDF_Width = HTML_Width;
    var PDF_Height = (PDF_Width * 1.5);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas($("#cv")[0]).then(function (canvas) {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', 0, 0, canvas_image_width, canvas_image_height);
        for (var i = 1; i <= totalPDFPages; i++) { 
            pdf.addPage(PDF_Width, PDF_Height);
            pdf.addImage(imgData, 'JPG', 0, -(PDF_Height*i),canvas_image_width,canvas_image_height);
        }
        pdf.save("YourCV.pdf");
    });
}
// Phần thông tin cá nhân
function myFunction(idInput,idCv)
{
    var input = document.getElementById(idInput);
    var span = document.getElementById(idCv);
    span.innerHTML = input.value;
}
// Phần ngày tháng năm sinh
const birthInput = document.getElementById("sinhnhat");
const birthElement = document.getElementById("cv-birthday");
birthInput.addEventListener("input", (event) => {
    birthElement.textContent = new Date(event.target.value).toLocaleDateString("vi-VN");
})
// Phần năm tháng bắt đầu kết thúc
$.date = function(dateObject) {
    var d = new Date(dateObject);
    var month = d.getMonth()+1;
    var year = d.getFullYear();
    var date = month + "/" + year;
    return date;
};
// thêm thông tin edu////

$('#form-add-edu').submit((event)=>{
    event.preventDefault();
    var getId=makeid()
    $('#form-select-edu').append('<div class="sub-add-edu '+getId+'"> <h6 class="sub-heading-add">'+$('#input-edu__school').val()+'</h6> <P class="sub-p-add">'+$('#input-edu__major').val()+'</P> <button class="sub-add-edu-dele" id="btn-'+getId+'" type="button"><i class="ti-close"></i></button> </div>')
    $('#edu').append('<li class="cv-job-infor-row '+getId+'"> <div class="cv-job-title-wrapper cv-inline"> <div class="cv-job-title"> <i class="ti-angle-double-right"></i> <span class="cv-title-secondary">'+$('#input-edu__school').val()+'</span> </div> <div class="cv-job-time"> <span class="cv-job-start">'+$.date($('#input-edu__start').val())+'</span> <span>-</span> <span class="cv-job-end">'+$.date($('#input-edu__end').val())+'</span> </div> </div> <div class="cv-job-content-wrapper"> <div class="cv-job-major-wrapper"> <span class="cv-job-major">'+$('#input-edu__major').val()+'</span> </div> <div class="cv-job-infor-wrapper"> <span class="cv-job-infor cv-skill">'+$('#input-edu__achievement').val()+'</span> </div> </div> </li>')
    
    $('#btn-'+getId).click(()=>{
        $('.'+getId).remove()
    })
    $('div').removeClass('js-open')
})
// thêm thông tin kinh nghiệm////
$('#form-add-exp').submit((event)=>{
    event.preventDefault();
    var getId=makeid()
    $('#form-select-exp').append('<div class="sub-add-exp '+getId+'"> <h6 class="sub-heading-add">'+$('#input-exp__company').val()+'</h6> <P class="sub-p-add">'+$('#input-exp__position').val()+'</P> <button class="sub-add-exp-dele" id="btn-'+getId+'"  type="button"><i class="ti-close"></i></button> </div>')
    $('#exp').append('<li class="cv-job-infor-row '+getId+'"> <div class="cv-job-title-wrapper cv-inline"> <div class="cv-job-title"> <i class="ti-angle-double-right"></i> <span class="cv-title-secondary">'+$('#input-exp__company').val()+'</span> </div> <div class="cv-job-time"> <span class="cv-job-start">'+$.date($('#input-exp__start').val())+'</span> <span>-</span> <span class="cv-job-end">'+$.date($('#input-exp__end').val())+'</span> </div> </div> <div class="cv-job-content-wrapper"> <div class="cv-job-major-wrapper"> <span class="cv-job-major">'+$('#input-exp__position').val()+'</span> </div> <div class="cv-job-infor-wrapper"> <span>-</span> <span class="cv-job-infor cv-skill">'+$('#input-exp__description').val()+'</span> </div> </div> </li>')
    $('#btn-'+getId).click(()=>{
        $('.'+getId).remove()
    })
    $('div').removeClass('js-open')

})
// thêm thông tin hoạt động////
$('#form-add-act').submit((event)=>{
    event.preventDefault();
    var getId=makeid()
    $('#form-select-act').append('<div class="sub-add-act '+getId+'"> <h6 class="sub-heading-add">'+$('#input-act__name').val()+'</h6> <P class="sub-p-add">'+$('#input-act__group').val()+'</P> <button class="sub-add-act-dele" id="btn-'+getId+'"  type="button"><i class="ti-close"></i></button> </div>')
    $('#act').append('<li class="cv-job-infor-row '+getId+'"> <div class="cv-job-title-wrapper cv-inline"> <div class="cv-job-title"> <i class="ti-angle-double-right"></i> <span class="cv-title-secondary">'+$('#input-act__name').val()+'</span> </div> <div class="cv-job-time"> <span class="cv-job-start">'+$.date($('#input-act__start').val())+'</span> <span>-</span> <span class="cv-job-end">'+$.date($('#input-act__end').val())+'</span> </div> </div> <div class="cv-job-content-wrapper"> <div class="cv-job-major-wrapper"> <span class="cv-job-major">'+$('#input-act__group').val()+'</span> </div> <div class="cv-job-infor-wrapper"> <span>-</span> <span class="cv-job-infor cv-skill">'+$('#input-act__description').val()+'</span> </div> </div> </li>')
    $('#btn-'+getId).click(()=>{
        $('.'+getId).remove()
    })
    $('div').removeClass('js-open')
})
// thêm thông tin giải thưởng////
$('#form-add-gt').submit((event)=>{
    event.preventDefault();
    var getId=makeid()
    $('#form-select-gt').append('<div class="sub-add-gt '+getId+'"> <h6 class="sub-heading-add">'+$('#input-gt__date').val()+'</h6> <P class="sub-p-add">'+$('#input-gt__name').val()+'</P> <button class="sub-add-gt-dele"  id="btn-'+getId+'" type="button"><i class="ti-close"></i></button> </div>')
    $('#gt').append('<li class="cv-job-infor-row '+getId+'"> <div class="cv-job-title-wrapper cv-inline"> <div class="cv-job-title"> <i class="ti-angle-double-right"></i> <span class="cv-title-secondary">'+$('#input-gt__year').val()+'</span> </div> </div> <div class="cv-job-content-wrapper"> <div class="cv-job-infor-wrapper"> <span>-</span> <span class="cv-job-infor cv-skill">'+$('#input-gt__name').val()+'</span> </div> </div> </li>')
    $('#btn-'+getId).click(()=>{
        $('.'+getId).remove()
    })
    $('div').removeClass('js-open')
})
// thêm thông tin chứng chỉ////
$('#form-add-certificate').submit((event)=>{
    event.preventDefault();
    var getId=makeid()
    $('#form-select-certificate').append('<div class="sub-add-gt '+getId+'"> <h6 class="sub-heading-add">'+$('#input-certificate__date').val()+'</h6> <P class="sub-p-add">'+$('#input-certificate__name').val()+'</P> <button class="sub-add-gt-dele"  id="btn-'+getId+'" type="button"><i class="ti-close"></i></button> </div>')
    $('#certificate').append('<li class="cv-job-infor-row '+getId+'"> <div class="cv-job-title-wrapper cv-inline"> <div class="cv-job-title"> <i class="ti-angle-double-right"></i> <span class="cv-title-secondary">'+$('#input-certificate__year').val()+'</span> </div> </div> <div class="cv-job-content-wrapper"> <div class="cv-job-infor-wrapper"> <span>-</span> <span class="cv-job-infor cv-skill">'+$('#input-certificate__name').val()+'</span> </div> </div> </li>')
    $('#btn-'+getId).click(()=>{
        $('.'+getId).remove()
    })
    $('div').removeClass('js-open')
})
// thêm thông tin sở thích////
$('#form-add-st').submit((event)=>{
    event.preventDefault();
    var getId=makeid()
    $('#form-select-st').append('<div class="sub-add-st '+getId+'"> <h6 class="sub-heading-add">'+$('#input-st__name').val()+'</h6> <button class="sub-add-st-dele" id="btn-'+getId+'"  type="button"><i class="ti-close"></i></button> </div>')
    $('#st').append('<li class="cv-job-infor-row '+getId+'"> <div class="cv-job-title-wrapper cv-inline"> <div class="cv-job-title"> <i class="ti-angle-double-right"></i> <span class="cv-title-secondary">'+$('#input-st__name').val()+'</span> </div> </div> <div class="cv-job-content-wrapper"> <div class="cv-job-infor-wrapper"> <span>-</span> <span class="cv-job-infor cv-skill">'+$('#input-st__description').val()+'</span> </div> </div> </li>')
    $('#btn-'+getId).click(()=>{
        $('.'+getId).remove()
    })
    $('div').removeClass('js-open')
})
// thêm thông tin kỹ năng////
$('#form-add-skill').submit((event)=>{
    event.preventDefault();
    var getId=makeid()
    $('#form-select-skill').append('<div class="sub-add-skill '+getId+'"> <h6 class="sub-heading-add">'+$('#input-skill__name').val()+'</h6> <button class="sub-add-skill-dele" id="btn-'+getId+'" type="button"><i class="ti-close"></i></button> </div>')
    $('#skill').append('<li class="cv-job-infor-row '+getId+'"> <div class="cv-job-title-wrapper cv-inline"> <div class="cv-job-title"> <i class="ti-angle-double-right"></i> <span class="cv-title-secondary">'+$('#input-skill__name').val()+'</span> </div> </div> <div class="cv-job-content-wrapper"> <div class="cv-job-infor-wrapper"> <span>-</span> <span class="cv-job-infor cv-skill">'+$('#input-skill__description').val()+'</span> </div> </div> </li>')
    $('#btn-'+getId).click(()=>{
        $('.'+getId).remove()
    })
    $('div').removeClass('js-open')
})
// thêm thông tin khác
$('#form-add-them').submit((event)=>{
    event.preventDefault();
    var getId=makeid()
    $('#form-select-them').append('<div class="sub-add-them '+getId+'"> <h6 class="sub-heading-add">Thông tin</h6> <button class="sub-add-them-dele" id="btn-'+getId+'" type="button"><i class="ti-close"></i></button> </div>')
    $('#moreInformation').append('<div class="cv-job-infor-wrapper '+getId+'"> <span class="cv-job-infor cv-skill">'+$('#input-moreInfor__description').val()+'</span> </div>')
    $('#btn-'+getId).click(()=>{
        $('.'+getId).remove()
    })
    $('div').removeClass('js-open')
})

function makeid() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

// Upload ảnh ava
var loadFile = function(event) {
	var image = document.getElementById('output-img');
	image.src = URL.createObjectURL(event.target.files[0]);
};