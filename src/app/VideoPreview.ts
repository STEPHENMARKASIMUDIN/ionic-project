export class VideoPreview {
    ShowPreview(element) {
        let _vidId = element.getElementsByClassName("vid-thumbnail")[0].getAttribute("data-id");
        let _vidPath = element.getElementsByClassName("vid-thumbnail")[0].getAttribute("data-info");
        element.getElementsByClassName("vid-thumbnail")[0].setAttribute("id", "active-vid-thumbnail");
        element.getElementsByClassName("vid-thumbnail")[0].style.display = "none";
        let vid = document.getElementById(_vidId).insertAdjacentHTML("beforeend","<video id='_" + _vidId + "' width='209' height='117' muted autoplay><source src='" + _vidPath + "' type='video/mp4'><source src='" + _vidPath + "' type='video/ogg'><source src='" + _vidPath + "' type='video/webm'>Your browser does not support the video tag.</video>");
        //let vid = document.createElement("video");

        //let source1 = document.createElement("source");

        //source1.setAttribute("src", _vidPath);
        //source1.setAttribute("type", "video/mp4");

        //let source2 = document.createElement("source");

        //source2.setAttribute("src", _vidPath);
        //source2.setAttribute("type", "video/ogg");

        //let source3 = document.createElement("source");

        //source3.setAttribute("src", _vidPath);
        //source3.setAttribute("type", "video/webm");

        //let vid_text = document.createTextNode("Your browser does not support the video tag.");

        //vid.appendChild(source1);
        //vid.appendChild(source2);
        //vid.appendChild(source3);
        //vid.appendChild(vid_text);

        //vid.setAttribute("id", "_" + _vidId);
        //vid.setAttribute("width", "209");
        //vid.setAttribute("height", "117");
        //vid.setAttribute("muted", "true");
        //vid.setAttribute("autoplay", "true");
        //vid.setAttribute("playsinline", "true");

        //document.getElementById(_vidId).appendChild(vid);
    }

    HidePreview() {
        let r_vidId = document.getElementById("active-vid-thumbnail").getAttribute("data-id");
        /* remove the video in thumbnail container */
        document.getElementById("_" + r_vidId).remove();
        /* display again the image in thumbnail container */
        let active_vid = document.getElementById("active-vid-thumbnail");
        active_vid.style.display = "block";
        active_vid.removeAttribute("id");
    }
}