# GoF ~Design Pattern~

## 1. Iterator

### Pattern
- **Aggregate** : `Iterable<E>` Interface have `iterator()` method.
```java
public interface Iterable<E> {
    public Iterator<E> iterator();
}
```
- **Iterator** : `Iterator<E>` Interface have `hasNext()`, `next()` method.
```java
public interface Iterator<E> {
    public boolean hasNext();
    public E next();
}
```
- **ConcreteAggregate** : Method of `Aggregate` Interface is BookShelf.
```java
public class BookShelf implements Iteratable<Book> {}
```
- **ConcreteIterator** : Detail of `Iterator` Interface is BookShelfIterator.
```java
public class BookShelfIterator implements Iterator<Book> {}
```
