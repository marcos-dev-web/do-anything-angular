import { Component, OnInit } from '@angular/core';

type Car = Array<{name: string; id: string, total: number}>;
type Items = Array<{name: string; id: string; }>;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
	constructor() { }

	name: string = "";
	modalIsOpened: boolean = false;

	car: Car | null = [];
	items: Items = [
		{
			name: 'Shirt',
			id: '1',
			
		},
		{
			name: "Shoe",
			id: '2',
		},
		{
			name: "pant",
			id: '3',
		},
		{
			name: "hat",
			id: '4',
		},
	];

	closeModal(): void {
		this.modalIsOpened = false;
	}

	openModal(): void {
		this.modalIsOpened = true;
	}

	confirm(): void {
		this.closeModal();
		if (this.name.length === 0) {
			alert('please enter a name to buy!');
		} else {
			this.car = null;
			alert("Done! your products are sent to you!");
		}
	}

	cancel(): void {
		this.closeModal();
	}

	addNewItem(name: string, id: string): void {
		if (this.car !== null) {
			if (this.car.some(i => i.id === id)) {
				const index = this.car.findIndex(r => r.id === id);
				this.car[index] = {
					...this.car[index],
					total: ++this.car[index].total,
				}
			} else {
				this.car.push({
					name: name,
					id: id,
					total: 1,
				});
			}
		} else {
			this.car = [{
				name: name,
				id: id,
				total: 1,
			}];
		}
	}

	removeItem(id: string) {
		if (this.car !== null) {
			if (this.car.some(i => i.id === id)) {
				const index = this.car.findIndex(i => i.id === id);
				if (this.car[index].total > 1) {
					this.car[index] = {
						...this.car[index],
						total: --this.car[index].total,
					}
				} else {
					this.car = this.car.filter(i => i.id !== id);
				}
			} else {
				this.car = this.car.filter(i => i.id !== id);
			}
		}
	}

	removeValue(event: any): void {
		if (this.name.length === 0) {
			event.target.textContent = "";
		}
	}

	changeName(event: any): void {
		const key: string = event.key;
		if (key === "Enter") {
			event.target.blur();
		}

		if ('abcdefghijklmnopqrstuvwxyz0123456789.backspaceshiftarrowleftarrowright'.indexOf(key.toLowerCase()) !== -1) {
			this.name = event.target.textContent;
		} else {
			event.preventDefault();
		}
	}

	verifyInput(event: any): void {
		if (this.name.length === 0) {
			event.target.classList.add('unamed');
			event.target.textContent = "unamed";
		} 
	}

	buy(): void {
		if (this.car !== null) {
			if (this.car.length > 0) {
				this.openModal();
			}
		}
	}

	ngOnInit(): void {
  }

}
