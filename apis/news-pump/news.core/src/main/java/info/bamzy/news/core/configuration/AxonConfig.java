package info.bamzy.news.core.configuration;


import com.mongodb.ServerAddress;


import com.mongodb.client.MongoClient;
import org.axonframework.eventhandling.tokenstore.TokenStore;
import org.axonframework.eventsourcing.eventstore.EmbeddedEventStore;
import org.axonframework.eventsourcing.eventstore.EventStorageEngine;
import org.axonframework.eventsourcing.eventstore.EventStore;

import org.axonframework.extensions.mongo.DefaultMongoTemplate;
import org.axonframework.extensions.mongo.MongoTemplate;
import org.axonframework.extensions.mongo.eventsourcing.eventstore.MongoEventStorageEngine;
import org.axonframework.extensions.mongo.eventsourcing.eventstore.MongoFactory;
import org.axonframework.extensions.mongo.eventsourcing.eventstore.MongoSettingsFactory;
import org.axonframework.extensions.mongo.eventsourcing.tokenstore.MongoTokenStore;
import org.axonframework.serialization.Serializer;
import org.axonframework.spring.config.AxonConfiguration;
import org.axonframework.springboot.autoconfig.AxonAutoConfiguration;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Collections;

@Configuration
public class AxonConfig {

    @Value("${spring.data.mongodb.host:127.0.0.1}")
    private String mongoHostURL;
    @Value("${spring.data.mongodb.port:27017}")
    private int mongoPortNumber;
    @Value("${spring.data.mongodb.database:user}")
    private String mongoDatabaseName;

    @Bean
    public com.mongodb.client.MongoClient mongoBuild() {
        var mongoFactory = new MongoFactory();
        var mongoSettings = new MongoSettingsFactory();
        mongoSettings
                .setMongoAddresses(
                        Collections.singletonList(new ServerAddress(mongoHostURL, mongoPortNumber))
                );
        mongoFactory.setMongoClientSettings(mongoSettings.createMongoClientSettings());


        return mongoFactory.createMongo();
    }
//
    @Bean
    public MongoTemplate axonMongoTemplate() {
        return DefaultMongoTemplate.builder()
                .mongoDatabase(mongoBuild(), mongoDatabaseName)
                .build();
    }

    @Bean
    public TokenStore tokenStore(Serializer serializer) {
        return MongoTokenStore.builder()
                .mongoTemplate(axonMongoTemplate())
                .serializer(serializer)
                .build();
    }
//
    @Bean
    public EventStorageEngine storageEngine(MongoClient client) {
        return MongoEventStorageEngine.builder()
                .mongoTemplate(DefaultMongoTemplate.builder()
                        .mongoDatabase(client)
                        .build())
                .build();
    }
//
    @Bean
    public EmbeddedEventStore eventStore(EventStorageEngine storageEngine, Axon configuration) {
        var configurer = new AxonAutoConfiguration()
        return EmbeddedEventStore.builder()
                .storageEngine(storageEngine)
                .messageMonitor(configuration.messageMonitor(EventStore.class, "eventStore"))
                .build();
    }

//    @Bean
//    public EventStore eventStore(EventStorageEngine storageEngine,
//                                 GlobalMetricRegistry metricRegistry) {
//        return EmbeddedEventStore.builder()
//                .storageEngine(storageEngine)
//                .messageMonitor(metricRegistry.registerEventBus("eventStore"))
//                .spanFactory(spanFactory)
//                // ...
//                .build();
//    }

}