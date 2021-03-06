import { ajax } from "discourse/lib/ajax";

const Invoice = Discourse.Model.extend({});

Invoice.reopenClass({
  findAll() {
    return ajax("/s/invoices", { method: "get" }).then(result =>
      result.map(invoice => Invoice.create(invoice))
    );
  }
});

export default Invoice;
