package KyushMyush.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KyushMyush.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ОтчетОСервере
 */
@Entity(name = "IISKyushMyushОтчетОСервере")
@Table(schema = "public", name = "ОтчетОСервере")
public class OtchetOServere {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Режим")
    private String режим;


    public OtchetOServere() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getРежим() {
      return режим;
    }

    public void setРежим(String режим) {
      this.режим = режим;
    }


}