package info.bamzy.newspump;

import com.fasterxml.jackson.annotation.JsonProperty;

record ConsumedMessage(@JsonProperty("message") String message,
                       @JsonProperty("identifier") String identifier) {
}
