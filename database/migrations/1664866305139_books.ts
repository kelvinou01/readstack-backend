import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Books extends BaseSchema {
  protected tableName = "books";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.integer("stack_id").references("id").inTable("stacks").onDelete("CASCADE");
      table.string("title");
      table.string("author");
      table.string("cover_photo_url");

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
