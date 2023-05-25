package info.bamzy.springboot.models;

import info.bamzy.springboot.models.enditiy.NewsSource;

import java.util.UUID;

public interface NewsSourceDataRepoInterface {
    public void insert(NewsSource ns);

    public void delete(UUID id);

    public NewsSource findById(UUID id);
}
