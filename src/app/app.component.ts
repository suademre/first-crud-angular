import { Component } from "@angular/core";
import { itemsModel } from "./model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Todo App";
  showAll = true;
  itemLengt: number;
  textValue = "";
  updateItem;
  items: itemsModel[] = [
    { id: "1", description: "Spor", action: false },
    { id: "2", description: "siname", action: true },
    { id: "3", description: "Angular", action: false },
    { id: "4", description: "Shopping", action: false }
  ];

  constructor() {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    if (!this.showAll) {
      let filteredItems = this.items.filter((item) => !item.action);
      this.itemLengt = filteredItems.length;
      return filteredItems;
    } else {
      return this.items;
    }
  }

  addItems(value) {
    if (value) {
      this.items.push({
        id: (this.items.length + 1).toString(),
        description: value,
        action: false
      });
    }
    console.log(this.items);
  }

  deleteItems(id) {
    let newItems = this.items.filter((itemid) => id !== itemid.id);
    return (this.items = newItems);
  }

  updateItems(id) {
    this.updateItem = this.items.find((itemid) => id === itemid.id);
    this.textValue = this.updateItem.description;
    if (this.updateItem) {
      this.items.splice(Number(id), 1);
    }
    console.log(this.updateItem);
  }
}
