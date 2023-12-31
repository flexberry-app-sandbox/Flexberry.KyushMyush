package KyushMyush.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KyushMyush.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: Настройки
 */
@Entity(name = "IISKyushMyushНастройки")
@Table(schema = "public", name = "Настройки")
public class Nastrojki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ТипНастроек")
    private String типнастроек;

    @Column(name = "ДатаНачала")
    private Date датаначала;

    @Column(name = "ДатаОкончания")
    private Date датаокончания;

    @Column(name = "Описаний")
    private String описаний;


    public Nastrojki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getТипНастроек() {
      return типнастроек;
    }

    public void setТипНастроек(String типнастроек) {
      this.типнастроек = типнастроек;
    }

    public Date getДатаНачала() {
      return датаначала;
    }

    public void setДатаНачала(Date датаначала) {
      this.датаначала = датаначала;
    }

    public Date getДатаОкончания() {
      return датаокончания;
    }

    public void setДатаОкончания(Date датаокончания) {
      this.датаокончания = датаокончания;
    }

    public String getОписаний() {
      return описаний;
    }

    public void setОписаний(String описаний) {
      this.описаний = описаний;
    }


}