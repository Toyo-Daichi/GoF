public class ListVisitor extends Visitor {
  private String currentdir = "";

  @Override
  public void vist(File file) {
    System.out.println(currentdir + "/" + file);
  }

  @Override
  public void visit(Directory directory) {
    System.out.println(currentdir + "/" + directory);
    String savedir = currentdir;
    for (Entry entry: directory) {
      entry.accept(this);
    }
    currentdir = savedir;
  }
}
