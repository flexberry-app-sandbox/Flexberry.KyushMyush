﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.KyushMyush
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Настройки.
    /// </summary>
    // *** Start programmer edit section *** (Настройки CustomAttributes)

    // *** End programmer edit section *** (Настройки CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("НастройкиE", new string[] {
            "ТипНастроек as \'Тип настроек\'",
            "ДатаНачала as \'Дата начала\'",
            "ДатаОкончания as \'Дата окончания\'",
            "Описаний as \'Описаний\'"})]
    [View("НастройкиL", new string[] {
            "ТипНастроек as \'Тип настроек\'",
            "ДатаНачала as \'Дата начала\'",
            "ДатаОкончания as \'Дата окончания\'",
            "Описаний as \'Описаний\'"})]
    public class Настройки : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.KyushMyush.ТипНастр fТипНастроек;
        
        private System.DateTime fДатаНачала;
        
        private System.DateTime fДатаОкончания;
        
        private string fОписаний;
        
        // *** Start programmer edit section *** (Настройки CustomMembers)

        // *** End programmer edit section *** (Настройки CustomMembers)

        
        /// <summary>
        /// ДатаНачала.
        /// </summary>
        // *** Start programmer edit section *** (Настройки.ДатаНачала CustomAttributes)

        // *** End programmer edit section *** (Настройки.ДатаНачала CustomAttributes)
        public virtual System.DateTime ДатаНачала
        {
            get
            {
                // *** Start programmer edit section *** (Настройки.ДатаНачала Get start)

                // *** End programmer edit section *** (Настройки.ДатаНачала Get start)
                System.DateTime result = this.fДатаНачала;
                // *** Start programmer edit section *** (Настройки.ДатаНачала Get end)

                // *** End programmer edit section *** (Настройки.ДатаНачала Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Настройки.ДатаНачала Set start)

                // *** End programmer edit section *** (Настройки.ДатаНачала Set start)
                this.fДатаНачала = value;
                // *** Start programmer edit section *** (Настройки.ДатаНачала Set end)

                // *** End programmer edit section *** (Настройки.ДатаНачала Set end)
            }
        }
        
        /// <summary>
        /// ДатаОкончания.
        /// </summary>
        // *** Start programmer edit section *** (Настройки.ДатаОкончания CustomAttributes)

        // *** End programmer edit section *** (Настройки.ДатаОкончания CustomAttributes)
        public virtual System.DateTime ДатаОкончания
        {
            get
            {
                // *** Start programmer edit section *** (Настройки.ДатаОкончания Get start)

                // *** End programmer edit section *** (Настройки.ДатаОкончания Get start)
                System.DateTime result = this.fДатаОкончания;
                // *** Start programmer edit section *** (Настройки.ДатаОкончания Get end)

                // *** End programmer edit section *** (Настройки.ДатаОкончания Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Настройки.ДатаОкончания Set start)

                // *** End programmer edit section *** (Настройки.ДатаОкончания Set start)
                this.fДатаОкончания = value;
                // *** Start programmer edit section *** (Настройки.ДатаОкончания Set end)

                // *** End programmer edit section *** (Настройки.ДатаОкончания Set end)
            }
        }
        
        /// <summary>
        /// Описаний.
        /// </summary>
        // *** Start programmer edit section *** (Настройки.Описаний CustomAttributes)

        // *** End programmer edit section *** (Настройки.Описаний CustomAttributes)
        [StrLen(255)]
        public virtual string Описаний
        {
            get
            {
                // *** Start programmer edit section *** (Настройки.Описаний Get start)

                // *** End programmer edit section *** (Настройки.Описаний Get start)
                string result = this.fОписаний;
                // *** Start programmer edit section *** (Настройки.Описаний Get end)

                // *** End programmer edit section *** (Настройки.Описаний Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Настройки.Описаний Set start)

                // *** End programmer edit section *** (Настройки.Описаний Set start)
                this.fОписаний = value;
                // *** Start programmer edit section *** (Настройки.Описаний Set end)

                // *** End programmer edit section *** (Настройки.Описаний Set end)
            }
        }
        
        /// <summary>
        /// ТипНастроек.
        /// </summary>
        // *** Start programmer edit section *** (Настройки.ТипНастроек CustomAttributes)

        // *** End programmer edit section *** (Настройки.ТипНастроек CustomAttributes)
        public virtual IIS.KyushMyush.ТипНастр ТипНастроек
        {
            get
            {
                // *** Start programmer edit section *** (Настройки.ТипНастроек Get start)

                // *** End programmer edit section *** (Настройки.ТипНастроек Get start)
                IIS.KyushMyush.ТипНастр result = this.fТипНастроек;
                // *** Start programmer edit section *** (Настройки.ТипНастроек Get end)

                // *** End programmer edit section *** (Настройки.ТипНастроек Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Настройки.ТипНастроек Set start)

                // *** End programmer edit section *** (Настройки.ТипНастроек Set start)
                this.fТипНастроек = value;
                // *** Start programmer edit section *** (Настройки.ТипНастроек Set end)

                // *** End programmer edit section *** (Настройки.ТипНастроек Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "НастройкиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НастройкиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НастройкиE", typeof(IIS.KyushMyush.Настройки));
                }
            }
            
            /// <summary>
            /// "НастройкиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НастройкиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НастройкиL", typeof(IIS.KyushMyush.Настройки));
                }
            }
        }
    }
}
