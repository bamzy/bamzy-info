package info.bamzy.springboot.models;

import java.util.UUID;

public class NewsSource {
    private String url;
    private String displayName;

    public String getUrl() {
        return url;
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

    private UUID id;

    public NewsSource(String url, String displayName, UUID id) {
        this.url = url;
        this.displayName = displayName;
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
}
