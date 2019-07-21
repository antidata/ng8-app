export class RecipeStepContent {
  public id: string;
  public url: string;
  public contentType: string;

  constructor(id: string, url: string, contentType: string) {
    this.id = id;
    this.url = url;
    this.contentType = contentType;
  }
}
