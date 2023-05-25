package info.bamzy.springboot.models.enditiy;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.List;
import java.util.Objects;
import java.util.UUID;
@Entity(name="newssources")
public class NewsSource {
    @Id
    private UUID id;
    @Column
    private String url;
    @Column(name = "display_name")
    private String displayName;
    @OneToMany
    private List<Snapshot> snapshots;

    public List<Snapshot> getSnapshots() {
        return snapshots;
    }

    public void setSnapshots(List<Snapshot> snapshots) {
        this.snapshots = snapshots;
    }

    public String getUrl() {
        return url;
    }

    public NewsSource() {
        super();
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }


    @Override
    public String toString() {
        return "NewsSource{" +
                "url='" + url + '\'' +
                ", displayName='" + displayName + '\'' +
                ", id=" + id +
                '}';
    }

    public NewsSource(String url, String displayName, UUID id,List<Snapshot> snapshots) {
        this.url = url;
        this.displayName = displayName;
        this.id = id;
        this.snapshots = snapshots;
    }
    public NewsSource(String url, String displayName, UUID id) {
        this.url = url;
        this.displayName = displayName;
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        NewsSource that = (NewsSource) o;
        return  id.equals(that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(url, displayName, id);
    }
}
