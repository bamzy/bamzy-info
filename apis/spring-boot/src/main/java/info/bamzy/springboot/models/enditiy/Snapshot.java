package info.bamzy.springboot.models.enditiy;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

import java.util.Date;
import java.util.Objects;
import java.util.UUID;

@Entity(name="snapshots")
public class Snapshot {
    @Id
    private UUID id;
    @Column
    private Date createdDate;
    @Column(name = "content")
    private String content;

    @ManyToOne
    private NewsSource newsSource;

    public NewsSource getNewsSource() {
        return newsSource;
    }

    public void setNewsSource(NewsSource newsSource) {
        this.newsSource = newsSource;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public Snapshot() {
        super();
    }

    public void setCreatedDate(Date date) {
        this.createdDate = date;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String displayName) {
        this.content = displayName;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }


    public Snapshot(Date createdDate, String content, UUID id,NewsSource newsSource) {
        this.createdDate = createdDate;
        this.content = content;
        this.id = id;
        this.newsSource = newsSource;
    }

    @Override
    public String toString() {
        return "Snapshot{" +
                "id=" + id +
                ", createdDate=" + createdDate +
                ", content='" + content + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Snapshot that = (Snapshot) o;
        return  id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(createdDate, content, id);
    }
}
