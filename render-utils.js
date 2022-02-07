export function renderListItem(animal) {
    const div = document.createElement('div');
    div.classList.add('animal');
    div.style.top = animal.top;
    div.style.left = animal.left;

    const img = document.createElement('img');
    img.src = `./assets/${animal.type}.svg`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = animal.name;
    nameSpan.classList.add('name');

    const span = document.createElement('span');
    span.textContent = animal.says;

    const a = document.createElement('a');
    a.href = `/animals/?id=${animal.id}`;
    a.setAttribute('target', '_blank');

    div.append(img, nameSpan, span);
    a.append(div);
    return a;
}
