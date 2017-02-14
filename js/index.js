import ImageDiff from 'image-diff-view';
require('image-diff-view/index.css');

function compare(el, one, two) {
    el.style.display = "inline-block";
    // Build out the weird mandatory HTML structure
    const image_diff = document.createElement("div");
    image_diff.classList.add("image-diff");
    el.appendChild(image_diff);
    const inner = document.createElement("div");
    inner.classList.add("image-diff__inner");
    const before = document.createElement("div");
    before.classList.add("image-diff__before");
    before.appendChild(document.createElement('img'));
    const wrap = document.createElement('div');
    wrap.classList.add("image-diff__wrapper");
    const after = document.createElement("div");
    after.appendChild(document.createElement('img'));
    after.classList.add("image-diff__after");
    inner.appendChild(before);
    inner.appendChild(wrap);
    wrap.appendChild(after);
    image_diff.appendChild(inner);

    const id = new ImageDiff(image_diff, one, two, "swipe");
    // Build out the input widgets to update the differ
    const inputs = document.createElement("div");
    const radios = document.createElement("div");
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = 0;
    slider.max = 100;
    slider.value = 0;
    slider.step = 1;
    slider.oninput = (e) => {
        id.tune(slider.value / 100);
    }
    inputs.appendChild(slider);
    slider.style.width = "100%";
    slider.style.marginLeft = 0;
    slider.style.marginRight = 0;

    inputs.appendChild(radios);

    function update(ev) {
        id.update(one, two, ev.target.value);
        slider.value = 0;
    }

    function radio(value) {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        label.style.marginRight = "2em";
        radio.type = "radio";
        radio.name = "diff_type";
        radio.value = value;
        radio.onchange = update;
        if (value === "swipe") {
            radio.checked = true;
        }
        label.appendChild(document.createTextNode(value));
        label.appendChild(radio);
        return label;
    }

    radios.appendChild(radio("swipe"));
    radios.appendChild(radio("fade"));
    radios.appendChild(radio("difference"));
    el.appendChild(inputs);
}

export {compare};