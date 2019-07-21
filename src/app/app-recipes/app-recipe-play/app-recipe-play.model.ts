export class AppRecipePlay {
  public id: string;
  public recipeId: string;
  public startedOn: number; // Timestamp

  constructor(id: string, recipeId: string, startedOn: number) {
    this.id = id;
    this.recipeId = recipeId;
    this.startedOn = startedOn;
  }
}
