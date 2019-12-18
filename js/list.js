document.getElementById('add-component-type-1').onclick = function() {
	clearList();
	let newComponent = createComponentType1();
	appendComponentOnList(newComponent);
}

document.getElementById('add-component-type-2').onclick = function() {
	clearList();
	let newComponent = createComponentType2();
	appendComponentOnList(newComponent);
}

document.getElementById('add-component-type-3').onclick = function() {
	clearList();
	let newComponent = createComponentType3();
	appendComponentOnList(newComponent);
}

function createComponentType1() {
	removeNestedButtons();
	let title = document.createElement('h1');
	title.innerHTML = 'Component Type 1'

	let newListItem = document.createElement('li');

	let newInputField1 = document.createElement('input');
	newInputField1.setAttribute('class',`field-1`);

	let newInputField2 = document.createElement('input');
	newInputField2.setAttribute('class',`field-2`);

	newListItem.appendChild(title);
	newListItem.appendChild(newInputField1);
	newListItem.appendChild(newInputField2);

	return newListItem;
}

function createComponentType2() {
	removeNestedButtons();
	let title = document.createElement('h1');
	title.innerHTML = 'Component Type 2'

	let newListItem = document.createElement('li');

	let newInputField1 = document.createElement('input');
	newInputField1.setAttribute('class',`field-3`);

	let newInputField2 = document.createElement('input');
	newInputField2.setAttribute('class',`field-4`);

	newListItem.appendChild(title);
	newListItem.appendChild(newInputField1);
	newListItem.appendChild(newInputField2);

	return newListItem;
}

function createComponentType3() {
	removeNestedButtons();
	let title = document.createElement('h1');
	title.innerHTML = 'Component Type 3'

	let newListItem = document.createElement('li');

	let newInputField1 = document.createElement('input');
	newInputField1.setAttribute('class',`field-5`);

	let newInputField2 = document.createElement('input');
	newInputField2.setAttribute('class',`field-6`);

	let newInputField3 = document.createElement('input');
	newInputField3.setAttribute('class',`field-7`);

	let line = document.createElement('br');

	let divButtons = document.createElement('div');
	divButtons.setAttribute('id','nested-buttons');

	let button1 = document.createElement('button');
	button1.setAttribute('id', 'nested-add-item-type-1');
	button1.innerHTML = 'Add Nested Component Type 1'

	let button2 = document.createElement('button');
	button2.setAttribute('id', 'nested-add-item-type-2');
	button2.innerHTML = 'Add Nested Component Type 2'

	let button3 = document.createElement('button');
	button3.setAttribute('id', 'nested-add-item-type-3');
	button3.innerHTML = 'Add Nested Component Type 3'

	setNestedButtons(button1, button2, button3);

	newListItem.appendChild(title);
	newListItem.appendChild(newInputField1);
	newListItem.appendChild(newInputField2);
	newListItem.appendChild(newInputField3);
	newListItem.appendChild(line);
	divButtons.appendChild(button1);
	divButtons.appendChild(button2);
	divButtons.appendChild(button3);
	newListItem.appendChild(divButtons);

	return newListItem;
}

function appendComponentOnList(component) {
	let patternList = document.getElementById('component-list');
	patternList.appendChild(component);
}

function clearList() {
	document.getElementById('component-list').innerHTML = '';
}

function setNestedButtons(button1, button2, button3) {
	button1.onclick = function() {
		// clearList();
		let newComponent = createComponentType1();
		appendComponentOnList(newComponent);
	}

	button2.onclick = function() {
		let newComponent = createComponentType2();
		appendComponentOnList(newComponent);
	}

	button3.onclick = function() {
		let newComponent = createComponentType3();
		appendComponentOnList(newComponent);
	}
}

function removeNestedButtons() {
	try {
		let nestedButtons = document.getElementById('nested-buttons');
		nestedButtons.parentElement.removeChild(nestedButtons);
	} catch {}
}
