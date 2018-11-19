package smplgrm.simplegram.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 
 * アカウント情報
 * 
 * @author MIZUOCHI TOMOMI
 *
 */
@Entity
@Table(name = "ACCOUNT_INFO")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountInfo {

	@Id
	@GeneratedValue
	private Integer id;

	@Column(nullable = false)
	private String accountId;

	@Column(nullable = false)
	private String mailAddress;

	@Column(nullable = false)
	private Integer isDeleted;

	@Column(nullable = false)
	private Date inputDate;

	@Column(nullable = false)
	private String inputAccountId;

	@Column(nullable = false)
	private Date updateDate;

	@Column(nullable = false)
	private String updateAccountId;

}
