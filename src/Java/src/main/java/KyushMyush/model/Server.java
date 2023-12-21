package KyushMyush.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KyushMyush.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Сервер
 */
@Entity(name = "IISKyushMyushСервер")
@Table(schema = "public", name = "Сервер")
public class Server {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "IP")
    private String ip;

    @Column(name = "Порт")
    private Integer порт;

    @Column(name = "Протокол")
    private String протокол;


    public Server() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getIP() {
      return ip;
    }

    public void setIP(String ip) {
      this.ip = ip;
    }

    public Integer getПорт() {
      return порт;
    }

    public void setПорт(Integer порт) {
      this.порт = порт;
    }

    public String getПротокол() {
      return протокол;
    }

    public void setПротокол(String протокол) {
      this.протокол = протокол;
    }


}