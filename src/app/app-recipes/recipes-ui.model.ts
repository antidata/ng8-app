export class RecipesUi {
  public expandedRecipeListDetailsId: string;
  public editingStep: boolean;
  public editingStepContent: boolean;

  constructor(expandedRecipeListDetailsId: string, editingStep = false, editingStepContent = false) {
    this.expandedRecipeListDetailsId = expandedRecipeListDetailsId;
    this.editingStep = editingStep;
    this.editingStepContent = editingStepContent;
  }
}
