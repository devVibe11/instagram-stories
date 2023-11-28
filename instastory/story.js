let arr = [
    {
        dp: "https://images.unsplash.com/flagged/photo-1555604858-34f65cfdc1db?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
        story:
            "https://images.unsplash.com/photo-1556683944-ba658344ba06?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    },
    {
        dp: "https://images.unsplash.com/photo-1556347961-f9521a88cb8a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:
            "https://plus.unsplash.com/premium_photo-1664362416080-20a3a18d1b7e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    }, {
        dp: "https://images.unsplash.com/photo-1558507652-2d9626c4e67a?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
        story:
            "https://images.unsplash.com/photo-1577694379674-3da6daf767ca?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
    }, {
        dp: "https://images.unsplash.com/photo-1556630820-200f321dce4a?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        story:
            "https://images.unsplash.com/photo-1701009203360-ba64a6d53f5c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D",
    }
    , {
        dp: "https://images.unsplash.com/photo-1626519186781-e1126a17567c?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8bExFUGFveWtXaDB8fGVufDB8fHx8fA%3D%3D",
        story:
            "https://images.unsplash.com/photo-1701009203360-ba64a6d53f5c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D",
    }
]
let clutter = "";
arr.forEach(function (elem, idx) {
    clutter += `<div class="story" id="${idx}"><img src="${elem.dp}" alt=""></div>`;
});

document.querySelector("#card").innerHTML = clutter;

document.querySelectorAll(".story").forEach(function (storyElement) {
    storyElement.addEventListener("click", function (event) {
        document.querySelector("#full-screen").style.display = "block";
        document.querySelector("#full-screen").style.backgroundImage = `url(${arr[event.currentTarget.id].story})`;

        setTimeout(function () {
            document.querySelector("#full-screen").style.display = "none";
        }, 3000);
    });
});
