package KyushMyush.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KyushMyush.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Программы
 */
@Entity(name = "IISKyushMyushПрограммы")
@Table(schema = "public", name = "Программы")
public class Programmy {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Название")
    private String название;

    @Column(name = "Описание")
    private String описание;

    @Column(name = "Версия")
    private String версия;

    @Column(name = "Размер")
    private String размер;

    @Column(name = "ЕдИзмерения")
    private String едизмерения;


    public Programmy() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНазвание() {
      return название;
    }

    public void setНазвание(String название) {
      this.название = название;
    }

    public String getОписание() {
      return описание;
    }

    public void setОписание(String описание) {
      this.описание = описание;
    }

    public String getВерсия() {
      return версия;
    }

    public void setВерсия(String версия) {
      this.версия = версия;
    }

    public String getРазмер() {
      return размер;
    }

    public void setРазмер(String размер) {
      this.размер = размер;
    }

    public String getЕдИзмерения() {
      return едизмерения;
    }

    public void setЕдИзмерения(String едизмерения) {
      this.едизмерения = едизмерения;
    }


}