# GoF (Design Pattern)

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

## 2. Adapter

### Pattern
- **Target** : `Print` Interface have `printWeak()`, `printStrong()` method.
- **Client** : `Main` Class use `Print` Interface.
- **Adaptee** (適合される側) : `Banner` Class have `showWithParen()`, `showWithAster()` method.
- **Adapter** (適合する側) : `PrintBanner` Class is Adapter of `Banner` Class.
```java
public class Adapter extends Adaptee
// or
public class Adapter extends Adaptee implements Target
```
