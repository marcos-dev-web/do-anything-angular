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

	ngOnInit(): void {
  }

}
