// Thay đổi nội dung búc thư ở đây
var letterContent =" Cảm ơn em đã dành thời gian để nhìn những trò trẻ con của anhh và anh có những điều muốn gởi đến em ❤️. Thật ra lúc nào anh cũng rất thương em, nhưng anh không biết cách yêu sao cho đúng.Nhiều khi anh đã vô ý làm em tổn thương trong mối quan hệ này. Anh thật lòng muốn ôm em vào lòng để xóa dịu những nỗi buồn anh mang đến cho em.Thật lòng anh không muốn như thế đâu, đối với anh gặp em đã là một phép nhiệm màu, anh cũng chưa từng nghĩ là mình sẽ thương em nhiều đến vậy.Do bản thân anh còn trẻ con, vụn về trong những lời nói cũng như cách đối xử với người mình yêu sao cho đúng.Khi gặp được em , anh luôn học cách dịu dàng hơn,tử tế hơn với em, để mỗi ngày bên anh, em đều cảm thấy hạnh phúc.Anh tập thương em bằng tất cả sự chân thành, tập yêu em nhiều hơn cả những gì anh nghi mình có thể.Vì với anh, em chính là lý do để anh trở thành một người tốt đẹp hơn..Anh biết bản thân mình cũng là một vấn đề lớn, nên anh đang rất cố gắng thay đối bản thân để dần yêu em  hơn. Mong em luôn ở đây để anh được đồng hành và dành trọn yêu thương cho em.Nhiều lúc anh nghĩ.Anh quay lại lần này để anh mún bù đắp những ngày tháng mà mình đã làm tổn thương đến người con gái mà mình yêu . Cô gái mà anh yêu nhiều hơn.💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})